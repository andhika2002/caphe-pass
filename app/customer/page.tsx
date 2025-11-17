import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Coffee, Gift, TrendingUp, Users, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function CustomerHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Perfect Café Experience Awaits
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
              Book your seat, pre-order your favorite drinks, and discover amazing cafés across Vietnam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/customer/discover">
                  <MapPin className="mr-2 h-5 w-5" />
                  Discover Cafés
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <Link href="/customer/discover" className="block">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Discover Cafés</h3>
              <p className="text-sm text-muted-foreground">Find your next favorite spot from 500+ partner cafés</p>
            </Link>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="block">
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Book a Seat</h3>
              <p className="text-sm text-muted-foreground">Reserve solo, group, or co-working spaces instantly</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="block">
              <Coffee className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Pre-Order</h3>
              <p className="text-sm text-muted-foreground">Order ahead and skip the queue at your café</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <Link href="/customer/rewards" className="block">
              <Gift className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">Get points, unlock perks, and level up your status</p>
            </Link>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose CaféHub?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for the perfect café experience, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Save Time</h3>
            <p className="text-muted-foreground">Book ahead and pre-order to skip queues during rush hours</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Curated Selection</h3>
            <p className="text-muted-foreground">Discover the best cafés with verified reviews and ratings</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Exclusive Perks</h3>
            <p className="text-muted-foreground">Earn loyalty points and unlock special rewards at partner cafés</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Group Friendly</h3>
            <p className="text-muted-foreground">Book tables for groups or find the perfect co-working corner</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Location-Based</h3>
            <p className="text-muted-foreground">Find nearby cafés with real-time availability and directions</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Gamified Experience</h3>
            <p className="text-muted-foreground">Check-in, complete challenges, and climb the leaderboard</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-card border-border p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <Coffee className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join thousands of café lovers discovering and booking the best spots across Vietnam
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/customer/discover">Explore Cafés Now</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
