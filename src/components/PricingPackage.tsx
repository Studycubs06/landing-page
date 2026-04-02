import React from "react";
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaClock, FaRupeeSign } from "react-icons/fa";

const PricingPackage = () => {
  return (
    <section id="pricing" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-[#FFBC36] font-semibold mb-2">PRICING</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#17254E] mb-6">
          India's Most Affordable Signature Package
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience premium coaching with our specialized 1:3 mentor-student ratio, designed for maximum interaction and personality development.
        </p>

        <div className="max-w-4xl mx-auto bg-[#F3F5F5] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border-4 border-[#FFBC36]">
          {/* Left Side: Package Info */}
          <div className="md:w-3/5 p-8 md:p-12 text-left">
            <h4 className="text-2xl font-bold text-[#17254E] mb-6">Signature Public Speaking Program</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaUsers className="text-[#0097B2]" size={24} />
                <span className="text-lg font-medium">1:3 Mentor-Student Ratio</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-[#0097B2]" size={24} />
                <span className="text-lg font-medium">12 Interactive Classes per Month</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-[#0097B2]" size={24} />
                <span className="text-lg font-medium">1 Hour 15 Minutes per Session</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0097B2]" size={24} />
                <span className="text-lg font-medium">Personalized Feedback & Growth Map</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Price & CTA */}
          <div className="md:w-2/5 bg-[#17254E] p-8 md:p-12 flex flex-col items-center justify-center text-white">
            <div className="flex items-center gap-1 mb-4">
              <FaRupeeSign size={28} />
              <span className="text-6xl font-extrabold text-[#FFBC36]">3000</span>
            </div>
            <p className="text-xl opacity-80 mb-8 font-semibold">Per Month</p>
            <button className="bg-[#FFBC36] hover:bg-[#e5a930] text-[#17254E] font-bold py-4 px-10 rounded-full transition-all text-lg shadow-lg">
              Enroll Now
            </button>
            <p className="mt-4 text-xs opacity-60 italic">*Exclusive 1:3 Interactive Batch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackage;
