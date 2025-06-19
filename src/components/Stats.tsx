import React from "react";

import Star from "../assets/images/star.png";
import Image from "next/image";
import Stud from "../assets/images/stud.png";
import Group from "../assets/images/group.png";
import Hand from "../assets/images/hand.png";
import Courses from "../assets/images/courses.png";

const statsData = [
  {
    icon: Stud,
    count: "100+",
    label: "Total Teacher's",
  },
  {
    icon: Hand,
    count: "1000+",
    label: "Total Student's",
  },
  {
    icon: Group,
    count: "3+",
    label: "Total Center's",
  },
  {
    icon: Courses,
    count: "3",
    label: "Top Courses",
  },
];

const Stats = () => {
  return (
    <div className="relative container mx-auto px-6 py-20 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:divide-x md:divide-dotted md:divide-black text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="px-4 flex flex-col items-center gap-3">
            {/* Outer dotted border */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dotted border-black  p-2" />
              {/* Yellow Circle with Icon */}
              <div className="z-10 bg-[#FFBC36] w-12 h-12 flex items-center justify-center rounded-full">
                <Image src={stat.icon} alt="icon" width={25} height={25} />
              </div>
            </div>
            {/* Count */}
            <h3 className="text-2xl font-bold text-[#17254E]">{stat.count}</h3>
            {/* Label */}
            <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-10 right-6">
        <Image src={Star} alt="star" width={40} height={40} />
      </div>
    </div>
  );
};

export default Stats;
