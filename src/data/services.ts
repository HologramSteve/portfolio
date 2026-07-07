export interface Service {
  name: string
  description: string
  href: string
  tag?: string
}

export const services: Service[] = [
  {
    name: "OpenGoy.lol",
    description: "AI chat platform.",
    href: "https://opengoy.lol",
    tag: "Live",
  },
  {
    name: "Cloudbase",
    description: "Free hosting. Coming soon.",
    href: "#",
    tag: "Soon",
  },
  {
    name: "Vela",
    description: "AI character app. Coming soon. With AstroLink.cc.",
    href: "#",
    tag: "Soon",
  },
  {
    name: "AstroShare",
    description: "File hosting service.",
    href: "https://share.astrolink.cc",
    tag: "Co-Founder",
  },
  {
    name: "GK Detachering",
    description: "Built a website for the company.",
    href: "https://gk-detachering.nl",
    tag: "Client Work",
  },
]
