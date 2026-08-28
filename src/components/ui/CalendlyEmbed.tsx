"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
    url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget w-full max-w-full min-w-0 h-[650px] sm:h-[700px] bg-slate-900 rounded-none sm:rounded-xl overflow-hidden border border-slate-800 shadow-2xl"
            data-url={url}
        ></div>
    );
}
