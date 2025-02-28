import Image from "next/image";
import React from "react";
import course1 from "../assets/images/image 23.png";
import WebDevelopment from "../assets/images/image 50.png";
import course4 from "../assets/images/image.png";
import bgImage from "../assets/images/image 22.png";
import Link from "next/link";
import FinancialPlanning from "../assets/images/image 44.png";

const courses = [
  {
    id: 1,
    name: "Public Speaking",
    grade: "For Grade 3 - 12",
    imgSrc: course1,
    link: "/public-speaking",
  },
  {
    id: 2,
    name: "Financial planning",
    grade: "For Grade 3 - 12",
    imgSrc: FinancialPlanning,
    link: "/financial-planning",
  },
  {
    id: 3,
    name: "Web development",
    grade: "For Grade 3 - 12",
    imgSrc: WebDevelopment,
    link: "/coding",
  },
  {
    id: 4,
    name: "App Developement",
    grade: "For Grade 3 - 12",
    imgSrc: course4,
    link: "",
  },
];

const OurCourses = () => {
  return (
    <section className="text-white relative" id="our-courses">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="w-full bg-[#0097B2] text-center py-6">
        <h2 className="text-3xl sm:text-6xl font-bold text-white">
          OUR COURSES
        </h2>
      </div>

      <div className="container mx-auto p-3 sm:px-6 md:px-12 md:py-10">
        <div className="grid grid-flow-col grid-col-4 gap-4 overflow-x-auto scrollbar-hide w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white min-w-[250px] rounded-lg shadow-lg p-5 flex flex-col items-center gap-4"
            >
              <div className="flex justify-center">
                <Image
                  src={course.imgSrc}
                  alt={course.name}
                  width={160}
                  height={160}
                  className="rounded-lg w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
                />
              </div>

              <h3 className="text-black text-xl font-bold">{course.name}</h3>

              <span className="bg-[#FFF7E6] text-[#FFBC36] px-8 py-1 rounded-lg text-lg font-medium">
                {course.grade}
              </span>

              <Link
                href={course.link}
                className="bg-[#FFBC36] text-white px-8 py-2 text-lg font-semibold"
              >
                Book a Free Trial
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
