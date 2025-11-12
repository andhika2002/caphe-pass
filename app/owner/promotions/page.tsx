"use client"

import { OwnerNavbar } from "@/components/owner-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Percent, Plus, ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

const activePromotions = [
  {
    id: 1,
    name: "Happy Hour Special",
    discount: "20% off",
    timeSlot: "2-4 PM",
    daysLeft: 5,
    redemptions: 47,
    status: "active",
  },
  {
    id: 2,
    name: "Early Bird Discount",
    discount: "15% off",
    timeSlot: "8-10 AM",
    daysLeft: 12,
    redemptions: 23,
    status: "active",
  },
]

export default function PromotionsPage() {
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

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Promotions</h1>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Create Promotion
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {activePromotions.map((promo) => (
            <Card key={promo.id} className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{promo.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{promo.timeSlot}</span>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground">{promo.discount}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-card-foreground">{promo.redemptions}</div>
                  <div className="text-xs text-muted-foreground">Redemptions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">{promo.daysLeft}</div>
                  <div className="text-xs text-muted-foreground">Days Left</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Pause
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <Percent className="h-16 w-16 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Drive Traffic During Off-Peak Hours</h2>
          <p className="text-muted-foreground mb-6">
            Create targeted promotions to fill empty seats and increase revenue during slow periods.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Promotion
          </Button>
        </Card>
      </div>
    </div>
  )
}
