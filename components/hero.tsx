import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
            Freshly baked, every single day
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Indulge in handcrafted brownies &amp; cookies
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            At SweetCrave we bake small-batch desserts with premium ingredients
            and traditional recipes — bringing a little happiness to every bite.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-6" render={<a href="#menu" />}>
              Explore the Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6"
              render={<a href="#story" />}
            >
              Our Story
            </Button>
          </div>
          <dl className="mt-2 flex gap-8">
            <div>
              <dt className="sr-only">Desserts baked</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">12k+</dd>
              <p className="text-sm text-muted-foreground">Happy orders</p>
            </div>
            <div>
              <dt className="sr-only">Average rating</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">4.9/5</dd>
              <p className="text-sm text-muted-foreground">Customer rating</p>
            </div>
            <div>
              <dt className="sr-only">Years baking</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">8 yrs</dd>
              <p className="text-sm text-muted-foreground">Of sweetness</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/hero-desserts.png"
              alt="An assortment of freshly baked brownies, cookies, and plated desserts"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-serif text-lg font-semibold text-foreground">100% Fresh</p>
            <p className="text-sm text-muted-foreground">Baked daily, never frozen</p>
          </div>
        </div>
      </div>
    </section>
  )
}
