import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Phone, Rocket } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Automate Your Business with <span className="block text-orange-500"> AI-Powered Solutions</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                ConversionCore.AI provides cutting-edge AI agents to handle calls, digital marketing, sales follow-ups, and custom automation.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="/contact" target="_blank">
                  <Button size="lg" variant="outline" className="text-lg rounded-full">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="w-full h-80 rounded-lg flex items-center justify-center">
                <img src="/img/cc4.jpg" alt="ConversionCore.AI skip tracing service map" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900"> AI Calling Agents </h2>
                <p className="mt-2 text-base text-gray-500"> Our AI agents handle calls, book appointments, and manage reservations, freeing up your team. </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900"> AI Digital Agency </h2>
                <p className="mt-2 text-base text-gray-500"> Automate posting campaigns, ad creation, and content generation for all social media platforms. </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900"> Custom Automations </h2>
                <p className="mt-2 text-base text-gray-500"> We build and fix custom automations to streamline your unique workflows and enhance productivity. </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900"> AI Sales Agents </h2>
                <p className="mt-2 text-base text-gray-500"> Our AI sales agents follow up on leads and qualify prospects, ensuring no opportunity is missed. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl"> Ready to transform your business? </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500"> Let ConversionCore.AI handle the repetitive tasks so you can focus on strategic growth and core business activities. </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg rounded-full">
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
                      <a href="mailto:support@conversioncore.ai" className="font-semibold text-orange-500 hover:underline">
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