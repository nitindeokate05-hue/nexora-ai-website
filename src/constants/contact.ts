const whatsappMessage = "Hello Nexora AI Team, I'm interested in your services."

export const CONTACT = {
  email: "info@nexoraiglobal.com",
  emailHref: "mailto:info@nexoraiglobal.com",
  phoneDisplay: "+91 9657416324",
  phoneHref: "tel:+919657416324",
  whatsappHref: `https://wa.me/919657416324?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappPlainHref: "https://wa.me/919657416324",
} as const
