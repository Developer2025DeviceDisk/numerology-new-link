"use client";

import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const products = [
    {
        name: "Crystal Energy Set",
        price: "$49.00",
        image: "/placeholder-crystal.jpg", // Ideally would be a real image
    },
    {
        name: "Numerology Guidebook",
        price: "$29.00",
        image: "/placeholder-book.jpg",
    },
    {
        name: "Personalized Chart",
        price: "$99.00",
        image: "/placeholder-chart.jpg",
    },
];

const Shop = () => {
    return (
        <Section id="shop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">Mystical Shop</h2>
                    <p className="text-text-gray">Tools for your spiritual journey.</p>
                </div>
                <Button variant="outline">View All Products</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <Card key={index} className="group p-0 overflow-hidden border-0">
                        {/* Image placeholder since we don't have real assets yet */}
                        <div className="relative h-64 bg-gray-800 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <span className="text-gray-500 z-0">Product Image</span>
                            {/* Hover Zoom Effect would go here on the image tag */}
                        </div>

                        <div className="p-6 relative z-20 -mt-20">
                            <div className="backdrop-blur-md bg-white/80 border border-white/50 p-4 rounded-xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                                <p className="text-primary font-bold font-mono mb-4">{product.price}</p>
                                <Button size="sm" className="w-full" icon={<ShoppingBag className="w-4 h-4" />}>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Shop;
