import { useEffect, useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp, Bot, ChevronDown, Cookie, MessageCircle, Minus, Send, Settings2, ShieldCheck, X } from "lucide-react"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
  Textarea,
} from "@/components"
import {
  chatbotBudgetRanges,
  chatbotQuickOptions,
  chatbotServiceOptions,
  chatbotTimelines,
} from "@/data/mega-menu"
import { savePreference, saveRecord } from "@/utils"

type CookieChoice = "accepted" | "rejected" | "custom"

const cookiePreferenceEvent = "nexora:open-cookie-preferences"

function resolveQuickOption(option: (typeof chatbotQuickOptions)[number]): (typeof chatbotServiceOptions)[number] {
  if (option === "Talk to Sales") {
    return "Support"
  }
  if (option === "AI Agents") {
    return "AI Agent Development"
  }
  return option as (typeof chatbotServiceOptions)[number]
}

export function SiteWidgets() {
  const [chatOpen, setChatOpen] = useState(false)
  const [leadOpen, setLeadOpen] = useState(false)
  const [cookieVisible, setCookieVisible] = useState(false)
  const [cookieManageOpen, setCookieManageOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [selectedService, setSelectedService] = useState<(typeof chatbotServiceOptions)[number]>("AI Automation")
  const [showRequirementForm, setShowRequirementForm] = useState(false)
  const [assistantReply, setAssistantReply] = useState("")
  const [requirementSaved, setRequirementSaved] = useState(false)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [unreadAssistant, setUnreadAssistant] = useState(true)

  useEffect(() => {
    const consent = window.localStorage.getItem("nexora_cookie_consent")
    setCookieVisible(!consent)

    const openPreferences = () => {
      setCookieVisible(false)
      setCookieManageOpen(true)
    }
    window.addEventListener(cookiePreferenceEvent, openPreferences)

    const chatTimer = window.setTimeout(() => {
      const alreadyOpened = window.localStorage.getItem("nexora_ai_chat_auto_opened")
      if (!alreadyOpened) {
        savePreference("nexora_ai_chat_auto_opened", "true")
        setUnreadAssistant(false)
        setChatOpen(true)
      }
    }, 4000)

    const leadTimer = window.setTimeout(() => {
      const dismissed = window.localStorage.getItem("nexora_lead_popup_dismissed")
      const dialogOpen = document.querySelector('[role="dialog"], [aria-label="Nexora AI assistant"]')
      if (!dismissed && !dialogOpen) {
        setLeadOpen(true)
      }
    }, 16000)

    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.clearTimeout(chatTimer)
      window.clearTimeout(leadTimer)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener(cookiePreferenceEvent, openPreferences)
    }
  }, [])

  function saveCookieChoice(choice: CookieChoice) {
    savePreference("nexora_cookie_consent", choice)
    savePreference(
      "nexora_cookie_preferences",
      JSON.stringify({
        analytics: choice === "accepted" || (choice === "custom" && analyticsCookies),
        essential: true,
        marketing: choice === "accepted" || (choice === "custom" && marketingCookies),
      }),
    )
    setCookieVisible(false)
    setCookieManageOpen(false)
  }

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    saveRecord("nexora_leads", Object.fromEntries(formData))
    savePreference("nexora_lead_popup_dismissed", "true")
    setLeadOpen(false)
  }

  function openAssistant(service?: (typeof chatbotServiceOptions)[number]) {
    if (service) {
      setSelectedService(service)
      setShowRequirementForm(true)
      setAssistantReply("Please fill your contact details so our expert can guide you.")
    }
    setUnreadAssistant(false)
    setChatOpen(true)
  }

  function submitChatMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!chatMessage.trim()) {
      return
    }
    setAssistantReply("Thanks for sharing. Please fill your contact details so our expert can guide you.")
    setShowRequirementForm(true)
  }

  function submitRequirement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    saveRecord("nexora_ai_agent_requirements", Object.fromEntries(formData))
    savePreference("nexora_ai_requirement_submitted", "true")
    setRequirementSaved(true)
    setShowRequirementForm(false)
    setChatMessage("")
    event.currentTarget.reset()
  }

  return (
    <>
      <a
        aria-label="Contact Nexora AI on WhatsApp"
        className="fixed right-4 bottom-24 z-40 grid size-12 place-items-center rounded-full border border-emerald-300/35 bg-[#075e34] text-white shadow-elevated transition-transform hover:scale-105 hover:bg-[#0b7a43]"
        href="https://wa.me/10000000000"
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="size-5" />
      </a>

      {!chatOpen ? (
        <button
          aria-label="Open Nexora AI assistant"
          className="fixed right-4 bottom-40 z-40 grid size-14 place-items-center rounded-2xl border border-electric-300/35 bg-[image:var(--gradient-luxury)] text-white shadow-[0_18px_55px_rgb(0_167_255_/_28%),0_0_45px_rgb(124_60_255_/_24%)] transition-all hover:-translate-y-1 hover:shadow-elevated"
          onClick={() => openAssistant()}
          type="button"
        >
          <Bot className="size-7" />
          {unreadAssistant ? (
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border border-navy-950 bg-rose-500 text-[0.65rem] font-bold text-white shadow-glow">
              1
            </span>
          ) : null}
          <span className="absolute -inset-1 -z-10 rounded-[1.35rem] bg-electric-400/20 blur-xl" />
        </button>
      ) : null}

      {showTop ? (
        <Button
          aria-label="Back to top"
          className="fixed right-4 bottom-4 z-40 rounded-full"
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          size="icon-lg"
          type="button"
          variant="glass"
        >
          <ArrowUp className="size-5" />
        </Button>
      ) : null}

      {cookieVisible ? (
        <motion.section
          aria-label="Cookie consent"
          animate={{ opacity: 1, y: 0 }}
          className="glass-surface fixed bottom-4 left-4 z-50 w-[min(calc(100vw_-_2rem),31rem)] rounded-3xl border-electric-400/25 p-5 shadow-dialog sm:p-6"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-electric-400/30 bg-electric-500/12 text-electric-300 shadow-glow">
              <Cookie className="size-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-xl font-semibold text-foreground">We value your privacy</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Nexora AI uses cookies to improve your browsing experience,
                personalize content, analyze website traffic, and enhance AI-powered services.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_1fr_1.25fr]">
                <Button onClick={() => saveCookieChoice("accepted")} size="sm" type="button" variant="gradient">
                  Accept All
                </Button>
                <Button onClick={() => saveCookieChoice("rejected")} size="sm" type="button" variant="outline">
                  Reject All
                </Button>
                <Button
                  onClick={() => {
                    setCookieVisible(false)
                    setCookieManageOpen(true)
                  }}
                  size="sm"
                  type="button"
                  variant="glass"
                >
                  <Settings2 className="size-4" />
                  Cookie Preferences
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}

      <Dialog open={cookieManageOpen} onOpenChange={setCookieManageOpen}>
        <DialogContent className="w-[min(calc(100%_-_2rem),38rem)]">
          <DialogHeader>
            <DialogTitle>Manage Cookie Preferences</DialogTitle>
            <DialogDescription>
              Essential preferences stay active so the website can remember consent and
              basic interface choices. Optional categories are stored locally for now.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <PreferenceRow
              checked
              description="Required for consent, language, currency, forms, and local UI preferences."
              disabled
              label="Essential"
            />
            <PreferenceRow
              checked={analyticsCookies}
              description="Helps measure page experience and improve website journeys."
              label="Analytics"
              onChange={setAnalyticsCookies}
            />
            <PreferenceRow
              checked={marketingCookies}
              description="Reserved for campaign preferences and conversion improvements."
              label="Marketing"
              onChange={setMarketingCookies}
            />
          </div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button onClick={() => saveCookieChoice("rejected")} type="button" variant="ghost">
              Reject
            </Button>
            <Button onClick={() => saveCookieChoice("custom")} type="button" variant="outline">
              Save Preferences
            </Button>
            <Button onClick={() => saveCookieChoice("accepted")} type="button" variant="gradient">
              Accept All
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AnimatePresence>
        {chatOpen ? (
          <motion.aside
            aria-label="Nexora AI assistant"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed right-4 bottom-4 z-50 flex w-[min(calc(100vw_-_2rem),28rem)] max-h-[min(44rem,calc(100svh-2rem))] flex-col overflow-hidden rounded-3xl border border-electric-400/25 bg-navy-950/88 shadow-[0_28px_90px_rgb(0_0_0_/_62%),0_0_60px_rgb(0_167_255_/_18%),0_0_80px_rgb(124_60_255_/_14%)] backdrop-blur-2xl"
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgb(0_167_255_/_18%),transparent_16rem),radial-gradient(circle_at_95%_15%,rgb(124_60_255_/_18%),transparent_18rem)]" />
            <header className="relative flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.045] px-4 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-luxury)] text-white shadow-glow">
                  <Bot className="size-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate font-heading text-base font-semibold text-foreground">
                    Nexora AI Assistant
                  </h2>
                  <p className="text-xs text-electric-200">Online now</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  aria-label="Minimize AI assistant"
                  className="focus-ring grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-white/8 hover:text-foreground"
                  onClick={() => setChatOpen(false)}
                  type="button"
                >
                  <Minus className="size-4" />
                </button>
                <button
                  aria-label="Close AI assistant"
                  className="focus-ring grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-white/8 hover:text-foreground"
                  onClick={() => {
                    setChatOpen(false)
                    setUnreadAssistant(false)
                  }}
                  type="button"
                >
                  <X className="size-4" />
                </button>
              </div>
            </header>

            <div className="relative grid gap-4 overflow-y-auto p-4">
              <div className="rounded-3xl border border-electric-400/20 bg-white/[0.06] p-4">
                <div className="mb-3 flex gap-1" aria-label="Assistant is typing">
                  <span className="size-1.5 animate-bounce rounded-full bg-electric-300 [animation-delay:-0.2s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-electric-300 [animation-delay:-0.1s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-electric-300" />
                </div>
                <p className="font-heading text-lg font-semibold text-foreground">👋 Welcome to Nexora AI!</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  What are you looking for today?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {chatbotQuickOptions.map((option) => (
                  <button
                    className="focus-ring min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-2 text-left text-xs font-semibold leading-5 text-slate-200 transition hover:-translate-y-0.5 hover:border-electric-400/35 hover:bg-electric-500/12 hover:text-foreground hover:shadow-glow"
                    key={option}
                    onClick={() => {
                      setSelectedService(resolveQuickOption(option))
                      setShowRequirementForm(true)
                      setAssistantReply("Please fill your contact details so our expert can guide you.")
                    }}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <form className="flex gap-2" onSubmit={submitChatMessage}>
                <Input
                  aria-label="Chat message"
                  className="rounded-2xl"
                  onChange={(event) => setChatMessage(event.target.value)}
                  placeholder="Tell us what you want to automate..."
                  value={chatMessage}
                />
                <Button aria-label="Send chat message" size="icon" type="submit" variant="gradient">
                  <Send className="size-4" />
                </Button>
              </form>

              {assistantReply ? (
                <div className="rounded-2xl border border-purple-400/25 bg-purple-500/10 p-4 text-sm leading-6 text-foreground">
                  {assistantReply}
                </div>
              ) : null}

              {showRequirementForm ? (
                <details className="rounded-3xl border border-white/10 bg-white/[0.045] p-4" open>
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-2xl font-heading text-sm font-semibold text-foreground">
                    Requirement details
                    <ChevronDown className="size-4" />
                  </summary>
                  <form className="mt-4 grid gap-3" onSubmit={submitRequirement}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Input aria-label="Full Name" name="fullName" placeholder="Full Name" required />
                      <Input aria-label="Company Name" name="companyName" placeholder="Company Name" />
                      <Input aria-label="Email" name="email" placeholder="Email" required type="email" />
                      <Input aria-label="WhatsApp Number" name="whatsappNumber" placeholder="WhatsApp Number" type="tel" />
                      <Input aria-label="Country" name="country" placeholder="Country" />
                      <select
                        aria-label="Service Required"
                        className="h-12 rounded-2xl border border-input bg-navy-900/90 px-4 text-sm text-foreground outline-none focus:border-electric-400/60 focus:ring-2 focus:ring-electric-400/20"
                        name="serviceRequired"
                        onChange={(event) =>
                          setSelectedService(event.target.value as (typeof chatbotServiceOptions)[number])
                        }
                        value={selectedService}
                      >
                        {chatbotServiceOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                      <select
                        aria-label="Budget Range"
                        className="h-12 rounded-2xl border border-input bg-navy-900/90 px-4 text-sm text-foreground outline-none focus:border-electric-400/60 focus:ring-2 focus:ring-electric-400/20"
                        name="budgetRange"
                      >
                        {chatbotBudgetRanges.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                      <select
                        aria-label="Timeline"
                        className="h-12 rounded-2xl border border-input bg-navy-900/90 px-4 text-sm text-foreground outline-none focus:border-electric-400/60 focus:ring-2 focus:ring-electric-400/20"
                        name="timeline"
                      >
                        {chatbotTimelines.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <Textarea
                      aria-label="Requirement Details"
                      name="requirementDetails"
                      placeholder="Requirement Details"
                      required
                    />
                    <Button type="submit" variant="gradient">
                      Submit Requirement
                    </Button>
                  </form>
                </details>
              ) : null}

              {requirementSaved ? (
                <p className="rounded-2xl border border-electric-400/25 bg-electric-500/10 p-4 text-sm text-electric-300" role="status">
                  Thank you! Our automation consultant will contact you shortly.
                </p>
              ) : null}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <Dialog open={leadOpen} onOpenChange={setLeadOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start a confidential project conversation</DialogTitle>
          </DialogHeader>
          <form className="grid gap-3" onSubmit={submitLead}>
            <Input aria-label="Lead name" name="name" placeholder="Name" required />
            <Input aria-label="Lead email" name="email" placeholder="Email" required type="email" />
            <Textarea aria-label="Lead requirement" name="requirement" placeholder="What would you like to build?" />
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                onClick={() => {
                  savePreference("nexora_lead_popup_dismissed", "true")
                  setLeadOpen(false)
                }}
                type="button"
                variant="ghost"
              >
                <X className="size-4" />
                Later
              </Button>
              <Button type="submit" variant="gradient">
                Save Lead
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

function PreferenceRow({
  checked,
  description,
  disabled,
  label,
  onChange,
}: {
  checked: boolean
  description: string
  disabled?: boolean
  label: string
  onChange?: (checked: boolean) => void
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/6 p-4">
      <span>
        <span className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
          {label}
          {disabled ? <ShieldCheck className="size-4 text-electric-300" /> : null}
        </span>
        <span className="mt-1 block text-sm leading-6 text-muted-foreground">{description}</span>
      </span>
      <input
        checked={checked}
        className="size-5 accent-electric-400"
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        type="checkbox"
      />
    </label>
  )
}
