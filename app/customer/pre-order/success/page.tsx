import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, QrCode } from "lucide-react"
import Link from "next/link"

export default function PreOrderSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your order is being prepared. Show this confirmation when you arrive.
          </p>

          <Card className="p-8 bg-card border-border mb-8">
            <div className="bg-white p-6 rounded-lg mb-6 inline-block">
              <QrCode className="h-32 w-32 text-foreground" />
            </div>
            <div className="text-sm text-muted-foreground mb-4">Order #12345</div>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-card-foreground">Ready at 2:10 PM</div>
                  <div className="text-sm text-muted-foreground">Approximately 10 minutes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-card-foreground">The Coffee House</div>
                  <div className="text-sm text-muted-foreground">123 Nguyen Hue, District 1, Ho Chi Minh City</div>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              We'll send you a notification when your order is ready for pickup.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/discover">Discover More Cafés</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/rewards">View Your Rewards</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
