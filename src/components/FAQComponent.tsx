"use client";

import React, { useState } from "react";

const faqs = [
  "01. How Does Studycubs Help Students Achieve Better Grades?",
  "01. How Does Studycubs Help Students Achieve Better Grades?",
  "01. How Does Studycubs Help Students Achieve Better Grades?",
  "01. How Does Studycubs Help Students Achieve Better Grades?",
  "01. How Does Studycubs Help Students Achieve Better Grades?",
  "01. How Does Studycubs Help Students Achieve Better Grades?",
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="text-white my-8">
      <div className="w-full text-center pb-6">
        <h2 className="text-2xl sm:text-5xl font-bold text-black">
          Discover Frequently Asked Questions
        </h2>
      </div>

      <div className="container mx-auto p-0 sm:px-6 md:px-12 md:py-10">
        <div className="flex flex-col gap-5 w-full bg-[#003366] p-4 md:px-16 md:py-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white w-full">
              <button
                className="w-full text-left text-white text-2xl font-bold p-5 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-black">
                  <p>
                    Studycubs provides personalized learning experiences, expert
                    mentorship, and interactive lessons to help students improve
                    their understanding and grades.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
