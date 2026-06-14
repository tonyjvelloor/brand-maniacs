"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticWrapperProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export function MagneticWrapper({ children, className = "", intensity = 0.3 }: MagneticWrapperProps) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!magnetic.current) return;

        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            if (!magnetic.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            
            const x = (clientX - (left + width / 2)) * intensity;
            const y = (clientY - (top + height / 2)) * intensity;
            
            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const el = magnetic.current;
        el.addEventListener("mousemove", mouseMove);
        el.addEventListener("mouseleave", mouseLeave);

        return () => {
            el.removeEventListener("mousemove", mouseMove);
            el.removeEventListener("mouseleave", mouseLeave);
        };
    }, [intensity]);

    return (
        <div ref={magnetic} className={`inline-block ${className}`}>
            {children}
        </div>
    );
}
