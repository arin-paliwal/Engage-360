import React, { useState, useEffect } from "react";
import { testimonials_data } from "../../data/landing-page";

export default function Needs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials_data.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials_data[currentIndex];

  const handleDotClick = (index: number) => {
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
                <p className="text-gray-400">
                  {currentTestimonial.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials_data.map((_, index) => (
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
