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
    <section className="bg-darkMode-secondaryBackground text-white p-8 sm:p-12 lg:p-20 h-screen">
  <div className="px-4 sm:px-6 flex items-center h-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
      <img
        src={currentTestimonial.image}
        alt={currentTestimonial.name}
        className="rounded-lg w-full h-auto transition-opacity duration-500"
      />
      <div className="flex flex-col gap-6 sm:gap-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem] font-bold mb-2">
          Designed Based on
          <br />
          <span className="text-gray-400">Our Consumers' Needs</span>
        </h2>
        <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl transition-opacity duration-500">
          {currentTestimonial.text}
        </p>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold text-base sm:text-lg">
              {currentTestimonial.name}
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              {currentTestimonial.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-6 sm:mt-8 gap-2">
    {testimonials_data.map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick(index)}
        className={`w-2 sm:w-3 h-1 sm:h-2 rounded-full ${
          index === currentIndex ? "bg-white" : "bg-gray-400"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>

  );
}
