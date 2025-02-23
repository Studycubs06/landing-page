import React from "react";
import Image from "next/image";
import bgVector from "../assets/images/Vector.png";
import heroImage from "../assets/images/image 9.png";

const Hero = () => {
  return (
    <section className="bg-[#0097B2] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.3]">
            Learn, Play, and
            <br /> Grow with
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold bg-[#FFBC36] px-3 py-1 inline-block mt-3 text-[#003366]">
            StudyCubs
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Empowering students with essential skills in public speaking,
            coding, and more. Unlock your potential with personalized learning
            at StudyCubs!
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end relative mt-8 md:mt-0">
          <Image
            src={bgVector}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-[10] left-[65%] transform -translate-x-1/2 w-[50%] md:w-[45%] max-w-md"
          />

          <button className="bg-[#003366] text-[#fff] px-10 py-3 w-[400px] rounded-lg font-bold text-3xl absolute bottom-[-30px] left-[65%] transform -translate-x-1/2 hover:bg-[#E6A500] shadow-md">
            Book Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
