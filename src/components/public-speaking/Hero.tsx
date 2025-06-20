import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroProps {
  Boy: StaticImageData | string;
  HeroBG: StaticImageData | string;
}

const Hero: React.FC<HeroProps> = ({ Boy, HeroBG }) => {
  return (
    <section className="relative w-full h-[550px] md:h-[300px] py-2 text-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="text-white relative z-20 mx-auto flex flex-col md:flex-row items-center justify-center min-h-[200px] h-full">
        <div className="relative md:left-[-55px] xlg:left-[-180px] text-center md:text-left">
          <h2 className="md:w-[450px] text-2xl text-[#fff] md:text-2xl font-bold leading-[1.3]">
            Join Our Public speaking course
          </h2>
          <p className="mt-4 text-md md:text-md font-inter">
            Empower your child with the confidence to speak, lead, and succeed
            on stage and in life.
          </p>
        </div>
        <div className="relative md:right-[-150px] bottom-[-50px]">
          <Image
            src={Boy}
            alt="boy"
            width={400}
            height={300}
            className="w-[400px] h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
