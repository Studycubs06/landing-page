import React from "react";
import { FaBook } from "react-icons/fa";
import Image from "next/image";
import Bird from "../assets/images/birds.webp";
import Curry from "../assets/images/curry.webp";
import diaz from "../assets/images/diaz.webp";
import Jimmy from "../assets/images/jimmy.webp";
import Micheal from "../assets/images/micheal.webp";
import { PiMedalFill } from "react-icons/pi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const superCubsData = [
  { name: "Cheeryl Curry", skill: "Public Speaking", image: Curry },
  { name: "Cheeryl Curry", skill: "Public Speaking", image: diaz },
  { name: "Cheeryl Curry", skill: "Public Speaking", image: Jimmy },
  { name: "Cheeryl Curry", skill: "Public Speaking", image: Micheal },
];

const SuperCubs = () => {
  return (
    <section className="relative bg-[#fff] w-full py-20 text-black overflow-hidden">
      <Image
        src={Bird}
        alt="bird"
        className="absolute w-[200px] -left-0 top-10 transform -scale-x-100"
      />

      <div className="container mt-20 mx-auto px-6 md:px-28">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <FaBook color="#FFBC36" />
              <h2 className="text-[#FFBC36] font-semibold">ARCHIVES</h2>
            </div>
            <h1 className="text-3xl font-bold text-[#17254E]">
              Meet Our Super Cubs
            </h1>
          </div>
        </div>
        <div className="flex justify-end gap-4 mb-10">
          <button className="w-10 h-10 rounded-full border border-[#00BEAE] flex items-center justify-center hover:bg-gray-100">
            <IoIosArrowRoundBack color="#00BEAE" />
          </button>
          <button className="w-10 h-10 rounded-full border border-[#00BEAE] flex items-center justify-center hover:bg-gray-100">
            <IoIosArrowRoundForward color="#00BEAE" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {superCubsData.map((cub, index) => (
            <div
              key={index}
              className="bg-[#EDEDED] rounded-sm p-2 flex flex-col items-start text-left relative"
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={cub.image}
                  alt={cub.name}
                  className="rounded-sm w-full h-full object-cover"
                />
                {/* Badge Icon */}
                <div className="absolute -bottom-3 right-2 bg-[#2AB7CA] p-2">
                  <PiMedalFill className="text-white" />
                </div>
              </div>
              <h3 className="mt-4 ml-4 text-[#0E2A46] text-lg font-semibold">
                {cub.name}
              </h3>
              <p className="text-sm ml-4 mb-5 text-[#FFBC36]">{cub.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCubs;
