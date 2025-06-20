import Image from "next/image";
import React from "react";
import TestiBG from "../../assets/images/testiBG.webp";

interface TestimonialsProps {
  TestiTitle: string;
}

const testimonials = [
  {
    name: "Kathy Sullivan",
    title: "CEO at Ordian IT",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
  },
  {
    name: "Elsie Stroud",
    title: "CEO at Edwards",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
  },
  {
    name: "Lucas White",
    title: "Manager at BrightFuture",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ TestiTitle }) => {
  return (
    <section className="relative w-full py-20 h-auto md:h-[580px] xlg:h-[650px] text-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={TestiBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold text-[#17254E]">{TestiTitle} </h1>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 container mx-auto px-6 md:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-[#000] p-6 rounded-md  flex flex-col justify-between h-full"
          >
            {/* Text */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {testimonial.text}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <div>
                <p className="text-base font-semibold text-[#17254E]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#704FE6]">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
