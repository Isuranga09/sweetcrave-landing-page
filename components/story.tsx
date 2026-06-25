import Image from "next/image"
import { Heart, Wheat, Sparkles } from "lucide-react"

const values = [
  {
    icon: Wheat,
    title: "Premium ingredients",
    text: "Only the finest chocolate, butter, and flour make it into our kitchen.",
  },
  {
    icon: Heart,
    title: "Traditional recipes",
    text: "Time-honored techniques passed down and perfected over the years.",
  },
  {
    icon: Sparkles,
    title: "Baked fresh daily",
    text: "Small batches, made each morning so every bite tastes its best.",
  },
]

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative order-last md:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/bakers.png"
              alt="Two bakers preparing desserts in a warm artisanal bakery kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">
            Our Story
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            A passion for unforgettable desserts
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            SweetCrave began with a passion for creating unforgettable desserts
            using traditional recipes and premium ingredients. Our mission is to
            bring happiness through every bite.
          </p>

          <ul className="mt-2 flex flex-col gap-5">
            {values.map((value) => (
              <li key={value.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
