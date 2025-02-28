import Image from "next/image";
import React from "react";
import certificateImg from "../../assets/images/image 48.png";

const Certificate = () => {
  return (
    <section className="bg-[#fff] text-black py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-inter text-center mb-16">
          Earn Certificate and Become Our Super Cubs
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 ">
          <div className="w-full md:w-full flex">
            <Image
              src={certificateImg}
              alt="Certificate"
              width={400}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl font-inter">
              Get Certified & Showcase Your Skills
            </h2>
            <p className="text-lg text-black font-inter">
              Become Proud Studycubs Alumni
            </p>
            <p className="text-sm font-inter text-[#5A7184]">
              Earn a certificate upon completing your course at StudyCubs,
              showcasing your new skills and achievements! Celebrate your growth
              and expertise with a recognized certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
