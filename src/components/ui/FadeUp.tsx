"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FadeUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export function FadeUp({ children, delay = 0, className = "", yOffset = 30, onMouseEnter, onMouseLeave }: FadeUpProps) {
    const el = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!el.current) return;
        
        gsap.fromTo(el.current, 
            { opacity: 0, y: yOffset },
            {
                opacity: 1, 
                y: 0,
                duration: 0.6,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el.current,
                    start: "top bottom-=100",
                    once: true,
                }
            }
        );
    }, { scope: el, dependencies: [delay, yOffset] });

    return (
        <div
            ref={el}
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ opacity: 0 }} // Prevent FOUC before GSAP initializes
        >
            {children}
        </div>
    );
}
