import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Story } from "@/components/story"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <Story />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
