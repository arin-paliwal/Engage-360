import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is our HR management platform?",
    answer:
      "Our HR management platform is a comprehensive solution designed to streamline employee data management, payroll, benefits administration, and performance tracking, making HR processes more efficient.",
  },
  {
    question: "How does the platform ensure employee data security?",
    answer:
      "The platform employs robust encryption, secure authentication, and regular compliance audits to ensure all employee data is safe and protected from unauthorized access.",
  },
  {
    question: "Can employees update their personal details themselves?",
    answer:
      "Yes, employees can log into their personal dashboard to update personal details like contact information, bank details, and emergency contacts, subject to HR approval.",
  },
  {
    question: "Does the system integrate with payroll software?",
    answer:
      "Yes, our HR management platform integrates seamlessly with popular payroll software to ensure accurate and timely salary processing.",
  },
  {
    question: "What kind of reports can I generate?",
    answer:
      "You can generate various reports, including attendance summaries, performance reviews, payroll breakdowns, and compliance reports, to meet your HR analytics needs.",
  },
];

export default function FAQs() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-dots-pattern-hero">
      <div className="max-w-5xl  mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">FAQs</h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about our HR management platform.
          <br />
          Can't find what you're looking for? Just ask.
        </p>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center p-4 hover:bg-gray-50">
                <h3 className="font-medium"
                
                >{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndexes.includes(index) && (
                <div className="p-4 border-t text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
