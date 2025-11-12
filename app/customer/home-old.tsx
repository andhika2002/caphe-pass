import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, MapPin, Calendar, CreditCard, Gift, Wifi, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Transform your café experience in Vietnam
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Book your perfect seat, pre-order your favorite drinks, and discover the best cafés across Vietnam. Skip the
            wait, enjoy the moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base" asChild>
              <Link href="/booking">Book a Table Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <Link href="/discover">Explore Cafés</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need</h2>
          <p className="text-muted-foreground text-lg">A complete café booking experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <Calendar className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Reserve Your Seat</h3>
            <p className="text-muted-foreground leading-relaxed">
              Choose from solo spots, group tables, or co-working corners. Book in advance and guarantee your perfect
              space.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <CreditCard className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Pre-Order Menu</h3>
            <p className="text-muted-foreground leading-relaxed">
              Order your drinks and food ahead of time. Walk in and your order is ready, saving you precious time.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <MapPin className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Discover Cafés</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curated recommendations, honest reviews, and gamified check-ins. Find your next favorite spot.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <Gift className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Loyalty Rewards</h3>
            <p className="text-muted-foreground leading-relaxed">
              Earn points with every visit. Unlock exclusive perks, discounts, and special access to events.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <Wifi className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Instant Perks</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get Wi-Fi passwords instantly, access exclusive events, and enjoy member-only benefits at partner cafés.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
            <Zap className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Skip the Queue</h3>
            <p className="text-muted-foreground leading-relaxed">
              No more waiting in line during rush hours. Your table and order are ready when you arrive.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Partner Cafés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15min</div>
            <div className="text-muted-foreground">Avg. Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.8★</div>
            <div className="text-muted-foreground">User Rating</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to transform your café experience?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">Join thousands of café lovers across Vietnam</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/discover"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discover
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rewards"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Rewards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Owners</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/owner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/owner/analytics"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/owner/promotions"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Promotions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">© 2025 CaféHub. All rights reserved.</span>
            </div>
            <div className="text-sm text-muted-foreground">Made with love for Vietnamese café culture</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
