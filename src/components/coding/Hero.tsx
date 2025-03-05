import Image from "next/image";
import heroImage from "../../assets/images/image 50.png";
import bgImage from "../../assets/images/Vector 87 (1).png";
import BookFreeTrialButton from "../BookFreeTrialButton";

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
        <div className="md:w-1/2 text-white flex flex-col justify-start relative md:bottom-[100px] bottom-[100px]">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.3]">
            Master Coding with Studycubs
            <br />
            Learn Live 1:5
            <br />
            For Grades 3 to 12
          </h2>

          <p className="mt-8 mb-10 text-lg md:text-xl">
            Use web development to build skills and create innovative digital
            solutions!
          </p>
          <BookFreeTrialButton className="bg-[#2AB7CA] text-[#fff] items-center flex font-inter flex-row gap-5 px-5 py-3 w-[250px]  text-xl hover:bg-[#3e949f]" />
        </div>

        <div className="md:w-1/2 flex items-end justify-end relative">
          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-[-200px] left-[60%] transform -translate-x-1/2 w-[100%] md:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
