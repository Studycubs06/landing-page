import Image from "next/image";
import bgVector from "../../assets/images/WhiteVector.png";
import heroImage from "../../assets/images/image 40.png";
import bgImage from "../../assets/images/Vector 87.png";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 w-full h-[full] -z-10 bg-white"
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/2 flex flex-col justify-start relative md:bottom-[100px] pt-10 md:pt-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.3]">
            Public speaking to build{" "}
            <span className="text-2xl md:text-4xl font-bold bg-[#2AB7CA] px-3 py-1 inline-block text-[#fff]">
              CONFIDENCE
            </span>
            <br />
            Learn Live 1:5
            <br /> For Grades 3 to 12
          </h2>

          <p className="mt-8 mb-10 text-lg md:text-xl">
            Use public speaking to build confidence and inspire change!
          </p>
          <button className="bg-[#2AB7CA] text-[#fff] items-center flex font-inter flex-row gap-5 px-5 py-3 w-[250px]  text-xl hover:bg-[#3e949f]">
            <FaRegCalendarAlt color="white" size={25} />
            Book a Free Trial
          </button>
        </div>

        <div className="md:w-1/2 flex justify-end relative mt-10 md:mt-0">
          <Image
            src={bgVector}
            alt="Background Vector"
            className="w-[90%] md:w-[50%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-[5px] left-[60%] transform -translate-x-1/2 w-[100%] md:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
