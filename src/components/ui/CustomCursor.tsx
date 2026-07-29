"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const isHoveringRef = useRef(false);

    useGSAP(() => {
        if (!cursorRef.current) return;

        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);

            const target = e.target as HTMLElement;
            const isClickable = !!target.closest('a, button, input, textarea, select, [role="button"], .bento-card');
            
            if (isClickable !== isHoveringRef.current) {
                isHoveringRef.current = isClickable;
                
                if (isClickable) {
                    gsap.to(cursorRef.current, {
                        width: 64,
                        height: 64,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "1px solid white",
                        borderRadius: "10px",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(cursorRef.current, {
                        width: 16,
                        height: 16,
                        backgroundColor: "white",
                        border: "0px solid transparent",
                        borderRadius: "50%",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div 
            ref={cursorRef}
            className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center w-4 h-4 bg-white rounded-full"
        />
    );
}
