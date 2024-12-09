import React, { useState } from "react";

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  const plans = [
    {
      name: "Basic HR Management",
      price: "$29",
      features: [
        "Employee database management",
        "Basic reporting tools",
        "Email support",
        "Up to 50 employees",
      ],
    },
    {
      name: "Advanced HR Suite",
      price: "$59",
      features: [
        "Advanced employee tracking",
        "Payroll management",
        "Performance reviews",
        "Priority support",
        "Up to 500 employees",
      ],
    },
    {
      name: "Enterprise HR Solutions",
      price: "$99",
      features: [
        "Custom employee workflows",
        "HR analytics dashboard",
        "Dedicated account manager",
        "24/7 support",
        "Unlimited employees",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section className="bg-dots-pattern-hero">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">
          Everything You Need to Manage
        </h2>
        <p className="text-gray-600 text-3xl text-center mb-12">
          and Control Global Spend
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white flex flex-col justify-between p-8 rounded-lg border transition-all ${
                selectedPlan === index
                  ? "ring-4 ring-lightMode-accentBlue scale-105"
                  : ""
              }`}
              onClick={() => setSelectedPlan(index)}
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
              <button className="flex text-sm justify-center w-full p-3 border-2 border-lightMode-accentBlue hover:bg-lightMode-accentBlue hover:text-white rounded-md duration-300 transform">
                Get 7 Days Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
