"use client"

import { OwnerNavbar } from "@/components/owner-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Edit2, Trash2, Coffee } from "lucide-react"
import { useState } from "react"

interface MenuItem {
  id: string
  name: string
  category: "coffee" | "tea" | "food" | "dessert"
  price: number
  description: string
  available: boolean
}

const initialMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Vietnamese Iced Coffee",
    category: "coffee",
    price: 35000,
    description: "Traditional Vietnamese coffee with condensed milk",
    available: true,
  },
  {
    id: "2",
    name: "Cappuccino",
    category: "coffee",
    price: 45000,
    description: "Classic Italian cappuccino with rich foam",
    available: true,
  },
  {
    id: "3",
    name: "Matcha Latte",
    category: "tea",
    price: 50000,
    description: "Creamy matcha green tea latte",
    available: true,
  },
  {
    id: "4",
    name: "Banh Mi Sandwich",
    category: "food",
    price: 40000,
    description: "Vietnamese sandwich with pâté, meats, and vegetables",
    available: true,
  },
  {
    id: "5",
    name: "Croissant",
    category: "dessert",
    price: 25000,
    description: "Buttery French croissant",
    available: false,
  },
]

const categories = ["coffee", "tea", "food", "dessert"]

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newItem, setNewItem] = useState({ name: "", price: "", description: "" })

  const filteredItems = selectedCategory ? menuItems.filter((item) => item.category === selectedCategory) : menuItems

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      const item: MenuItem = {
        id: Math.random().toString(),
        name: newItem.name,
        price: Number.parseInt(newItem.price),
        description: newItem.description,
        category: (selectedCategory as any) || "coffee",
        available: true,
      }
      setMenuItems([...menuItems, item])
      setNewItem({ name: "", price: "", description: "" })
    }
  }

  const handleToggleAvailability = (id: string) => {
    setMenuItems(menuItems.map((item) => (item.id === id ? { ...item, available: !item.available } : item)))
  }

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <OwnerNavbar />

      {/* Header */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">Menu Management</h1>
              <p className="text-muted-foreground">Create and edit your café menu items</p>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="#add-item">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card className="p-4 bg-card border-border sticky top-24">
              <h3 className="font-semibold text-card-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === null ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Items ({menuItems.length})
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "ghost"}
                    className="w-full justify-start capitalize"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat} ({menuItems.filter((item) => item.category === cat).length})
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Add New Item Section */}
            <Card id="add-item" className="p-6 bg-accent/5 border-accent/20">
              <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Menu Item
              </h2>
              <div className="space-y-4">
                <Input
                  placeholder="Item name (e.g., Vietnamese Iced Coffee)"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="bg-background border-border"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Price (VND)"
                    type="number"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="bg-background border-border"
                  />
                  <select
                    value={selectedCategory || "coffee"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="capitalize">
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                  rows={3}
                />
                <Button onClick={handleAddItem} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Add Item
                </Button>
              </div>
            </Card>

            {/* Menu Items List */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-card-foreground">
                {selectedCategory
                  ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}s`
                  : "All Items"}{" "}
                ({filteredItems.length})
              </h2>
              {filteredItems.length === 0 ? (
                <Card className="p-8 text-center bg-card border-border">
                  <Coffee className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <p className="text-muted-foreground">No items in this category</p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="p-4 bg-card border-border hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                            <Badge variant={item.available ? "default" : "secondary"}>
                              {item.available ? "Available" : "Out of Stock"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <div className="text-lg font-bold text-accent">{item.price.toLocaleString()} VND</div>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-border">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => handleToggleAvailability(item.id)}
                        >
                          {item.available ? "Mark Unavailable" : "Mark Available"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent"
                          onClick={() => setEditingId(item.id)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
