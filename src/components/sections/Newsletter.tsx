"use client";

import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";

const Newsletter = () => {
    return (
        <Section className="py-20">
            <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/50 p-8 md:p-16 text-center overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full bg-white/40 backdrop-blur-sm -z-10" />

                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900">
                    Get Your Daily Number Prediction
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Join our cosmic community and receive personalized insights delivered straight to your inbox every morning.
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400"
                    />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
        </Section>
    );
};

export default Newsletter;
