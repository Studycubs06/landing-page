import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BoxItem } from "../../../types/data";

const JourneyBoxes = ({
  title,
  description,
  boxes,
}: {
  title: string;
  description: string;
  boxes: BoxItem[];
}) => {
  return (
    <section className="bg-[#fff] text-black py-16">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-md text-[#5A7184] font-inter">{description}</p>
      </div>

      <div className="container mx-auto  sm:px-6 px-12 md:px-12 md:py-10 p-0 relative">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 relative">
          {/* Yellow Line - Adjust for Mobile */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full md:w-[calc(100%-134px)] h-[15px] bg-yellow-400 z-0"></div>

          {boxes.map((box) => (
            <div
              key={box.id}
              className={`w-full md:w-[268px] h-[300px] bg-white flex flex-col items-center text-center z-10
        shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] p-5
        ${box.hasBorder ? "border-[15px] border-[#FFBC36]" : ""}`}
            >
              {box.textAboveImage ? (
                <>
                  <h2 className="text-md text-[#FE8D1B] font-inter">
                    {box.title}
                  </h2>
                  <p className="text-md text-[#000]">{box.description}</p>
                  <div className="mt-4 mb-4">
                    <Image
                      src={box.image}
                      className="w-[105px] h-[110px]"
                      alt={box.title}
                    />
                  </div>
                  <p className="text-sm font-inter text-[#000]">
                    {box.textDesc}
                  </p>
                  <p className="text-sm font-bold text-[#000]">
                    {box.classesText}
                  </p>
                </>
              ) : (
                <>
                  <div
                    className={`mb-4 ${
                      box.imageBorder
                        ? "border p-5 rounded-full border-[#ffbc36]"
                        : ""
                    }`}
                  >
                    <Image
                      src={box.image}
                      width={50}
                      height={50}
                      alt={box.title}
                    />
                  </div>
                  <h2 className="text-xl text-[#FE8D1B] font-inter">
                    {box.title}
                  </h2>
                  <p className="text-xl text-[#000]">{box.description}</p>
                </>
              )}

              {box.hasExtraContent && (
                <div className="w-full mt-4">
                  <div className="flex justify-between mt-2">
                    <div className="w-[45%] h-[60px] bg-[#FAF5FDB2] flex flex-col items-center justify-center">
                      <p>{box.classes}</p>
                      <span className="text-sm text-gray-700 font-inter">
                        Classes
                      </span>
                    </div>
                    <div className="w-[45%] h-[60px] bg-[#FAF5FDB2] flex flex-col items-center justify-center">
                      <p>{box.activity}</p>
                      <span className="text-sm text-gray-700 font-inter">
                        Activity
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-center px-4">
        <button className="bg-[#2AB7CA] text-white flex font-inter flex-row gap-5 px-5 py-3 w-[250px] text-xl hover:bg-[#3e949f]">
          <FaRegCalendarAlt color="white" size={25} />
          Book a Free Trial
        </button>
      </div>
    </section>
  );
};

export default JourneyBoxes;
