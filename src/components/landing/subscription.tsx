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
    <section className="bg-dots-pattern-hero py-12 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
      Everything You Need to Manage
    </h2>
    <p className="text-gray-600 text-lg sm:text-xl lg:text-3xl text-center mb-10 sm:mb-12">
      and Control Global Spend
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan, index) => (
        <div
          key={plan.name}
          className={`bg-white flex flex-col justify-between p-6 sm:p-8 rounded-lg border shadow-md transition-transform duration-300 ${
            selectedPlan === index
              ? "ring-4 ring-lightMode-accentBlue scale-105"
              : "hover:shadow-lg"
          }`}
          onClick={() => setSelectedPlan(index)}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            {plan.name}
          </h3>
          <div className="mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {plan.price}
            </span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600"
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
          <button className="text-sm flex justify-center w-full p-2 sm:p-3 border-2 border-lightMode-accentBlue hover:bg-lightMode-accentBlue hover:text-white rounded-md duration-300 transform">
            Get 7 Days Free Trial
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
