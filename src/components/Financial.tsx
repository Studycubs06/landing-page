"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blueVector from "../assets/images/blueVector.png";
import boyImage from "../assets/images/image 38.png";

const Financial = () => {
  return (
    <section className="bg-[#FFBC36] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-start relative md:mt-0">
          <Image
            src={blueVector}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={boyImage}
            alt="Overlapping Hero"
            className="absolute bottom-[10px] md:bottom-[0] left-[45%] xs:left-[35%] lg:left-[40%] transform -translate-x-1/2 w-[80%] md:w-[60%] max-w-md"
          />

          <Link
            href="/financial-planning"
            className="bg-[#0097B2] text-center absolute bottom-0 left-[-10px] text-[#fff] px-8 py-2 mt-4 rounded-lg font-bold text-2xl hover:bg-[#E6A500] shadow-md block md:hidden w-full max-w-[300px] mx-auto"
          >
            Enroll Now
          </Link>
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-5">
          <h2 className="text-3xl md:text-7xl font-bold leading-[1.3]">
            Master finance and make smart investment{" "}
            <span className="text-3xl sm:text-xl md:text-6xl font-bold bg-[#0097B2] px-3 py-1 inline-block mt-3 text-[#fff]">
              choices.
            </span>
          </h2>
          <Link
            href="/financial-planning"
            className="bg-[#0097B2] text-[#fff] px-10 py-2 mt-5 rounded-lg font-bold text-3xl hover:bg-[#E6A500] shadow-md hidden md:block w-fit"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Financial;
