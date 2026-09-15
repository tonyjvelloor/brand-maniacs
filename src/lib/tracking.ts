import posthog from 'posthog-js';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export type EventLocation = 
  | 'hero_cta'
  | 'sticky_header_cta'
  | 'mechanism_cta'
  | 'offer_card_cta'
  | 'value_stack_cta'
  | 'simulator_cta'
  | 'qualification_cta'
  | 'faq_cta'
  | 'exit_intent';

/**
 * Dispatches Meta Pixel (fbq) and PostHog analytics events safely
 */
export function trackPageView(pageName: string = 'Ads Rescue Landing Page') {
  if (typeof window === 'undefined') return;

  // PostHog
  if (posthog.__loaded) {
    posthog.capture('ads_rescue_page_view', {
      page: pageName,
      timestamp: new Date().toISOString(),
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
    window.fbq('trackCustom', 'AdsRescue_ViewContent', {
      content_name: 'Ads Rescue Session Landing Page',
      content_category: 'Diagnostic Service',
      value: 2499,
      currency: 'INR',
    });
  }
}

export function trackCTAClick(location: EventLocation, label: string = 'Get Your Ads Diagnosed') {
  if (typeof window === 'undefined') return;

  // PostHog
  if (posthog.__loaded) {
    posthog.capture('ads_rescue_cta_click', {
      button_location: location,
      button_label: label,
      timestamp: new Date().toISOString(),
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'AdsRescue_CTAClick', {
      button_location: location,
      button_label: label,
      value: 2499,
      currency: 'INR',
    });
  }
}

export function trackInitiateCheckout(data?: {
  name?: string;
  email?: string;
  phone?: string;
  spend?: string;
}) {
  if (typeof window === 'undefined') return;

  // PostHog
  if (posthog.__loaded) {
    posthog.capture('ads_rescue_initiate_checkout', {
      value: 2499,
      currency: 'INR',
      ...data,
      timestamp: new Date().toISOString(),
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Ads Rescue Session',
      content_ids: ['ads_rescue_2499'],
      content_type: 'product',
      value: 2499,
      currency: 'INR',
    });
  }
}

export function trackPurchase(data: {
  orderId: string;
  paymentId?: string;
  email?: string;
  name?: string;
  amount?: number;
}) {
  if (typeof window === 'undefined') return;

  const amount = data.amount || 2499;

  // PostHog
  if (posthog.__loaded) {
    posthog.capture('ads_rescue_purchase_completed', {
      order_id: data.orderId,
      payment_id: data.paymentId,
      amount: amount,
      currency: 'INR',
      email: data.email,
      name: data.name,
      timestamp: new Date().toISOString(),
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Purchase', {
      content_name: 'Ads Rescue Session',
      content_ids: ['ads_rescue_2499'],
      content_type: 'product',
      value: amount,
      currency: 'INR',
      order_id: data.orderId,
    });
  }

  // Google Ads / GA4 (Gtag / DataLayer)
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // User will need to configure this in GTM/Gtag script
      value: amount,
      currency: 'INR',
      transaction_id: data.orderId,
    });
    
    // For Enhanced Conversions
    if (data.email) {
      (window as any).gtag('set', 'user_data', {
        email: data.email,
        address: {
          first_name: data.name?.split(' ')[0] || '',
          last_name: data.name?.split(' ').slice(1).join(' ') || ''
        }
      });
    }
  } else if (typeof (window as any).dataLayer !== 'undefined') {
    (window as any).dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: data.orderId,
        value: amount,
        currency: "INR",
        items: [{
          item_id: "ads_rescue_2499",
          item_name: "Ads Rescue Session",
          price: amount,
          quantity: 1
        }]
      },
      // Enhanced Conversions via dataLayer
      user_data: {
        email: data.email,
        address: {
          first_name: data.name?.split(' ')[0] || '',
          last_name: data.name?.split(' ').slice(1).join(' ') || ''
        }
      }
    });
  }
}
