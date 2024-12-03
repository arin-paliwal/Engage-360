import React, { useState, useEffect } from "react";

const testimonials = [
  {
    image: "/images/needs1.jpg",
    text: "Paycelest has completely transformed the way I manage my business operations. Its intuitive platform offers insights that have streamlined my workflows, saving me hours every week. I would recommend this to any entrepreneur looking to improve efficiency.",
    name: "Sarah Smith",
    designation: "CEO, Tech Solutions Inc.",
  },
  {
    image: "/images/needs2.jpg",
    text: "From the moment I started using Paycelest, I noticed an immediate improvement in how my team collaborates. The seamless user experience and powerful analytics make it a tool that we rely on daily. It’s an indispensable part of our business.",
    name: "John Doe",
    designation: "Founder, Startup Hub",
  },
  {
    image: "/images/needs3.jpg",
    text: "I have used many platforms before, but Paycelest stands out due to its customer-focused design and regular feature updates. It’s been a game-changer for our marketing campaigns, providing us with actionable insights that drive results.",
    name: "Emily Carter",
    designation: "Marketing Manager, BrandFlow",
  },
  {
    image: "/images/needs4.jpg",
    text: "Paycelest is not just a tool but a strategic partner in scaling our operations. Its ease of use, coupled with robust support, has made a significant difference in how we approach business challenges. Highly recommended!",
    name: "Michael Lee",
    designation: "COO, Enterprise Solutions",
  },
];

export default function Needs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const handleDotClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-darkMode-secondaryBackground text-white p-20 h-screen">
      <div className="px-6 flex items-center h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="rounded-lg transition-opacity duration-500"
          />
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-5xl leading-[3.5rem] font-bold mb-2">
              Designed Based on
              <br />
              <span className="text-gray-400">Our Consumers' Needs</span>
            </h2>
            <p className="text-gray-400 mb-6 text-xl transition-opacity duration-500">
              {currentTestimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-gray-400">{currentTestimonial.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-1 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
