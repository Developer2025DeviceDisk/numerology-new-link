import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { User, Rocket, Heart, Shield } from "lucide-react";

const teamMembers = [
    { name: "Sarah Jenkins", role: "Master Numerologist", bio: "20+ years decoding life paths." },
    { name: "David Chen", role: "Astrologer", bio: "Expert in planetary alignments." },
    { name: "Emily Rose", role: "Spiritual Guide", bio: "Helping you find your inner voice." },
    { name: "Michael Lee", role: "Tarot Reader", bio: "Unveiling the future one card at a time." },
    { name: "Jessica White", role: "Energy Healer", bio: "Restoring balance to your aura." },
    { name: "Robert Green", role: "Feng Shui Master", bio: "Harmonizing your living space." },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Hero Section */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A065]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E65100]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase mb-4">
                        Our Experts
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6">
                        Meet the guides of your <br />
                        <span className="italic text-[#E65100]">spiritual journey</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Our team of certified numerologists, astrologers, and spiritual guides are dedicated to helping you unlock your potential.
                    </p>
                </div>
            </Section>

            {/* Team Grid */}
            <Section className="py-20 md:py-32 bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full border-4 border-[#F4F1EA] shadow-xl">
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <User className="w-24 h-24 text-gray-300" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-[#E65100] text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Join Us / Values Section */}
            <Section className="py-20 bg-[#1A1A2E] text-white overflow-hidden relative border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">
                    <div className="space-y-8">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                            Join Our Mission
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                            Passion for helping <br />
                            <span className="italic">others grow</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We are always looking for talented individuals who share our vision of a more enlightened world.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <Rocket className="text-[#E65100]" />
                                <span className="font-bold text-sm">Growth Mindset</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Heart className="text-[#E65100]" />
                                <span className="font-bold text-sm">Empathy First</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="text-[#E65100]" />
                                <span className="font-bold text-sm">Integrity</span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button variant="outline" className="rounded-none px-10 py-4 border-white text-white hover:bg-white hover:text-[#1A1A2E] uppercase tracking-wider font-bold">
                                View Openings
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="relative h-[400px] bg-gray-800 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-4 border-[#C5A065]/20">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
