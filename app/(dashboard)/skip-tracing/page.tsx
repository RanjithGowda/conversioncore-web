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
    <main className="bg-[#142A63] text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Automate Your Real-Estate Business with
                <span className="block text-[#00BFFF]"> AI-Powered Solutions</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Unlock exclusive API endpoints, enabling your team to access our data and seamlessly integrate it into your products and workflows.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="/pricing"
                  target=""
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full border-[#00BFFF] text-[#009dff] hover:bg-[#00BFFF] hover:text-white"
                  >
                    Get API Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="/skip-tracing/docs"
                  target=""
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full border-[#00BFFF] text-[#009dff] hover:bg-[#00BFFF] hover:text-white"
                  >
                    API Documentation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              {/* Image section placeholder */}
              <div className="w-full h-80 bg-[#0F1C36] rounded-lg flex items-center justify-center">
                <img src="/img/cc1.jpg" alt="ConversionCore.AI skip tracing service map" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00BFFF] text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  AI Calling Agents
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  Our AI agents handle calls, book appointments, and manage reservations, freeing up your team.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00BFFF] text-white">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  AI Digital Agency
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  Automate posting campaigns, ad creation, and content generation for all social media platforms.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00BFFF] text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  Custom Automations
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  We build and fix custom automations to streamline your unique workflows and enhance productivity.
                </p>
              </div>
            </div>
             <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00BFFF] text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  AI Sales Agents
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  Our AI sales agents follow up on leads and qualify prospects, ensuring no opportunity is missed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-300">
                Let ConversionCore.AI handle the repetitive tasks so you can focus on strategic growth and core business activities.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg rounded-full text-[#009dff]">
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