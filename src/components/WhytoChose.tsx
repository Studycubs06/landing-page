import React from "react";

const WhytoChoose = () => {
  return (
    <section className="text-white py-8">
      <div className="w-full text-center py-6">
        <h2 className="text-5xl font-bold text-black">
          Why to choose{" "}
          <span className="text-[#FFBC36] font-bold font-batangas">Study</span>
          <span className="text-[#0097B2] font-bold">Cubs</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className=" flex flex-col gap-5 w-full">
          <div className="bg-[#0097B2] w-full text-4xl text-white flex flex-row items-center px-8 py-10 gap-4">
            <h2 className="text-5xl">01.</h2>
            <h2>
              Personalized Learning: Tailored courses in public speaking, coding
              and more, designed to fit each student needs.
            </h2>
          </div>
          <div className="bg-[#FFBC36] w-full text-4xl text-white flex flex-row items-center px-8 py-10 gap-4">
            <h2 className="text-5xl">02.</h2>
            <h2>
              Expert Guidance: Learn from experienced instructors dedicated to
              empowering students for future success.
            </h2>
          </div>
          <div className="bg-[#0097B2] w-full text-4xl text-white flex flex-row items-center px-8 py-10 gap-4">
            <h2 className="text-5xl">03.</h2>
            <h2>
              Confidence & Growth: StudyCubs builds confidence, creativity, and
              life skills for academic and personal success.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhytoChoose;
