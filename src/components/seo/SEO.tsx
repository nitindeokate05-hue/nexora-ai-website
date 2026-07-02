import { useEffect } from "react"

type SEOProps = {
  title: string
  description: string
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title
    setMeta("description", description)
    setMeta("og:title", title, "property")
    setMeta("og:description", description, "property")
    setMeta("og:type", "website", "property")
    setMeta("twitter:card", "summary_large_image", "name")
  }, [description, title])

  return null
}

function setMeta(name: string, content: string, key: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${name}"]`)

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(key, name)
    document.head.append(element)
  }

  element.content = content
}
