import React from "react";

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    background?: "default" | "secondary" | "none";
}

const Section: React.FC<SectionProps> = ({
    id,
    children,
    className = "",
    background = "default",
}) => {
    const bgStyles = {
        default: "bg-background",
        secondary: "bg-background-secondary",
        none: "bg-transparent",
    };

    return (
        <section
            id={id}
            className={`relative py-20 md:py-32 ${bgStyles[background]} ${className}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
