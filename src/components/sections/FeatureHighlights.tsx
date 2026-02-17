"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Star, Map, Hash } from "lucide-react";

const features = [
    {
        title: "Destiny Number",
        description: "Reveal the path you were chosen to walk in this lifetime based on your full name.",
        icon: <Star className="w-8 h-8 text-secondary" />,
        delay: 0,
    },
    {
        title: "Life Path",
        description: "Understand your core purpose, challenges, and opportunities derived from your birth date.",
        icon: <Map className="w-8 h-8 text-primary" />,
        delay: 0.1,
    },
    {
        title: "Core Numbers",
        description: "Get a comprehensive analysis of the 5 core numbers that define your unique soul blueprint.",
        icon: <Hash className="w-8 h-8 text-accent-gold" />,
        delay: 0.2,
    },
];

const FeatureHighlights = () => {
    return (
        <Section className="py-10 md:py-20 -mt-20 relative z-20">
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: feature.delay }}
                    >
                        <Card className="h-full flex flex-col items-center text-center p-8 border-t-4 border-t-primary/50 bg-white/80">
                            <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default FeatureHighlights;
