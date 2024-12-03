import { ChevronDown } from 'lucide-react'
import Navbar from '../components/landing/navbar'
import Hero from '../components/landing/hero'
import Brands from '../components/landing/brands'
import Platform from '../components/landing/platform'
import Needs from '../components/landing/needs'

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Brands />
      <Platform />
      <Needs />


      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Everything You Need to Manage
          </h2>
          <p className="text-gray-600 text-center mb-12">
            and Control Global Spend
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Cards",
                price: "$19",
                features: [
                  "Basic card management",
                  "Standard support",
                  "Up to 5 users",
                ],
              },
              {
                name: "All-In-One Spend",
                price: "$39",
                features: [
                  "Advanced card management",
                  "Priority support",
                  "Up to 20 users",
                  "Custom workflows",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$69",
                features: [
                  "Enterprise card management",
                  "24/7 support",
                  "Unlimited users",
                  "Custom integration",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white p-8 rounded-lg border ${
                  plan.popular
                    ? "ring-2 ring-teal-600 scale-105"
                    : "hover:shadow-lg"
                } transition-all`}
              >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block text-center py-2 px-4 rounded ${
                    plan.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border border-teal-600 text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">FAQs</h2>
          <p className="text-gray-600 text-center mb-12">
            Everything you need to know about our service.
            <br />
            Can't find what you're looking for? Just ask.
          </p>
          <div className="space-y-4">
            {[
              "What is Paycelest Financial exactly?",
              "How will I save money by using Paycelest?",
              "What is Paycelest for?",
              "Does Paycelest integrate with accounting systems?",
              "How much does it cost?",
            ].map((question) => (
              <div
                key={question}
                className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{question}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Access Financial Technology With
          </h2>
          <p className="text-gray-400 mb-8">
            Maximum Security From Your Hands
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-teal-600 rounded-md hover:bg-teal-700"
          >
            Get Started Now →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/placeholder.svg?height=32&width=120"
                alt="Paycelest Logo"
                width={120}
                height={32}
                className="mb-4"
              />
              <p className="text-gray-600 text-sm">
                Empowering global payments with innovative solutions.
              </p>
            </div>
            {["Menu", "Resources", "Get in touch"].map((column) => (
              <div key={column}>
                <h3 className="font-semibold mb-4">{column}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
            <div className="flex gap-4 mb-4 md:mb-0">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="App Store"
                width={120}
                height={40}
              />
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Play Store"
                width={120}
                height={40}
              />
            </div>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

