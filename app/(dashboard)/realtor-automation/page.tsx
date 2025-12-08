"use client";

// CountUp hook for animated numbers with easing
function useCountUp({ end, duration = 1, decimals = 0 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Cubic ease-out: starts fast, slows down towards end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = easedProgress * end;
      
      if (progress >= 1) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Number(currentValue.toFixed(decimals)));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, decimals]);
  return value;
}

// MetricCard component for animated metrics
function MetricCard({ end, suffix = '', label, decimals = 0 }) {
  const value = useCountUp({ end, duration: 1.2, decimals });
  return (
    <div className="bg-[#1e2746]/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
      <span className="text-4xl font-bold text-[#00BFFF]">
        {value.toLocaleString(undefined, { maximumFractionDigits: decimals })}{suffix}
      </span>
      <span className="mt-2 text-lg text-gray-200 text-center">{label}</span>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Rocket, Zap, Brain } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

export default function RealtorAutomationPage() {
  return (
    <main className="bg-gradient-to-br from-[#142A63] via-[#1e2746] to-[#00BFFF] min-h-screen text-white">
      <section className="pt-8 pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center items-center">
          <div className="w-full flex justify-center mb-4">
            <div className="relative max-w-6xl w-full">
              <Image
                src="/img/ConversionCoreARE.png"
                alt="Realtor Automation & Lead Revival System"
                width={1152}
                height={512}
                className="rounded-2xl w-full h-auto object-contain shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <MetricCard end={12500} suffix="+" label="Expired Listings Processed Monthly" />
            <MetricCard end={78} suffix="%" label="Owner Contact Rate" decimals={0} />
            <MetricCard end={320} suffix="+" label="Appointments Booked Last Month" />
            <MetricCard end={2100} suffix="+" label="Active Realtors Using System" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Realtor Automation & Lead Revival System
              <span className="block text-[#00BFFF] mt-2">$500/month Retainer</span>
            </h1>
            <p className="mb-8 text-lg text-gray-200">
              Discover and revive hidden listing opportunities with automated MLS monitoring, skip-tracing, and multi-channel follow-up campaigns. Your realtor client gets a done-for-you, fully automated system that runs daily so they never miss an opportunity.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg rounded-full border-[#00BFFF] text-[#009dff] hover:bg-[#00BFFF] hover:text-white shadow-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-center text-lg text-gray-700">
                    You can reach out to us at:
                    <br />
                    <a href="mailto:support@conversioncore.ai" className="font-semibold text-[#008cbb] hover:underline">
                      support@conversioncore.ai
                    </a>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#1e2746]/80 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-[#00BFFF]" />
              <h2 className="text-2xl font-semibold">MLS Monitoring & Extraction</h2>
            </div>
            <p className="text-gray-200">Integrate with major MLS boards, extract expired/withdrawn listings, and deliver daily structured lists.</p>
          </div>
          <div className="bg-[#1e2746]/80 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Rocket className="h-8 w-8 text-[#00BFFF]" />
              <h2 className="text-2xl font-semibold">Automated Skip Tracing</h2>
            </div>
            <p className="text-gray-200">Instantly enrich leads with verified owner contact info, synced to your CRM or automation system.</p>
          </div>
          <div className="bg-[#1e2746]/80 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-[#00BFFF]" />
              <h2 className="text-2xl font-semibold">Multi-Channel Follow-Up</h2>
            </div>
            <p className="text-gray-200">SMS, iMessage, Email, Voicemail, AI Calling, and more. Pre-built 30-day sequences and instant lead escalation.</p>
          </div>
          <div className="bg-[#1e2746]/80 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Brain className="h-8 w-8 text-[#00BFFF]" />
              <h2 className="text-2xl font-semibold">Dashboard & Reporting</h2>
            </div>
            <p className="text-gray-200">Weekly reports, activity logs, and a simple dashboard for realtors.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 bg-[#1e2746]/80 rounded-2xl shadow-lg p-10 flex flex-col gap-10 items-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing & Setup</h2>
            <p className="mb-4 text-lg text-gray-200">$500/month retainer. One-time setup cost starting from $3,000. Includes MLS scraping, unlimited listings, skip-trace jobs, automation, reporting, and maintenance.</p>
            <ul className="list-disc ml-6 text-gray-200 mb-4">
              <li>MLS scraping for 3 boards</li>
              <li>Unlimited expired listings processed</li>
              <li>Unlimited skip-trace jobs (or up to 500/mo with paid API)</li>
              <li>Fully-managed automation</li>
              <li>Monthly reporting</li>
              <li>System maintenance</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 text-white">Optional Add-ons</h3>
            <ul className="list-disc ml-6 text-gray-200 mt-2">
              <li>Additional MLS: +$100 each</li>
              <li>Paid skip-tracing pass-through costs</li>
              <li>Custom AI calling scripts</li>
              <li>Dedicated inbound lead qualification</li>
            </ul>
            <div className="mt-8 flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg rounded-full text-[#009dff] shadow-lg">
                    Contact Us
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="text-center text-lg text-gray-700">
                      You can reach out to us at:
                      <br />
                      <a href="mailto:support@conversioncore.ai" className="font-semibold text-[#008cbb] hover:underline">
                        support@conversioncore.ai
                      </a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
