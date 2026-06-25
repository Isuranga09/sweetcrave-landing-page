"use client"

import { useState } from "react"
import { Menu, X, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Cookie className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            SweetCrave
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="rounded-full px-5"
            render={<a href="#menu" />}
          >
            Order Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/60 bg-background md:hidden"
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-2 pt-2 pb-1">
              <Button
                size="lg"
                className="w-full rounded-full"
                render={<a href="#menu" onClick={() => setOpen(false)} />}
              >
                Order Now
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
