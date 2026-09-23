"use client";

import { useEffect, Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const auditType = searchParams.get('audit_type') || 'generic';

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "booking_complete",
        audit_type: auditType
      });
    }
  }, [auditType]);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-8" />
        <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
          Your Growth Breakdown is Confirmed
        </h1>
        <p className="text-xl font-bold opacity-80 mb-12">
          We've blocked off 15 minutes to go through your diagnostic results. You'll receive a calendar invitation shortly.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white border-2 border-black font-black uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors shadow-[6px_6px_0_0_#000]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export function BookingConfirmedClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
