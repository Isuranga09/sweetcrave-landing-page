import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Fudgy Brownies",
    image: "/images/brownies.png",
    alt: "A stack of rich fudgy chocolate brownies with a glossy crackly top",
    description:
      "Deep, gooey chocolate brownies with a crackly top and molten center.",
    price: "$4.50",
  },
  {
    name: "Classic Cookies",
    image: "/images/cookies.png",
    alt: "Freshly baked golden chocolate chip cookies with melted chocolate chunks",
    description:
      "Golden, chewy cookies loaded with melted premium chocolate chunks.",
    price: "$3.00",
  },
  {
    name: "Signature Desserts",
    image: "/images/desserts.png",
    alt: "An elegant plated layered dessert with a slice of chocolate cake and berry tart",
    description:
      "Elegant layered cakes and tarts, crafted fresh for special moments.",
    price: "$6.00",
  },
]

export function Products() {
  return (
    <section id="menu" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">
            Our Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Baked with love, served with joy
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every treat is made from scratch in small batches using premium,
            wholesome ingredients.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent-foreground">
                    {product.price}
                  </span>
                </div>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  className="-ml-2.5 mt-1 self-start rounded-full text-primary hover:bg-accent/15"
                  render={<a href="#menu" />}
                >
                  Add to order
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
