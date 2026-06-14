"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useGSAP(() => {
        if (!cursorRef.current) return;

        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);

            const target = e.target as HTMLElement;
            const isClickable = !!target.closest('a, button, input, textarea, select, [role="button"], .bento-card');
            
            if (isClickable !== isHovering) {
                setIsHovering(isClickable);
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [isHovering]);

    return (
        <div 
            ref={cursorRef}
            className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300 ease-out flex items-center justify-center
                ${isHovering ? "w-16 h-16 bg-white/20 backdrop-blur-sm border border-white" : "w-4 h-4 bg-white rounded-full"}
            `}
            style={{ borderRadius: isHovering ? '10px' : '50%' }}
        />
    );
}
