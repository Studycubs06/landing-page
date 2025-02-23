import React from "react";
import Image from "next/image";
import girlImage from "../assets/images/image 12.png";

const students = [
  { id: 1, name: "Madhuri Dixit", grade: "5th Grade", imgSrc: girlImage },
  { id: 2, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
  { id: 3, name: "Priya Mehta", grade: "4th Grade", imgSrc: girlImage },
  { id: 4, name: "Madhuri Dixit", grade: "5th Grade", imgSrc: girlImage },
  { id: 5, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
  { id: 6, name: "Amit Sharma", grade: "6th Grade", imgSrc: girlImage },
];

const SuperCub = () => {
  return (
    <section className="text-white">
      <div className="w-full bg-[#FFBC36] text-center py-6">
        <h2 className="text-6xl font-bold text-white">Meet our Super Cubs</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center py-6">
        <div className="overflow-x-auto flex space-x-6 scrollbar-hide w-full">
          {students.map((student) => (
            <>
              <div
                key={student.id}
                className="w-[220px] h-[370px] bg-[#FFBC36] flex justify-between flex-col items-center shadow-md"
              >
                <div className="py-5">
                  <div className="w-full bg-white rounded-lg p-3 flex justify-end items-center">
                    <Image
                      src={student.imgSrc}
                      alt={student.name}
                      width={160}
                      height={160}
                      className="rounded-lg mt-auto"
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
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCub;
