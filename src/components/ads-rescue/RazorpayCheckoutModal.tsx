"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { trackInitiateCheckout, trackPurchase } from "@/lib/tracking";
import { useRouter } from "next/navigation";

interface RazorpayCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export function RazorpayCheckoutModal({ isOpen, onClose }: RazorpayCheckoutModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    adSpend: "₹25,000 - ₹50,000/mo",
    platforms: "Both Google & Meta",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTestMode, setIsTestMode] = useState(false);

  // Load Razorpay script on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Track checkout initiated when modal opens
  useEffect(() => {
    if (isOpen) {
      trackInitiateCheckout({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        spend: formData.adSpend,
      });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Create order on backend (amount: 2499)
      const res = await fetch("/api/ads-rescue/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadInfo: formData,
          amount: 2499,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to initialize payment.");
      }

      // Check if real Razorpay key is configured
      if (data.isLiveMode && window.Razorpay) {
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: data.currency || "INR",
          name: "The Brand Maniacs",
          description: "Ads Rescue Session — Complete Diagnostic",
          image: "/icon.png",
          order_id: data.orderId,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: "#FFE600",
          },
          handler: async function (response: any) {
            // Verify payment
            const verifyRes = await fetch("/api/ads-rescue/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: data.orderId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                leadInfo: formData,
                amount: 2499,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              trackPurchase({
                orderId: data.orderId,
                paymentId: response.razorpay_payment_id,
                email: formData.email,
                name: formData.name,
                amount: 2499,
              });
              router.push(`/ads-rescue/success?order_id=${data.orderId}&lead_id=${verifyData.leadId || ""}`);
            } else {
              setError("Payment verification failed. Please contact support.");
            }
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Test / Sandbox Mode Fallback
        setIsTestMode(true);
        const verifyRes = await fetch("/api/ads-rescue/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: data.orderId,
            paymentId: "pay_sandbox_" + Date.now(),
            signature: "mock_signature",
            leadInfo: formData,
            amount: 2499,
            isSandbox: true,
          }),
        });
        const verifyData = await verifyRes.json();

        trackPurchase({
          orderId: data.orderId,
          paymentId: "pay_sandbox_" + Date.now(),
          email: formData.email,
          name: formData.name,
          amount: 2499,
        });

        setTimeout(() => {
          router.push(`/ads-rescue/success?order_id=${data.orderId}&lead_id=${verifyData.leadId || ""}`);
        }, 1200);
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      setError(err.message || "An unexpected error occurred during checkout.");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#141414] text-foreground border-2 sm:border-4 border-accent-yellow p-4 sm:p-8 shadow-[6px_6px_0_0_#FFE600] sm:shadow-[12px_12px_0_0_#FFE600] z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-[#222] border border-foreground/20 hover:bg-accent-red hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-1 border-b border-foreground/15 pb-4 mb-5 sm:mb-6 pr-8 sm:pr-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow animate-ping" />
                <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest text-accent-yellow">
                  Secure Checkout // Ads Rescue Session
                </span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-3xl uppercase tracking-tight text-white">
                Get Your Ads Checked
              </h3>
              <p className="font-mono text-xs text-foreground/70">
                Standard Price: <del className="text-foreground/40 mr-1">₹7,500</del> · Launch Offer: <strong className="text-accent-yellow">₹2,499</strong>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCheckout} className="space-y-4 text-xs font-mono">
              {error && (
                <div className="bg-red-500/10 border-2 border-red-500 p-3 text-red-400 flex items-start gap-2 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Company / Brand *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Health"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@acme.com"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-1">
                <label className="block text-foreground/80 font-bold uppercase">
                  Website / Landing Page URL
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://acme.com"
                  className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent-yellow focus:outline-none"
                />
              </div>

              {/* Spend & Platforms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Monthly Ad Spend *
                  </label>
                  <select
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  >
                    <option value="₹25,000 - ₹50,000/mo">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000/mo">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹5,00,000/mo">₹1,00,000 - ₹5,00,000 / month</option>
                    <option value="₹5,00,000+/mo">₹5,00,000+ / month</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Ad Platforms *
                  </label>
                  <select
                    name="platforms"
                    value={formData.platforms}
                    onChange={handleChange}
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  >
                    <option value="Both Google & Meta">Both Google & Meta</option>
                    <option value="Meta Ads Only (FB/IG)">Meta Ads Only (FB/IG)</option>
                    <option value="Google Ads Only (Search/PMax)">Google Ads Only (Search/PMax)</option>
                  </select>
                </div>
              </div>

              {/* Order Summary Line */}
              <div className="bg-[#1A1A1A] p-3.5 border border-foreground/15 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-foreground font-bold block">
                    Ads Rescue Diagnostic (60-Min 1-on-1 + Action Plan)
                  </span>
                  <span className="text-foreground/50 text-[10px]">
                    Includes Pre-Audit + 7 Deliverables Stack
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-foreground/40 text-[10px] line-through">₹7,500</div>
                  <span className="text-accent-yellow font-black text-base">₹2,499</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-base sm:text-lg py-4 px-6 tracking-wider border-2 border-black flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0_0_#F0F0F0] active:translate-y-0.5 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹2,499 & Unlock Diagnostic →</span>
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 pt-2 text-[10px] text-foreground/50 font-mono">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-green-400" />
                  Razorpay Encrypted
                </span>
                <span>·</span>
                <span>UPI / NetBanking / Cards</span>
                <span>·</span>
                <span>100% Confidential</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
