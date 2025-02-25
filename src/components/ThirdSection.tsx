import React from "react";
import Image from "next/image";
import bgVector from "../assets/images/Vector.png";
import heroImage from "../assets/images/character (1).png";

const ThirdSection = () => {
  return (
    <section className="bg-[#0097B2] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold leading-[1.3]">
            From Beginner to Pro Learn, Code, and Create with
            <span className="text-3xl ml-3 md:text-6xl font-bold bg-[#FFBC36] px-3 py-1 inline-block mt-3 text-[#fff]">
              StudyCubs!
            </span>
          </h2>

          <button className="bg-[#FFBC36] text-[#fff] px-10 py-2 rounded-lg font-bold text-3xl mt-6 hover:bg-[#E6A500] shadow-md hidden md:inline-block">
            Enroll Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-end relative mb-10">
          <Image
            src={bgVector}
            alt="Background Vector"
            className="w-[100%] md:w-[80%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-[30px] left-[50%] transform -translate-x-1/2 w-[90%] md:w-[70%] max-w-md"
          />
          <div className="flex justify-center mt-8 md:hidden">
            <button className="bg-[#FFBC36] absolute left-[10px] bottom-[-10px] text-[#fff] px-8 py-2 rounded-lg font-bold text-2xl hover:bg-[#E6A500] shadow-md w-full max-w-[300px]">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
