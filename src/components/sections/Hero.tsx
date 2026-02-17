"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Sparkle, Moon, Star } from "lucide-react";

// Animation variants for numbers - floating up and down
const floatVariants: Variants = {
    float1: {
        y: [0, -25, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    float2: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
        }
    },
    float3: {
        y: [0, -22, 0],
        transition: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
        }
    },
    float4: {
        y: [0, -18, 0],
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
        }
    }
};

// Animation variants for twinkling stars
const twinkleVariants: Variants = {
    twinkle: {
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

// Container variant for staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

// Child item variant for text elements
const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }
    }
};

// Sparkle animation variant
const sparkleVariants: Variants = {
    animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

const Hero = () => {
    return (
        <Section className="pt-32 pb-10 md:pt-44 md:pb-20 overflow-hidden bg-background relative">
            {/* Background Subtle Stars with Twinkling Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <motion.div
                    variants={twinkleVariants}
                    animate="twinkle"
                    className="absolute top-1/4 left-10"
                >
                    <Star className="w-6 h-6 text-secondary" />
                </motion.div>
                <motion.div
                    variants={twinkleVariants}
                    animate="twinkle"
                    style={{ animationDelay: '1s' }}
                    className="absolute top-10 right-1/4"
                >
                    <Star className="w-4 h-4 text-secondary" />
                </motion.div>
                <motion.div
                    variants={twinkleVariants}
                    animate="twinkle"
                    style={{ animationDelay: '2s' }}
                    className="absolute bottom-1/3 left-1/3"
                >
                    <Star className="w-3 h-3 text-secondary" />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content with Staggered Animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 md:pr-10"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase pl-1 text-blue-400"
                    >
                        Consultation For Free
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] text-blue-800"
                    >
                        Infinite power of <br />
                        <span className="italic">numerology</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-blue-600 max-w-md leading-relaxed pl-1"
                    >
                        Unlock the hidden meaning of numbers and discover what destiny holds for you.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="pt-4 pl-1"
                    >
                        <Button size="lg" className="rounded-none px-12 py-6 text-sm font-bold tracking-wider !bg-blue-500 hover:bg-[#CC4600] shadow-none uppercase transition-all duration-300 hover:scale-105">
                            Read More
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-12 pt-12 pl-1 border-t border-gray-200 mt-12 max-w-md"
                    >
                        <div>
                            <p className="font-serif text-2xl font-bold text-blue-500">85k</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Happy Clients</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl font-bold text-blue-500">12</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl font-bold text-blue-500">5</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Awards Won</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right - Mystical Arch Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Main Arch Container */}
                    <div className="relative w-[350px] h-[550px] md:w-[420px] md:h-[650px] bg-[#EAE4D9] rounded-t-full rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white">

                        {/* Decorative Lines/Paths with Animation */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600">
                            <motion.path
                                d="M-50,200 Q150,100 250,50 T450,150"
                                fill="none"
                                stroke="#E07A5F"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0, opacity: 0.3 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    pathLength: { duration: 2, ease: "easeInOut" },
                                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                            <motion.path
                                d="M50,550 Q200,450 350,500"
                                fill="none"
                                stroke="#E07A5F"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0, opacity: 0.3 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    pathLength: { duration: 2, ease: "easeInOut", delay: 0.5 },
                                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
                                }}
                            />
                        </svg>

                        {/* Floating Numbers with Individual Animations */}
                        <motion.div
                            variants={floatVariants}
                            animate="float1"
                            className="absolute top-[12%] left-[18%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[180px] leading-none opacity-90 drop-shadow-lg">5</span>
                        </motion.div>

                        <motion.div
                            variants={floatVariants}
                            animate="float2"
                            className="absolute bottom-[20%] left-[8%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[180px] leading-none opacity-90 drop-shadow-lg">4</span>
                        </motion.div>

                        <motion.div
                            variants={floatVariants}
                            animate="float3"
                            className="absolute bottom-[30%] right-[8%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[160px] leading-none opacity-90 drop-shadow-lg">9</span>
                        </motion.div>

                        <motion.div
                            variants={floatVariants}
                            animate="float4"
                            className="absolute -bottom-[2%] right-[25%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[120px] leading-none opacity-90 drop-shadow-lg">7</span>
                        </motion.div>

                        {/* Enhanced Sparkle with Smooth Animation */}
                        <motion.div
                            variants={sparkleVariants}
                            animate="animate"
                            className="absolute top-[32%] left-[32%]"
                        >
                            <Sparkle className="w-10 h-10 text-[#C5A065]" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
