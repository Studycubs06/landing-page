import Image from "next/image";
import React from "react";
import { JourneyBoxItem } from "../../../types/data";

const Boxes = ({
  title,
  description,
  resultsText,
  items,
  enrollText,
}: {
  title: string;
  description: string;
  resultsText: string;
  items: JourneyBoxItem[];
  enrollText: string;
}) => {
  return (
    <section className="bg-[#fff] text-black py-16">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-md text-[#5A7184] font-inter">{description}</p>
        <h2 className="text-[#5A7184] mt-8">{resultsText}</h2>
      </div>
      <div className="container mx-auto p-0 sm:px-6 md:px-12 md:py-10">
        <div className="flex justify-center gap-6 flex-wrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[228px] h-[180px] bg-white flex flex-col items-center justify-center shadow-[0px_10px_40px_0px_#0000000D] rounded-lg"
            >
              <div
                style={{ backgroundColor: item.bgColorLight }}
                className="rounded-full p-2"
              >
                <div
                  style={{ backgroundColor: item.bgColorDark }}
                  className="w-16 h-16 flex items-center justify-center rounded-full"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-inter">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2 className="text-[#00B5CE]">{enrollText}</h2>
        <button className="bg-[#2AB7CA] w-[250px] text-white py-4 mt-5 hover:bg-[#308490]">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Boxes;
