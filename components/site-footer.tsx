import { Cookie, Mail, Phone, Camera, AtSign, MessageCircle } from "lucide-react"

const socials = [
  { label: "Instagram", icon: Camera, href: "#" },
  { label: "Facebook", icon: MessageCircle, href: "#" },
  { label: "X (Twitter)", icon: AtSign, href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Cookie className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
                SweetCrave
              </span>
            </div>
            <p className="max-w-xs leading-relaxed text-muted-foreground">
              Freshly baked brownies, cookies, and desserts crafted to bring
              happiness through every bite.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@sweetcrave.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-5 text-accent" aria-hidden="true" />
                  hello@sweetcrave.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94771234567"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-5 text-accent" aria-hidden="true" />
                  +94 77 123 4567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Follow us</h3>
            <ul className="mt-4 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <social.icon className="size-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Mon–Sat · 8am – 8pm
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SweetCrave. All rights reserved.</p>
          <p>Baked fresh with love.</p>
        </div>
      </div>
    </footer>
  )
}
