"use client";

import React, { useState } from "react";
import Image from "next/image";
import bgVector from "../assets/images/Vector.png";
import heroImage from "../assets/images/image 9.png";
import PopupForm from "./PopupForm";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="bg-[#0097B2] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-bold leading-[1.3]">
            Learn, Play, and Grow with{" "}
            <span className="text-3xl md:text-6xl font-bold bg-[#FFBC36] px-3 py-1 inline-block mt-3 text-[#fff]">
              StudyCubs
            </span>
          </h2>

          <p className="mt-4 text-md md:text-xl font-inter">
            Empowering students with essential skills in public speaking,
            coding, and more. Unlock your potential with personalized learning
            at StudyCubs!
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end relative mb-[40]">
          <Image
            src={bgVector}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-0 md:bottom-[10px] left-[55%] xs:left-[60%] xlg:left-[65%] transform -translate-x-1/2 w-[60%] md:w-[45%] max-w-md"
          />

          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[#003366] text-[#fff] px-10 py-3 w-[250px] md:w-[400px] rounded-lg font-bold text-lg md:text-3xl absolute bottom-[-20] md:bottom-[-30px] left-[60%] xlg:left-[65%] transform -translate-x-1/2 hover:bg-[#E6A500] shadow-md"
          >
            Book Your Free Trial
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
    </section>
  );
};

export default Hero;
