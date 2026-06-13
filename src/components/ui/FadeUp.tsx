"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export function FadeUp({ children, delay = 0, className = "", yOffset = 30, onMouseEnter, onMouseLeave }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.div>
    );
}
