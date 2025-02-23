import Image from "next/image";
import React from "react";
import course1 from "../assets/images/image 23.png";
import course2 from "../assets/images/image 24.png";
import course3 from "../assets/images/image 25.png";
import course4 from "../assets/images/image.png";
import bgImage from "../assets/images/image 22.png";

const courses = [
  {
    id: 1,
    name: "Public Speaking",
    grade: "For Grade 3 - 12",
    imgSrc: course1,
  },
  {
    id: 2,
    name: "Web Development",
    grade: "For Grade 3 - 12",
    imgSrc: course2,
  },
  { id: 3, name: "Ai & ML", grade: "For Grade 3 - 12", imgSrc: course3 },
  {
    id: 4,
    name: "App Developement",
    grade: "For Grade 3 - 12",
    imgSrc: course4,
  },
];

const OurCourses = () => {
  return (
    <section className="text-white relative ">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="w-full bg-[#0097B2] text-center py-6">
        <h2 className="text-6xl font-bold text-white">OUR COURSES</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="overflow-x-auto flex space-x-14 scrollbar-hide w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-[280px] h-[400px] bg-white rounded-lg shadow-lg p-5 flex flex-col items-center"
            >
              <div className="w-40 h-40 flex justify-center">
                <Image
                  src={course.imgSrc}
                  alt={course.name}
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-black text-xl font-bold mt-4">
                {course.name}
              </h3>

              <span className="mt-2 bg-[#FFF7E6] text-[#FFBC36] px-8 py-1 rounded-lg text-lg font-medium">
                {course.grade}
              </span>

              <button className="mt-6 bg-[#FFBC36] text-white px-8 py-2 text-lg font-semibold">
                Book a Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
