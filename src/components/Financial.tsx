"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import blueVector from "../assets/images/blueVector.png";
import boyImage from "../assets/images/image 38.png";

const Financial = () => {
  const router = useRouter();
  return (
    <section className="bg-[#FFBC36] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-start relative mt-8 md:mt-0">
          <Image
            src={blueVector}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={boyImage}
            alt="Overlapping Hero"
            className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-[70%] md:w-[70%] max-w-md"
          />
        </div>
        <div className="md:w-1/2 text-left md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.3]">
            Master financial and making informed investment{" "}
            <span className="text-5xl md:text-6xl font-bold bg-[#0097B2] px-3 py-1 inline-block mt-3 text-[#fff]">
              choices.
            </span>{" "}
          </h2>
          <button
            onClick={() => router.push("/financial-planning")}
            className="bg-[#0097B2] text-[#fff] px-10 py-2 mt-5 rounded-lg font-bold text-3xl hover:bg-[#E6A500] shadow-md"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Financial;
