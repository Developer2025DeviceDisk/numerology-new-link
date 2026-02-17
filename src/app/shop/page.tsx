import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ShoppingBag, Star } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Crystal Energy Set",
        price: "$49.00",
        category: "Crystals",
        rating: 5,
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Numerology Guidebook",
        price: "$29.00",
        category: "Books",
        rating: 4,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Personalized Birth Chart",
        price: "$99.00",
        category: "Readings",
        rating: 5,
        image: "https://images.unsplash.com/photo-1620242203875-c5e3f4388e63?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Tarot Deck - Mahakal Edition",
        price: "$35.00",
        category: "Tools",
        rating: 5,
        image: "https://images.unsplash.com/photo-1630141733605-2b47fc9265f2?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Zodiac Pendant Gold",
        price: "$120.00",
        category: "Jewelry",
        rating: 4,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2787&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Sage Smudge Kit",
        price: "$22.00",
        category: "Cleansing",
        rating: 5,
        image: "https://images.unsplash.com/photo-1603517208182-3e284a1e7845?q=80&w=2671&auto=format&fit=crop"
    }
];

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Hero Section */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-[#C5A065]/30 rounded-full -translate-x-1/2 -translate-y-1/2 bg-white/40 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase mb-4">
                        Online Store
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6">
                        Spiritual tools for <br />
                        <span className="italic text-[#E65100]">conscious living</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Hand-picked crystals, guides, and artifacts to support your journey of self-discovery.
                    </p>
                </div>
            </Section>

            {/* Product Grid */}
            <Section className="py-20 bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative h-80 overflow-hidden bg-gray-100 mb-6 border border-gray-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                                {/* Quick Action Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button className="w-full bg-white text-gray-900 hover:bg-[#1A1A2E] hover:text-white shadow-lg border-none" icon={<ShoppingBag className="w-4 h-4" />}>
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                                    {product.category}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-1 text-[#C5A065]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < product.rating ? "fill-current" : "text-gray-300"}`} />
                                    ))}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#E65100] transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-16">
                    <Button variant="outline" className="rounded-none px-12 py-4 border-gray-300 text-gray-900 hover:bg-[#1A1A2E] hover:text-white hover:border-[#1A1A2E] uppercase tracking-wider font-bold">
                        Load More Products
                    </Button>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
