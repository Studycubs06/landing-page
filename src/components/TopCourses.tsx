"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { FaBook, FaStar, FaClock, FaUser, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Assets
import BoyMic from "../assets/images/boyMic.webp";
import Boy from "../assets/images/boy.webp";
import AcademicsImg from "../assets/images/academics.webp";
import Bird from "../assets/images/birds.webp";

const DEFAULT_COURSES = [
  {
    title: "Public Speaking Foundation (Level 1)",
    rating: 4.9,
    features: ["1:3 Ratio", "12 Classes", "1.15 Hr/Class"],
    price: "3000",
    image: BoyMic,
    grade: "Grade 3 - Grade 6",
    path: "/public-speaking-level-1",
  },
  {
    title: "Oratory Mastery (Level 2)",
    rating: 4.8,
    features: ["1:3 Ratio", "12 Classes", "1.15 Hr/Class"],
    price: "3000",
    image: Boy,
    grade: "Grade 7 - Grade 10",
    path: "/public-speaking-level-2",
  },
  {
    title: "Elite Communication (Level 3)",
    rating: 4.9,
    features: ["1:3 Ratio", "12 Classes", "1.15 Hr/Class"],
    price: "3000",
    image: AcademicsImg,
    grade: "Grade 11 - Under Graduate",
    path: "/public-speaking-level-3",
  },
];

interface TopCoursesProps {
  initialCourses?: any[];
}

const TopCourses = ({ initialCourses }: TopCoursesProps) => {
  const router = useRouter();
  const [courses, setCourses] = React.useState<any[]>(
    initialCourses && initialCourses.length > 0
      ? initialCourses.map((c: any) => ({
          title: c.title,
          rating: 4.9,
          features: [c.mentorRatio, `${c.classesPerMonth} Classes`, `${c.duration}/Class`],
          price: c.price,
          image: c.imageUrl || BoyMic,
          grade: c.grades,
          path: `/public-speaking-level-${c.level}`,
        }))
      : DEFAULT_COURSES
  );
  // const [loading, setLoading] = React.useState(!initialCourses);

  React.useEffect(() => {
    if (initialCourses && initialCourses.length > 0) {
      const mapped = initialCourses.map((c: any) => ({
        title: c.title,
        rating: 4.9,
        features: [c.mentorRatio, `${c.classesPerMonth} Classes`, `${c.duration}/Class`],
        price: c.price,
        image: c.imageUrl || BoyMic,
        grade: c.grades,
        path: `/public-speaking-level-${c.level}`,
      }));
      setCourses(mapped);
      // setLoading(false);
    }
  }, [initialCourses]);

  const displayCourses = courses.length > 0 ? courses : DEFAULT_COURSES;

  return (
    <section
      className="relative bg-[#FFF8F0] w-full py-20 text-black overflow-hidden"
      id="our-courses"
    >
      <Image
        src={Bird}
        alt="bird"
        className="absolute w-[200px] -right-0 top-10"
      />
      <div className="container mx-auto px-6 md:px-28">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FaBook color="#FFBC36" />
            <h2 className="text-[#FFBC36] font-semibold">COURSES</h2>
          </div>
          <h1 className="text-3xl font-bold text-[#17254E]">Our Top Courses</h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-10"
        >
          {displayCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-md p-4 shadow-md flex flex-col justify-between min-h-[430px] h-full">
                {/* Image with tag */}
                <div className="relative mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={220}
                    className="rounded-md object-contain h-[220px]"
                  />
                  <div className="absolute top-2 left-2 bg-[#FE543D] text-white px-3 py-1 text-xs font-semibold">
                    TRENDING
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 text-[#FFBC36] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-black text-sm ml-2">
                    ({course.rating})
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#17254E] mb-3 h-[56px]">
                  {course.title}
                </h3>

                {/* Feature Row */}
                <div className="flex justify-between text-xs text-[#17254E] mb-4">
                  <div className="flex items-center gap-1">
                    <HiDocumentText />
                    {course.features?.[0]}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    {course.features?.[1]}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser />
                    {course.features?.[2]}
                  </div>
                </div>

                {/* Dotted Separator */}
                <div className="border-t border-dotted border-gray-300 my-3"></div>

                <div className="flex items-center gap-2 mb-3 mt-3">
                  <FaMapMarkerAlt size={14} />
                  <p className="text-xs text-[#4D5756]">{course.grade}</p>
                </div>

                {/* Footer Row */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-sm">
                      <FaRupeeSign className="text-[#000]" size={14} />
                      <span className="text-lg font-bold text-[#17254E]">
                        {course.price}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        /- per month
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => router.push(course.path)}
                    className="bg-[#FE543D] text-white px-4 py-2 text-sm rounded-full hover:bg-[#be4d3e] transition-all"
                  >
                    View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopCourses;
