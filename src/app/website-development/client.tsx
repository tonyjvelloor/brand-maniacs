"use client";

import { ArrowRight, Check, X, Search, Smartphone, PenTool, Code, LineChart, Zap } from "lucide-react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/config";
import { useState } from "react";

export function WebsiteDevLandingClient({ locationName }: { locationName?: string }) {
  const [formState, setFormState] = useState({
    url: "",
    business: "",
    goal: ""
  });

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black font-sans">
      <main>
        {/* 1. HERO - ATTACK THE PROBLEM */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-8 bg-accent-yellow text-black shadow-[2px_2px_0_0_#000]">
                {locationName ? `Website Design & Development in ${locationName}` : "Website Design & Development"}
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Conversion-Ready Websites Built for <span className="text-accent-red underline decoration-8 underline-offset-8">SEO, AEO & Paid Growth.</span>
              </h1>
              
              <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-10 max-w-2xl mx-auto">
                We build high-converting websites designed to turn visitors into enquiries, customers, and revenue. Whether you're launching a new business or tired of your current site generating zero leads.
              </p>

              <div className="flex flex-col items-center gap-6">
                <a 
                  href="#assessment"
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-accent-red hover:text-white transition-colors w-full sm:w-auto shadow-[4px_4px_0_0_#000] group"
                >
                  Get My Website Built <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex flex-col items-center gap-2 opacity-70">
                  <p className="text-xs font-black uppercase tracking-widest flex flex-wrap justify-center gap-3">
                    <span>Strategy</span>
                    <span className="text-accent-yellow">✦</span>
                    <span>UX</span>
                    <span className="text-accent-yellow">✦</span>
                    <span>Design</span>
                    <span className="text-accent-yellow">✦</span>
                    <span>Development</span>
                    <span className="text-accent-yellow">✦</span>
                    <span>SEO</span>
                  </p>
                  <p className="text-sm font-bold">One team. No freelancer juggling 5 projects at once.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUALIFICATION */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8 leading-tight">
                  Is your website <br/>
                  <span className="text-accent-red">costing you</span> <br/>
                  customers?
                </h2>
                <p className="text-lg font-bold opacity-80 mb-8">
                  Your website might be:
                </p>
                <ul className="space-y-4 font-bold opacity-90">
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Outdated and hurting your brand credibility</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Beautiful but generating no enquiries</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Slow and frustrating on mobile</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Impossible to update without a developer</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Invisible on Google</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Built without understanding your customer journey</span></li>
                  <li className="flex gap-4 items-start"><X className="w-6 h-6 text-accent-red shrink-0" /> <span>Getting traffic but failing to convert</span></li>
                </ul>
              </div>
              <div className="bg-foreground text-background p-10 border-4 border-accent-red shadow-[8px_8px_0_0_#D93036] transform md:rotate-2">
                <h3 className="font-heading font-black text-3xl uppercase tracking-tighter mb-4">Sound familiar?</h3>
                <p className="font-bold opacity-80 mb-8 text-lg">
                  If you ticked any of those boxes, you don't just need a web designer. You need a growth partner. We should talk.
                </p>
                <a 
                  href="#assessment"
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-background font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors w-full"
                >
                  I Need a Better Website <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. POSITIONING DIFFERENTLY */}
        <section className="py-24 border-b-2 border-foreground bg-accent-blue text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              We Don't Just Build Websites.<br/>
              We Build <span className="text-accent-yellow">Digital Sales Assets.</span>
            </h2>
            
            <p className="text-xl font-bold opacity-90 max-w-2xl mx-auto mb-16">
              Most agencies approach websites like this: <br/>
              <span className="opacity-70 text-base mt-2 block font-mono">Brief → Design → Development → Launch</span>
            </p>

            <div className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000] text-left max-w-3xl mx-auto">
              <p className="font-heading font-black text-2xl uppercase mb-8 text-center border-b-2 border-black pb-4">Our Engineering Approach</p>
              
              <div className="flex flex-col gap-2 font-mono font-bold text-sm md:text-base">
                <div className="bg-[#F5F5F5] p-3 border border-black flex items-center gap-4">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">01</span>
                  Business Goal
                </div>
                <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50" /></div>
                
                <div className="bg-[#F5F5F5] p-3 border border-black flex items-center gap-4">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">02</span>
                  Customer Psychology
                </div>
                <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50" /></div>

                <div className="bg-[#F5F5F5] p-3 border border-black flex items-center gap-4">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">03</span>
                  Positioning & Messaging
                </div>
                <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50" /></div>

                <div className="bg-accent-yellow p-3 border border-black flex items-center gap-4 transform scale-105 shadow-[2px_2px_0_0_#000] z-10">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">04</span>
                  UX & Conversion Strategy
                </div>
                <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50" /></div>

                <div className="bg-[#F5F5F5] p-3 border border-black flex items-center gap-4">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">05</span>
                  Design & Development
                </div>
                <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50" /></div>

                <div className="bg-[#F5F5F5] p-3 border border-black flex items-center gap-4">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">06</span>
                  Launch & Optimization
                </div>
              </div>
            </div>

            <p className="mt-16 text-xl md:text-2xl font-bold max-w-3xl mx-auto">
              Because a website that looks impressive but doesn't generate business is just an expensive brochure.
            </p>
          </div>
        </section>

        {/* 4. WHAT THEY GET */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                Everything Your Website Needs to Win
              </h2>
              <p className="font-bold opacity-70 text-lg">We don't build partial solutions.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border-2 border-foreground">
                <thead>
                  <tr className="bg-foreground text-background font-heading uppercase tracking-widest text-sm">
                    <th className="p-4 border-2 border-foreground">What we handle</th>
                    <th className="p-4 border-2 border-foreground">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm md:text-base">
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><Zap className="w-5 h-5 text-accent-yellow" /> Strategy</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Your website has a clear business objective.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><PenTool className="w-5 h-5 text-accent-red" /> Copy & Messaging</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Visitors understand why they should choose you.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><Smartphone className="w-5 h-5 text-accent-blue" /> UI/UX Design</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Your brand looks credible and premium across all devices.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><Code className="w-5 h-5 text-foreground" /> Development</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Fast, responsive, secure, and highly scalable.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><Search className="w-5 h-5 text-green-600" /> SEO Foundation</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Built strictly to be discoverable by Google and AI engines.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground flex items-center gap-3"><LineChart className="w-5 h-5 text-purple-600" /> Analytics & CRO</td>
                    <td className="p-4 border-2 border-foreground opacity-80">Designed to generate enquiries and track exactly what's working.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center bg-accent-yellow border-2 border-black p-6 font-bold text-black shadow-[4px_4px_0_0_#000]">
              <p>One team. One accountable partner. No managing designers, developers, copywriters and SEO freelancers separately.</p>
            </div>
          </div>
        </section>

        {/* 5. DAY 1 INFRASTRUCTURE */}
        <section className="py-24 border-b-2 border-foreground bg-black text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-accent-yellow font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 text-accent-yellow">
                DAY 1 INFRASTRUCTURE
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
                Every Website Launches With <br className="hidden md:block"/>
                Our <span className="text-accent-red">Growth Stack</span> Installed.
              </h2>
            </div>

            <div className="bg-[#111] border-4 border-foreground shadow-[8px_8px_0_0_#FFE600] p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-4 border-b-2 border-white/20 pb-2">SEO</h3>
                  <ul className="space-y-3 font-mono text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-yellow" /> Schema Markup</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-yellow" /> Metadata</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-yellow" /> Clean URLs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-4 border-b-2 border-white/20 pb-2">AEO</h3>
                  <ul className="space-y-3 font-mono text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-blue" /> Structure</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-blue" /> Entities</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-blue" /> AI-ready Content</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-4 border-b-2 border-white/20 pb-2">ANALYTICS</h3>
                  <ul className="space-y-3 font-mono text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-400" /> GA4</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-400" /> GTM</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-400" /> Search Console</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t-2 border-white/10">
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-4 border-b-2 border-white/20 pb-2">PERFORMANCE</h3>
                  <ul className="space-y-3 font-mono text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Core Web Vitals</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Fast Loading</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Mobile-first Architecture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-4 border-b-2 border-white/20 pb-2">ADS</h3>
                  <ul className="space-y-3 font-mono text-sm">
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-red" /> Standard Events</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-red" /> Conversion Tracking</li>
                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent-red" /> Meta & Google Ready</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 PORTFOLIO PROOF */}
        <section className="py-24 border-b-2 border-foreground bg-accent-blue text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                Don't Take Our Word For It.
              </h2>
              <p className="font-bold text-xl opacity-90 max-w-2xl mx-auto">
                Built by our team, not assembled from a template. We engineer high-performance platforms, products, and conversion-ready websites.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white text-black border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-accent-red mb-1 block">Project</span>
                    <h3 className="font-heading font-black text-3xl uppercase tracking-tighter">CouponHub</h3>
                  </div>
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 uppercase">Next.js</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Objective</h4>
                    <p className="font-bold text-sm">Build a high-performance programmatic SEO platform and consumer marketplace.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Infrastructure</h4>
                    <p className="font-bold text-sm">Next.js App Router, AEO-ready content clusters, advanced schema markup, edge caching.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t-2 border-black pt-6">
                  <div>
                    <div className="text-3xl font-black text-accent-red">100/100</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-1">SEO Health</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-accent-blue">&lt; 1.2s</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-1">LCP Speed</div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-black text-white border-4 border-accent-yellow p-8 shadow-[8px_8px_0_0_#FFE600]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-accent-yellow mb-1 block">Project</span>
                    <h3 className="font-heading font-black text-3xl uppercase tracking-tighter">TBM Reviews</h3>
                  </div>
                  <span className="bg-accent-yellow text-black text-xs font-bold px-3 py-1 uppercase">React</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Objective</h4>
                    <p className="font-bold text-sm text-gray-300">Engineer a streamlined digital product to automate review capture and boost trust conversions.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Infrastructure</h4>
                    <p className="font-bold text-sm text-gray-300">Scalable multi-tenant architecture, automated funnels, embeddable trust widgets.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t-2 border-white/20 pt-6">
                  <div>
                    <div className="text-3xl font-black text-accent-yellow">+45%</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-1 text-gray-300">Trust Conversion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-accent-yellow">+300%</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-1 text-gray-300">Capture Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. AGENCY VS FREELANCER */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Freelancer. Agency. Or Brand Maniacs?
            </h2>
            <p className="font-bold opacity-70 text-lg mb-12 max-w-2xl mx-auto">
              The person you hire dictates the result you get.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse border-2 border-foreground bg-white">
                <thead>
                  <tr className="bg-foreground text-background font-heading uppercase tracking-widest text-xs sm:text-sm">
                    <th className="p-4 border-2 border-foreground">Capability</th>
                    <th className="p-4 border-2 border-foreground text-center opacity-50">Freelancer</th>
                    <th className="p-4 border-2 border-foreground text-center opacity-50">Typical Agency</th>
                    <th className="p-4 border-2 border-foreground text-center bg-accent-red">Brand Maniacs</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  <tr>
                    <td className="p-4 border-2 border-foreground">Design</td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Development</td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Business Strategy</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-red"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-gray-400">Sometimes</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-blue font-black uppercase tracking-widest">Core</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Conversion Thinking</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-red"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-gray-400">Depends</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-blue font-black uppercase tracking-widest">Core</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Marketing Expertise</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-red"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 border-2 border-foreground text-center text-gray-400">Depends</td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600"><Check className="w-5 h-5 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">SEO Foundation</td>
                    <td className="p-4 border-2 border-foreground text-center text-gray-400">Depends</td>
                    <td className="p-4 border-2 border-foreground text-center text-gray-400">Depends</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-blue font-black uppercase tracking-widest">Built-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto opacity-90 border-l-4 border-accent-red pl-6 text-left">
              If you only need someone to code a website, we're probably not the cheapest option. 
              <br/><br/>
              <span className="text-accent-red">If you want a website that becomes part of your marketing engine, let's talk.</span>
            </p>
          </div>
        </section>

        {/* 8. PROCESS */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 text-center">
              From "We Need a Website" to "It's Live"
            </h2>
            <p className="font-bold opacity-70 text-lg mb-16 text-center">We remove the uncertainty and project-manage everything.</p>

            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery", desc: "We understand your business, audience, competition and objectives." },
                { step: "02", title: "Strategy", desc: "We define the positioning, messaging and conversion journey." },
                { step: "03", title: "Design", desc: "You see the complete visual direction before any code is written." },
                { step: "04", title: "Development", desc: "We turn the approved design into a fast, responsive Next.js/React website." },
                { step: "05", title: "Testing", desc: "Mobile, desktop, forms, speed, tracking and functionality." },
                { step: "06", title: "Launch", desc: "Your website goes live on high-performance hosting." },
                { step: "07", title: "Growth", desc: "Optional SEO, content, CRO and marketing support." },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start p-6 border-2 border-foreground bg-[#F5F5F5] text-black hover:bg-accent-yellow transition-colors group">
                  <span className="font-heading font-black text-3xl opacity-30 group-hover:opacity-100">{s.step}</span>
                  <div>
                    <h4 className="font-heading font-black text-xl uppercase mb-2">{s.title}</h4>
                    <p className="font-bold opacity-80">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. WEBSITE ASSESSMENT CTA */}
        <section id="assessment" className="py-24 border-b-2 border-foreground bg-accent-red text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-background text-foreground border-4 border-black p-8 md:p-12 shadow-[12px_12px_0_0_#000]">
              <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
                Not sure what your website needs?
              </h2>
              <p className="font-bold opacity-80 mb-8">
                Send us your details. We'll review your current setup and tell you what's holding it back, or map out the architecture for your new launch. No obligation.
              </p>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                window.open(CALENDLY_URL, '_blank');
              }}>
                <div>
                  <label className="block font-black uppercase text-xs tracking-widest mb-2">Current Website URL (if any)</label>
                  <input type="text" placeholder="www.yourwebsite.com" className="w-full border-2 border-foreground p-4 font-bold outline-none focus:border-accent-blue" />
                </div>
                <div>
                  <label className="block font-black uppercase text-xs tracking-widest mb-2">Business Type / Industry</label>
                  <input type="text" placeholder="e.g. D2C Fashion, B2B SaaS, Clinic" className="w-full border-2 border-foreground p-4 font-bold outline-none focus:border-accent-blue" />
                </div>
                <div>
                  <label className="block font-black uppercase text-xs tracking-widest mb-4">What are you trying to achieve?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["More enquiries", "More sales", "Better branding", "Launch a new business", "Replace an outdated website", "Other"].map((goal, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border-2 border-foreground/20 cursor-pointer hover:bg-foreground/5">
                        <input type="radio" name="goal" className="w-4 h-4 accent-accent-red" />
                        <span className="font-bold text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full bg-accent-yellow text-black border-2 border-black font-black uppercase tracking-widest py-5 hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#000]">
                  Get My Website Assessment →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 6. SERVICE AREAS (PROGRAMMATIC SEO INTERNAL LINKING) */}
        <section className="py-12 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="font-black text-sm uppercase tracking-widest text-background/50 mb-6 border-b-2 border-background/20 pb-4">
                Local Expertise: Best Website Development Agency in Pune
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { name: "Pune", slug: "pune" },
                  { name: "Pimple Saudagar", slug: "pimple-saudagar" },
                  { name: "Kalewadi", slug: "kalewadi" },
                  { name: "Pimpri", slug: "pimpri" },
                  { name: "Moshi", slug: "moshi" },
                  { name: "Chikhali", slug: "chikhali" },
                  { name: "Wakad", slug: "wakad" },
                  { name: "Hinjewadi", slug: "hinjewadi" },
                  { name: "Baner", slug: "baner" },
                  { name: "Balewadi", slug: "balewadi" },
                  { name: "Koregaon Park", slug: "koregaon-park" },
                  { name: "Kalyani Nagar", slug: "kalyani-nagar" },
                  { name: "Viman Nagar", slug: "viman-nagar" },
                  { name: "Magarpatta", slug: "magarpatta" },
                  { name: "Kharadi", slug: "kharadi" },
                  { name: "Aundh", slug: "aundh" }
                ].map((area) => (
                  <Link 
                    key={area.slug} 
                    href={`/website-development-agency-in-${area.slug}`}
                    className="text-sm font-bold text-background/70 hover:text-accent-yellow transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
