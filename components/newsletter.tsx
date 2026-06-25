"use client"

import { useState } from "react"
import { CheckCircle2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Get a sweet treat in your inbox
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-primary-foreground/80 text-pretty">
            Sign up for fresh-batch alerts, seasonal specials, and a little
            discount on your first order.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-4 text-primary-foreground"
            >
              <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
              <p className="font-medium">Thanks for joining — check your inbox!</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left sm:flex-row"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="h-12 w-full rounded-full border border-transparent bg-background pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </form>
          )}

          {error && (
            <p
              id="newsletter-error"
              role="alert"
              className="mx-auto mt-3 max-w-md text-sm text-accent"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
