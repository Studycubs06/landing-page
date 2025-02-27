"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import girlImage from "../assets/images/image 12.png";
import { Student } from "../../types/data";

const students: Student[] = [
  { id: 1, name: "Madhuri Dixit", grade: "5th Grade", imgSrc: girlImage },
  { id: 2, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
  { id: 3, name: "Priya Mehta", grade: "4th Grade", imgSrc: girlImage },
  { id: 4, name: "Madhuri Dixit", grade: "5th Grade", imgSrc: girlImage },
  { id: 5, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
  { id: 6, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
];

const SuperCub = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef<number | null>(null);

  const duplicatedStudents = [...students, ...students, ...students];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollSpeed = -0.5;

    if (scrollContainer) {
      scrollPositionRef.current =
        scrollPositionRef.current ?? scrollContainer.scrollWidth / 3;
      scrollContainer.scrollLeft = scrollPositionRef.current;
    }

    const scrollAnimation = () => {
      if (scrollContainer) {
        scrollPositionRef.current =
          (scrollPositionRef.current ?? 0) + scrollSpeed;

        if (scrollPositionRef.current <= 0) {
          scrollPositionRef.current = scrollContainer.scrollWidth / 3;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }

      animationRef.current = requestAnimationFrame(scrollAnimation);
    };

    animationRef.current = requestAnimationFrame(scrollAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="text-white">
      <div className="w-full bg-[#FFBC36] text-center py-6">
        <h2 className="text-3xl sm:text-6xl font-bold text-white">
          Meet our Super Cubs
        </h2>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        <div
          className="flex space-x-6 w-full"
          ref={scrollContainerRef}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {duplicatedStudents.map((student, index) => (
            <div
              key={`${student.id}-${index}`}
              className="w-[220px] bg-[#FFBC36] flex justify-between flex-col items-center shadow-md flex-shrink-0"
            >
              <div className="py-5">
                <div className="w-full bg-white rounded-lg p-3 flex justify-end items-center">
                  <Image
                    src={student.imgSrc}
                    alt={student.name}
                    width={160}
                    height={160}
                    className="rounded-lg mt-auto w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">{student.name}</h3>
                  <p className="text-md text-white font-bold">
                    {student.grade}
                  </p>
                </div>
              </div>
              <div className="w-[220px] flex justify-center h-[37px] bg-[#0097B2] items-center">
                <h1 className="font-semibold text-xl text-center">
                  Public speaker
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCub;
