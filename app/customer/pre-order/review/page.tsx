"use client"

import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Clock, MapPin, CreditCard, Truck, AlertCircle, ArrowLeft } from 'lucide-react'
import { useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'

export default function ReviewOrderPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const cafeId = searchParams.get("cafe")
  const bookingDate = searchParams.get("date")
  const bookingTime = searchParams.get("time")
  const cartParam = searchParams.get("cart")
  const returnUrl = searchParams.get("return")

  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const cartItems = cartParam ? JSON.parse(decodeURIComponent(cartParam)) : []

  const subtotal = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
  const serviceFee = 5000
  const promoDiscount = appliedPromo === "WELCOME10" ? Math.floor(subtotal * 0.1) : 0
  const total = subtotal + serviceFee - promoDiscount

  const applyPromo = () => {
    if (promoCode === "WELCOME10") {
      setAppliedPromo("WELCOME10")
      setPromoCode("")
    }
  }

  const handleConfirmOrder = () => {
    if (returnUrl) {
      const preOrderData = cartItems.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }))
      const separator = returnUrl.includes("?") ? "&" : "?"
      router.push(
        `${returnUrl}${separator}preOrder=${encodeURIComponent(JSON.stringify(preOrderData))}`
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      {/* Back button */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Review Your Order</h1>
          <p className="text-muted-foreground mb-8">Complete your pre-order and skip the line</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-accent" />
                  Order Items ({cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0)})
                </h3>
                <div className="space-y-4">
                  {cartItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border/40 last:border-0"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="bg-background rounded-lg px-3 py-1 text-sm font-semibold text-accent">
                          {item.quantity}x
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">{item.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.quantity === 1 ? "1 item" : `${item.quantity} items`}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-card-foreground">
                          {((item.price * item.quantity) / 1000).toFixed(0)}k
                        </div>
                        <div className="text-xs text-muted-foreground">{(item.price / 1000).toFixed(0)}k each</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                  onClick={() => router.back()}
                >
                  Edit Order
                </Button>
              </Card>

              {/* Special Instructions */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-card-foreground mb-3">Special Instructions</h3>
                <textarea
                  placeholder="Add any special requests (e.g., extra sugar, less ice)..."
                  className="w-full bg-background border border-border rounded-lg p-3 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={3}
                />
              </Card>

              {/* Promo Code */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent" />
                  Have a Promo Code?
                </h3>
                {appliedPromo ? (
                  <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-green-600 font-medium">Promo code "{appliedPromo}" applied!</div>
                    <button
                      onClick={() => setAppliedPromo(null)}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code (e.g., WELCOME10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button variant="outline" onClick={applyPromo}>
                      Apply
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border sticky top-20">
                <h3 className="font-semibold text-card-foreground mb-4 text-lg">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-card-foreground">{(subtotal / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="text-card-foreground">{(serviceFee / 1000).toFixed(0)}k</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-500">Discount ({appliedPromo})</span>
                      <span className="text-green-500 font-medium">-{(promoDiscount / 1000).toFixed(0)}k</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <span className="font-semibold text-card-foreground">Total</span>
                    <span className="text-xl font-bold text-accent">{(total / 1000).toFixed(0)}k VND</span>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4 text-xs text-muted-foreground flex items-start gap-2">
                  <Truck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Order will be ready in ~10 minutes</span>
                </div>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-3"
                  onClick={handleConfirmOrder}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Confirm & Add to Booking
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  You'll be returned to complete your booking.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
