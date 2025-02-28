"use client";

import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import userImage from "../assets/images/userImage.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    text: "Studycubs seems to be a promising platform for the young kids to learn and grow . The teachers are great  in keeping the children engrossed into learning with various activities every class.",
    name: "John Doe",
    designation: "MBA Graduate",
    image: userImage,
  },
  {
    id: 2,
    text: "The public speaking course has really helped my daughter in improving her English-speaking skills, and she seems to be more confident about it. Thanks Studycubs for bringing the difference they promised.",
    name: "Jane Smith",
    designation: "Engineer",
    image: userImage,
  },
  {
    id: 3,
    text: "The Financial planning is a must course that I would suggest every parent to enroll their child into. This is the best course that Studycubs have come up with.",
    name: "Robert Brown",
    designation: "Doctor",
    image: userImage,
  },
];

const ParentChoice = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<
    {
      id: number;
      text: string;
      name: string;
      designation: string;
      image: StaticImageData;
    }[]
  >([]);

  useEffect(() => {
    setDuplicatedTestimonials([
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ]);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId: number | null = null;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const scroll = () => {
      if (scrollContainer && isScrolling) {
        scrollPosition += scrollSpeed;

        // Cast firstChild to HTMLElement before accessing offsetWidth
        const firstChild = scrollContainer.firstChild as HTMLElement | null;

        if (
          firstChild &&
          scrollPosition >= firstChild.offsetWidth * testimonials.length
        ) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
        animationId = requestAnimationFrame(scroll);
      }
    };

    if (isScrolling) {
      animationId = requestAnimationFrame(scroll);
    }

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isScrolling]);

  const handleMouseDown = () => {
    setIsScrolling(false);
  };

  const handleMouseUp = () => {
    setIsScrolling(true);
  };

  return (
    <section className="text-white">
      <div className="w-full bg-[#003366] text-center py-6">
        <h2 className="text-3xl sm:text-6xl font-bold text-white">
          Parents Choice
        </h2>
      </div>

      <div className="container mx-auto p-6 md:px-12 py-10">
        <div
          ref={scrollRef}
          className="flex space-x-14 overflow-x-auto w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "-moz-scrollbars-none",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-full sm:w-[300px] p-3 sm:p-6 border border-black rounded-lg bg-transparent relative shadow-md flex-shrink-0"
            >
              <RiDoubleQuotesL size={50} color="#0097B2" />

              <p
                className="text-black font-bold text-md sm:text-lg"
                style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
              >
                {testimonial.text}
              </p>

              <div className="flex items-center mt-3 sm:mt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <div className="ml-4">
                  <h3 className="text-black font-bold text-md sm:text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentChoice;
