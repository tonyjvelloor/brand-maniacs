"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

export function WhatsAppCTA() {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors group border-2 border-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-foreground text-background text-xs font-black py-2 px-3 border-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
                Chat on WhatsApp
            </span>
        </motion.a>
    );
}
