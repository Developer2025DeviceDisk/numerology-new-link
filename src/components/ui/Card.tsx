"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hoverEffect = true,
}) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={`relative overflow-hidden rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur-md transition-all duration-300 ${hoverEffect ? "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" : ""
                } ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default Card;
