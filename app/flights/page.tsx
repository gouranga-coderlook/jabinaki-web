"use client";

import { SearchForm } from "@/components/search-forms";

export default function FlightsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Flight</h1>
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <SearchForm category="flights" />
      </div>
      
      {/* Popular Destinations */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Popular Flight Routes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { from: "New York", to: "London", price: "$450" },
            { from: "Tokyo", to: "Seoul", price: "$320" },
            { from: "Dubai", to: "Paris", price: "$580" },
            { from: "Singapore", to: "Sydney", price: "$420" },
            { from: "Los Angeles", to: "Tokyo", price: "$650" },
            { from: "Mumbai", to: "Dubai", price: "$280" },
          ].map((route, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="font-semibold">{route.from}</p>
                </div>
                <div className="text-center">
                  <span className="text-xs text-muted-foreground">to</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">To</p>
                  <p className="font-semibold">{route.to}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{route.price}</span>
                <span className="text-sm text-muted-foreground">per person</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}