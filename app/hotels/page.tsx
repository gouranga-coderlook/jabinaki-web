"use client";

import { SearchForm } from "@/components/search-forms";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function HotelsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Stay</h1>
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <SearchForm category="hotels" />
      </div>

      {/* Featured Hotels */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Grand Plaza Hotel",
              location: "New York",
              rating: 5,
              price: "$299",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            {
              name: "Sunset Beach Resort",
              location: "Maldives",
              rating: 5,
              price: "$499",
              image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            {
              name: "Mountain View Lodge",
              location: "Switzerland",
              rating: 4,
              price: "$199",
              image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            },
          ].map((hotel, index) => (
            <Card key={index} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel.image})` }}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground">{hotel.location}</p>
                <div className="flex items-center mt-2">
                  {Array(hotel.rating).fill(null).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">{hotel.price}</span>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}