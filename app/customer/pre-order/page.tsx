"use client"

import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, ShoppingCart, Clock, Check, ArrowLeft } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from 'next/navigation'

interface MenuItem {
  id: number
  name: string
  category: string
  price: number
  description: string
  image: string
  popular?: boolean
  customizable?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Vietnamese Iced Coffee",
    category: "Coffee",
    price: 45000,
    description: "Traditional cà phê sữa đá with condensed milk",
    image: "/vietnamese-iced-coffee.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Coffee",
    price: 55000,
    description: "Classic espresso with steamed milk foam",
    image: "/cappuccino.jpg",
    customizable: true,
  },
  {
    id: 3,
    name: "Matcha Latte",
    category: "Tea",
    price: 60000,
    description: "Premium Japanese matcha with milk",
    image: "/matcha-latte.jpg",
    popular: true,
  },
  {
    id: 4,
    name: "Bánh Mì",
    category: "Food",
    price: 35000,
    description: "Vietnamese baguette with pork and vegetables",
    image: "/banh-mi.jpg",
  },
  {
    id: 5,
    name: "Croissant",
    category: "Food",
    price: 40000,
    description: "Buttery French pastry",
    image: "/croissant.jpg",
  },
  {
    id: 6,
    name: "Coconut Coffee",
    category: "Coffee",
    price: 50000,
    description: "Smooth coffee with coconut milk",
    image: "/coconut-coffee.jpg",
    popular: true,
  },
]

const categories = ["All", "Coffee", "Tea", "Food"]

export default function PreOrderPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const cafeId = searchParams.get("cafe")
  const returnPath = searchParams.get("return")
  const bookingDate = searchParams.get("date")
  const bookingTime = searchParams.get("time")

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<Record<number, number>>({})

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const cartItems = Object.entries(cart).map(([id, quantity]) => ({
    item: menuItems.find((item) => item.id === Number(id))!,
    quantity,
  }))

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  const totalPrice = cartItems.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0)

  const handleReviewOrder = () => {
    // Navigate to review page with cart data
    const cartData = cartItems.map((item) => ({
      name: item.item.name,
      quantity: item.quantity,
      price: item.item.price,
    }))
    router.push(
      `/customer/pre-order/review?cafe=${cafeId}&date=${bookingDate}&time=${bookingTime}&cart=${encodeURIComponent(JSON.stringify(cartData))}&return=${returnPath}`
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <CustomerNavbar />

      {/* Header with Back Button */}
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
          <div className="flex items-start justify-between mt-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">Pre-Order Menu</h1>
              <p className="text-muted-foreground">Order ahead and skip the wait</p>
            </div>
            <Badge variant="outline" className="text-green-500 border-green-500">
              <Clock className="h-3 w-3 mr-1" />
              Ready in 10 min
            </Badge>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border/40 sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all">
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Popular</Badge>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-card-foreground">{item.name}</h3>
                  <span className="text-accent font-semibold">{(item.price / 1000).toFixed(0)}k</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                {item.customizable && (
                  <Badge variant="secondary" className="mb-3 text-xs">
                    Customizable
                  </Badge>
                )}

                {cart[item.id] ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" onClick={() => removeFromCart(item.id)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-semibold text-foreground w-8 text-center">{cart[item.id]}</span>
                      <Button variant="outline" size="sm" onClick={() => addToCart(item.id)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                ) : (
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => addToCart(item.id)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Order
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Floating Cart */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-accent" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
                    {totalItems}
                  </Badge>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </div>
                  <div className="text-sm text-muted-foreground">{(totalPrice / 1000).toFixed(0)}k VND</div>
                </div>
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleReviewOrder}>
                Review Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
