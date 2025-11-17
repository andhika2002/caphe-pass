"use client"
import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Calendar, MapPin, ShoppingBag } from 'lucide-react'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { CAFE_CONSTANTS, SEATTYPE_CONSTANTS, TIMESLOT_CONSTANTS } from "@/app/constants"

export default function BookingSuccessPage() {
  const searchParams = useSearchParams()
  const cafeNameFromQuery = searchParams.get("cafe")
  const selectedSeatType = searchParams.get("seat")
  const selectedTime = searchParams.get("time")
  const selectedDate = searchParams.get("date")
  const selectedPartySize = searchParams.get("person")
  const preOrderParam = searchParams.get("preOrder")
  const preOrderedItems = preOrderParam ? JSON.parse(decodeURIComponent(preOrderParam)) : []

  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your table has been reserved. We've sent a confirmation to your email.
          </p>
    
          <Card className="p-6 bg-card border-border text-left mb-8">
            <h3 className="font-semibold text-card-foreground mb-4">Booking Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-card-foreground">{CAFE_CONSTANTS.find(cafe => cafe.id === Number(cafeNameFromQuery))?.name}</div>
                  <div className="text-sm text-muted-foreground">{CAFE_CONSTANTS.find(cafe => cafe.id === Number(cafeNameFromQuery))?.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-card-foreground">{selectedDate}, {selectedTime}</div>
                  <div className="text-sm text-muted-foreground">{SEATTYPE_CONSTANTS.find(seat => seat.id === selectedSeatType)?.name} • {selectedPartySize} person(s)</div>
                </div>
              </div>
            </div>
          </Card>

          {preOrderedItems.length > 0 && (
            <Card className="p-6 bg-card border-border text-left mb-8">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-card-foreground">Pre-Ordered Items</h3>
              </div>
              <div className="space-y-2">
                {preOrderedItems.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                    <div>
                      <div className="font-medium text-card-foreground">{item.name}</div>
                      <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-medium text-card-foreground">₫{(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/40 mt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Total</span>
                  <span className="font-semibold text-accent">₫{preOrderedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span>
                </div>
              </div>
            </Card>
          )}

          {preOrderedItems.length === 0 && (
            <Card className="p-6 bg-card border-border text-left mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShoppingBag className="h-5 w-5" />
                <span>No items pre-ordered</span>
              </div>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" asChild>
              <Link href="/customer/discover">Discover More Cafés</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
