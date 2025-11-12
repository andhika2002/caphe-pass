import { OwnerNavbar } from "@/components/owner-navbar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Calendar, DollarSign, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <OwnerNavbar />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/owner">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <h1 className="text-3xl font-bold text-foreground mb-8">Analytics & Insights</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card border-border">
            <Calendar className="h-8 w-8 text-accent mb-3" />
            <div className="text-3xl font-bold text-card-foreground mb-1">1,247</div>
            <div className="text-sm text-muted-foreground">Total Bookings (30d)</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +18% vs last month
            </Badge>
          </Card>

          <Card className="p-6 bg-card border-border">
            <Users className="h-8 w-8 text-accent mb-3" />
            <div className="text-3xl font-bold text-card-foreground mb-1">892</div>
            <div className="text-sm text-muted-foreground">Unique Customers</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +12% vs last month
            </Badge>
          </Card>

          <Card className="p-6 bg-card border-border">
            <DollarSign className="h-8 w-8 text-accent mb-3" />
            <div className="text-3xl font-bold text-card-foreground mb-1">127M</div>
            <div className="text-sm text-muted-foreground">Revenue (30d)</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +24% vs last month
            </Badge>
          </Card>

          <Card className="p-6 bg-card border-border">
            <TrendingUp className="h-8 w-8 text-accent mb-3" />
            <div className="text-3xl font-bold text-card-foreground mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">Avg. Rating</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +0.2 vs last month
            </Badge>
          </Card>
        </div>

        <Card className="p-8 bg-card border-border text-center">
          <TrendingUp className="h-16 w-16 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-card-foreground mb-2">Detailed Analytics Coming Soon</h2>
          <p className="text-muted-foreground">
            Advanced charts, customer behavior analysis, and revenue forecasting will be available here.
          </p>
        </Card>
      </div>
    </div>
  )
}
