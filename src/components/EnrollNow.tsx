import Image from "next/image";
import blueVector from "../assets/images/blueVector.png";
import girImage from "../assets/images/girl.png";
import LinkWithTrackEvent from "./LinkWithTrackEvent";

const EnrollNow = () => {
  return (
    <section className="bg-[#FFBC36] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-center md:justify-start relative">
          <Image
            src={blueVector}
            alt="Background Vector"
            className="w-[90%] md:w-[80%] max-w-lg"
          />

          <Image
            src={girImage}
            alt="Overlapping Hero"
            className="absolute bottom-[30px] md:bottom-[0] left-[50%] md:left-[40%] transform -translate-x-1/2 w-[80%] md:w-[70%] max-w-md"
          />

          <LinkWithTrackEvent
            buttonText="Enroll Now"
            eventName="financial-planning-enroll-now-clicked"
            eventParams={{
              category: "Public Speaking",
              action: "Enroll Now Clicked",
              label: "Public Speaking Enroll Now Button"
            }}
            href="/financial-planning"
            className="bg-[#0097B2] text-center absolute bottom-0 left-[-10px] text-[#fff] px-8 py-2 mt-4 rounded-lg font-bold text-2xl hover:bg-[#E6A500] shadow-md block md:hidden w-full max-w-[300px] mx-auto"
          />

        </div>

        <div className="md:w-1/2 mt-5 text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-bold leading-[1.3]">
            Build
            <span className="text-3xl ml-3 md:text-6xl font-bold bg-[#0097B2] px-3 py-1 inline-block mt-3 text-[#fff]">
              confidence
            </span>{" "}
            in speaking, reading, and writing.
          </h2>

          <LinkWithTrackEvent
            eventName="public-speaking-enroll-now-clicked"
            eventParams={{
              category: "Public Speaking",
              action: "Enroll Now Clicked",
              label: "Public Speaking Enroll Now Button"
            }}
            buttonText="Enroll Now"
            href={"/public-speaking"}
            className="w-fit bg-[#0097B2] text-[#fff] px-10 py-2 mt-5 rounded-lg font-bold text-3xl hover:bg-[#E6A500] shadow-md hidden md:inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollNow;
