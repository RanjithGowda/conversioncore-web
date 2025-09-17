import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Globe, Key, Settings, Phone, Mail, User } from 'lucide-react';

export default function APIDocumentation() {
  return (
    <main className="bg-[#0F1C36] text-white font-sans">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Property Skip Trace
            </h1>
            <div className="mt-6 flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
              <span className="bg-[#00BFFF] text-black font-semibold px-3 py-1 rounded-full">
                POST
              </span>
              <span className="text-gray-300">
                https://api.conversioncore.ai/api/v1/property/skip-trace
              </span>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Returns contact information (emails & phone numbers) for one or more properties.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Each request can handle up to 100 properties. It is recommended to use the asynchronous endpoint for large requests to avoid timeouts. Each matched result is billable.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-700 my-8"></div>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="h-7 w-7 mr-3 text-[#00BFFF]" /> Request
              </h2>

              <div className="mb-8 p-6 bg-[#1A2C4A] rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-gray-400" /> Headers
                </h3>
                <div className="bg-[#0F1C36] p-4 rounded-md">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-300">Authorization:</span>{' '}
                    <span className="text-gray-400">string</span> <span className="text-[#FF8C00]">(required)</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Enter "Bearer" followed by the API Token. Example: `Bearer [40 digit API token]`
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#1A2C4A] rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-gray-400" /> Body
                </h3>
                <div className="bg-[#0F1C36] p-4 rounded-md">
                  <p className="text-sm text-gray-400">
                    The API endpoint retrieves contact info for a property owner by accepting either an address or an Assessor's Parcel Number (APN).
                  </p>
                </div>
                
                <ul className="mt-4 text-gray-400 text-sm space-y-2">
                  <li className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-[#FF8C00]" />
                    <span className="font-semibold text-white">by Address:</span> street, city, state, zip (or combinations)
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#FF8C00]" />
                    <span className="font-semibold text-white">by APN:</span> apn, county, state (or combinations)
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="h-7 w-7 mr-3 text-[#00BFFF]" /> Response
              </h2>

              <div className="mb-8 p-6 bg-[#1A2C4A] rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="text-green-400 font-bold mr-2">200</span> OK
                </h3>
                <p className="text-sm text-gray-400">
                  This is the normal response, indicating the request was successfully sent and processed.
                </p>
              </div>

              <div className="p-6 bg-[#1A2C4A] rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-gray-400" /> Body
                </h3>
                <div className="bg-[#0F1C36] p-4 rounded-md">
                  <p className="text-sm">
                    <span className="font-semibold text-white">status:</span> <span className="text-gray-400">object</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1 pl-4">
                    `text` (string), `message` (string), `code` (number)
                  </p>
                  <p className="text-sm mt-3">
                    <span className="font-semibold text-white">results:</span> <span className="text-gray-400">object</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1 pl-4">
                    `persons` (array[object] with contact info), `meta` (object with metadata)
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center lg:justify-end">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                >
                  View Full Documentation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-700 my-8"></div>
      
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <User className="h-7 w-7 mr-3 text-[#FF8C00]" /> Owner Information
          </h2>
          <div className="p-6 bg-[#1A2C4A] rounded-lg">
            <p className="text-lg text-gray-300">
              The primary output of the skip trace service is the contact information for the property owner. The `owner` object within the response body contains the crucial data you need to connect with prospects.
            </p>
            <div className="bg-[#0F1C36] p-4 rounded-md mt-4">
              <div className="text-white text-base">
                <span className="font-semibold">owner:</span> object
                <ul className="ml-6 mt-2 space-y-1 text-gray-300">
                  <li className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-[#00BFFF]" />
                    <span className="font-semibold text-white">fullName:</span> string - The full name of the property owner.
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-[#00BFFF]" />
                    <span className="font-semibold text-white">emails:</span> array[string] - An array of email addresses.
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#00BFFF]" />
                    <span className="font-semibold text-white">phoneNumbers:</span> array[object] - An array of phone numbers.
                  </li>
                   <span className=" text-gray-400">A maximum of five phone numbers may be returned for a person. If the individual is identified as a known TCPA litigator, none of their phone numbers will be included in the Skiptrace response. Otherwise, phone numbers may be returned even if they are listed on a Do Not Call (DNC) registry.</span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}