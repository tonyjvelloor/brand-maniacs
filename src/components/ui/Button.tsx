"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 tracking-wider rounded-none border-2 border-transparent uppercase font-heading";

    const variants = {
        primary: "bg-accent-red text-foreground border-foreground brutalist-shadow hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#F0F0F0] active:translate-y-0 active:translate-x-0 active:shadow-none",
        secondary: "bg-accent-yellow text-background border-background brutalist-shadow-red hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#FF2A00] active:translate-y-0 active:translate-x-0 active:shadow-none",
        outline: "bg-background text-foreground border-foreground hover:bg-foreground hover:text-background",
        ghost: "bg-transparent text-foreground hover:bg-accent-blue hover:text-foreground border-transparent hover:border-foreground brutalist-hover",
    };

    const sizes = {
        sm: "h-10 px-6 text-xs",
        md: "h-12 px-8 py-2 text-sm",
        lg: "h-16 px-12 py-3 text-base md:text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
