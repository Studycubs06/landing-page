import Image from "next/image";
import bgHero from "../../assets/images/Rectangle 446.png";
import heroImage from "../../assets/images/image 23 (1).png";
import bgImage from "../../assets/images/Rectangle 435.png";

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

      <div className="container relative mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        <div className="md:w-1/2 text-white flex flex-col justify-start">
          <h2 className="absolute md:top-[-150px] top-[-90px] text-4xl md:text-4xl leading-[1.3]">
            <span className="font-inter mr-2">Connect with</span>
            <span className="bg-white text-[#0097B2] mt-8 mb-10 text-4xl md:text-4xl font-bold md:py-1 px-1">
              Study<span className="text-[#FFC44F] font-bold">cubs</span>
            </span>
          </h2>
          <p className="mt-8 font-inter text-2xl">
            Let’s start a conversation! Whether you have questions, feedback, or
            just want to learn more, we’re here to listen. Reach out to
            Studycubs today, and let’s work together to unlock the future of
            learning!
          </p>
        </div>

        <div className="md:w-1/2 flex md:justify-end relative mb-[40] mt-5 md:mt-0">
          <Image
            src={bgHero}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-0 md:bottom-[0px] left-[55%] xs:left-[60%] xlg:left-[65%] transform -translate-x-1/2 w-[60%] md:w-[95%] max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
