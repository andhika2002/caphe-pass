import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, Store, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="container max-w-6xl mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="h-12 w-12 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">CaféHub</h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Transform your café experience in Vietnam
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Customer Card */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Coffee className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-3">I'm a Customer</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Book tables, pre-order drinks, discover new cafés, and earn rewards with every visit.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left w-full">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Reserve your perfect seat in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Pre-order and skip the queue</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Earn loyalty points and rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Discover curated café recommendations</span>
                </li>
              </ul>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/customer">Continue as Customer</Link>
              </Button>
            </div>
          </Card>

          {/* Café Owner Card */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Store className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-3">I'm a Café Owner</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Manage occupancy, understand customers, and grow your business with smart analytics.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left w-full">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Smart occupancy management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Customer behavior insights & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Promotional campaigns for off-peak hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Real-time booking management</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/owner">Go to Owner Dashboard</Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Join thousands of café lovers and owners across Vietnam</p>
        </div>
      </div>
    </div>
  )
}
