import React from "react";
import { FiCalendar } from "react-icons/fi";

const BookDemo = () => {
  return (
    <section className="bg-[#003366] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-column justify-start relative mt-8 md:mt-0">
          <div className="w-[472px] h-[371px] bg-[#0097B2]"></div>
          <button className="bg-[#FFBC36] flex items-center justify-center w-[472px] h-[60px] px-5 text-4xl font-bold gap-5">
            <FiCalendar color="#fff" size={40} />
            Book Free Demo
          </button>
        </div>
        <div className="md:w-1/2 text-right mt-6">
          <h2 className="text-5xl md:text-6xl font-bold space-y-4 flex flex-col">
            <span>Try a Free Demo</span>
            <span>experience personalized</span>
            <span>learning at StudyCubs!</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
