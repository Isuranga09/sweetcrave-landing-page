import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The fudgy brownies are out of this world — rich, gooey, and clearly made with love. SweetCrave is my go-to for every celebration.",
    name: "Amara Perera",
    role: "Loyal customer",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "I ordered cookies for my office and everyone raved about them. Freshly baked, perfectly chewy, and beautifully packaged.",
    name: "David Fernando",
    role: "Office manager",
    avatar: "/images/avatar-2.png",
  },
  {
    quote:
      "Their signature desserts made my daughter's birthday unforgettable. You can truly taste the quality of the ingredients.",
    name: "Nethmi Silva",
    role: "Happy mom",
    avatar: "/images/avatar-3.png",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">
            Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Loved by dessert lovers
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-7 text-accent" aria-hidden="true" />
              <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="flex-1 leading-relaxed text-foreground text-pretty">
                {`"${t.quote}"`}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <span className="relative size-12 overflow-hidden rounded-full border border-border">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
