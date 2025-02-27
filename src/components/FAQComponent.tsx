"use client";

import React, { useState } from "react";

const faqs = [
  {
    question:
      "01. Will this learning platform have the same impact as regular classes?",
    answer:
      "Study Cubs, an online learning platform, has a goal for an effective learning platform that offers strong learning and engaging information while also creating a realistic atmosphere that influences students and encourages them to participate more.",
  },
  {
    question: "02. How will the courses offered benefit students?",
    answer:
      "At Study cubs, our courses are carefully crafted to foster both academic excellence and personal growth. We go beyond imparting subjective knowledge, focusing on developing intrinsic skills that empower students to think critically, solve problems creatively, and grow as individuals.",
  },
  {
    question:
      "03. What Is the cost duration and how the classes will be conducted?",
    answer:
      "Our classes are conducted entirely online, offering flexibility and convenience. The duration of our courses is specifically designed to support students’ academic learning, ensuring they receive comprehensive guidance and support throughout their journey.",
  },
  {
    question: "04. Will the Tutor be able to focus on each individual student?",
    answer:
      "This is a specific element where we are striving for “CHANGE”.At Study Cubs we maintain a low student-to-tutor ratio ensuring that every student receives valuable guidance and personal feedback for each learning Update.",
  },
  {
    question: "05. Are There Live Tutoring Sessions Available?",
    answer:
      "Yes, Studycubs offers live tutoring sessions with experienced educators to provide real-time assistance and guidance.",
  },
  {
    question:
      "06. What Makes Studycubs Different from Other Online Learning Platforms?",
    answer:
      "Studycubs stands out with its interactive learning modules, AI-driven personalized study plans, and 24/7 tutor support.",
  },
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
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-black">
                  <p>{faq.answer}</p>
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
