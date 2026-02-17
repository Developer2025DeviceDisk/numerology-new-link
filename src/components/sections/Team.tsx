"use client";

import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { User } from "lucide-react";

const team = [
    {
        name: "Elena Myst",
        role: "Master Numerologist",
        bio: "20+ years of experience in Chaldean and Pythagorean numerology.",
    },
    {
        name: "Dr. Arin Sol",
        role: "Astrologer & Numerologist",
        bio: "Specializes in astro-numerology and karmic debt numbers.",
    },
    {
        name: "Sarah Void",
        role: "Spiritual Guide",
        bio: "Intuitive reader helping you align with your soul's purpose.",
    },
];

const Team = () => {
    return (
        <Section id="team" className="bg-[#1A1A2E] py-20 md:py-32 border-t border-white/5">
            <div className="text-center mb-16 space-y-4">
                <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                    Our Team
                </div>
                <h2 className="text-4xl md:text-5xl font-medium font-serif text-white">
                    Meet our leading <br />
                    <span className="italic">numerologists</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto text-sm">
                    Nunc sed sagittis sem, ut iaculis lorem. Nulla ipsum leo, maximus vel feugiat id, mattis a ipsum.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-40 h-40 mx-auto mb-8">
                            <div className="absolute inset-0 rounded-full border border-[#C5A065]/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#C5A065] bg-gray-800">
                                {/* Placeholder for image */}
                                <div className="w-full h-full flex items-center justify-center bg-[#252540]">
                                    <User className="w-16 h-16 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white font-serif mb-1">{member.name}</h3>
                        <p className="text-[#C5A065] text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Team;
