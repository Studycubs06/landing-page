import Image from "next/image";
import React from "react";
import course1 from "../../assets/images/image 23.png";
import financeKid from "../../assets/images/finance-kid.png";
import WebsiteDevelopment from "../../assets/images/WebsiteDevelopment.png";

import shape1 from "../../assets/images/orangeBg.png";
import shape2 from "../../assets/images/purpleBg.png";
import shape3 from "../../assets/images/blueBg.png";
import bgImage from "../../assets/images/image 46.png";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "Public Speaking",
    grade: "For Grade 3rd - 12th Grade",
    gradeColor: "text-[#FF8D18]",
    imgSrc: course1,
    shape: shape1,
    shapeClass: "w-[280px] h-[90px] sm:h-[250px]",
    link: "/public-speaking",
  },
  {
    id: 2,
    name: "Financial Planning",
    grade: "For 7th Grade - UG",
    imgSrc: financeKid,
    gradeColor: "text-[#A461D8]",
    shape: shape2,
    shapeClass: "w-full h-[90px] sm:h-[120px]",
    link: "/financial-planning",
  },
  {
    id: 3,
    name: "Website Development",
    grade: "For 7th Grade - UG",
    imgSrc: WebsiteDevelopment,
    gradeColor: "text-[#41A1FF]",
    shape: shape3,
    shapeClass: "w-full h-[90px] sm:h-[120px]",
    link: "/website-development",
  },
];

const CourseCards = () => {
  return (
    <section
      className="text-white relative h-auto flex items-center justify-center"
      id="our-courses"
    >
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="container mx-auto p-3 sm:px-6 md:px-28 md:py-10">
        <h2 className="sm:text-3xl font-bold text-black pb-6">OUR COURSES</h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-10 w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white w-[280px] sm:w-[320px] rounded-xl shadow-lg p-5 flex flex-col items-center gap-5 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 ${course.shapeClass} rounded-t-xl overflow-hidden`}
              >
                <Image
                  src={course.shape}
                  alt="Decorative"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>

              <div className="relative mt-[50px]">
                <Image
                  src={course.imgSrc}
                  alt={course.name}
                  width={140}
                  height={140}
                  className="rounded-lg w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] object-contain relative z-10"
                />
              </div>

              <h3 className="text-black text-2xl font-inter text-center">
                {course.name}
              </h3>

              <span
                className={`bg-[#EBF7FF] ${course.gradeColor} px-12 py-2 rounded-full text-sm font-inter`}
              >
                {course.grade}
              </span>

              <Link
                href={course.link}
                className="bg-[#FFBC36] text-white px-6 py-2 text-sm font-semibold rounded-lg"
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

export default CourseCards;
