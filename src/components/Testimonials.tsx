import Image from "next/image";
import React from "react";
import TestimonialBG from "../assets/images/TestimonialBG.png";
import UserImg1 from "../assets/images/user1.png";
import UserImg2 from "../assets/images/user2.png";
import UserImg3 from "../assets/images/user3.png";
import { FaBook, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Kathy Sullivan",
    title: "CEO at Ordian IT",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
    image: UserImg1,
  },
  {
    name: "Elsie Stroud",
    title: "CEO at Edwards",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
    image: UserImg2,
  },
  {
    name: "Lucas White",
    title: "Manager at BrightFuture",
    text: `Lorem ipsum dolor sit amet, elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Orci
nulla pellentesque dignissim enim.
Amet consectetur adipiscing`,
    image: UserImg3,
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-20 h-auto md:h-[580px] xlg:h-[650px] text-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={TestimonialBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaBook color="#FFBC36" />
          <h2 className="text-[#FFBC36] font-semibold">WHY CHOOSE US</h2>
        </div>
        <h1 className="text-3xl font-bold text-[#17254E]">What Parents Say</h1>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 container mx-auto px-6 md:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-dotted border-[#FFBC36] p-6 rounded-md bg-white bg-opacity-90 shadow-md flex flex-col justify-between h-full"
          >
            {/* Stars */}
            <div className="flex gap-1 text-[#FFBC36] mb-4">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {testimonial.text}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-base font-semibold text-[#17254E]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#2AB7CA]">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
