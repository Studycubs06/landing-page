import React from "react";
import Image from "next/image";
import userImage from "../assets/images/userImage.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut diam tellus. Suspendisse potenti.",
    name: "John Doe",
    designation: "MBA Graduate",
    image: userImage,
  },
  {
    id: 2,
    text: "Aliquam erat volutpat. Nulla facilisi. Suspendisse potenti. Cras ut diam tellus.",
    name: "Jane Smith",
    designation: "Engineer",
    image: userImage,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut diam tellus. Suspendisse potenti.",
    name: "Robert Brown",
    designation: "Doctor",
    image: userImage,
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut diam tellus. Suspendisse potenti.",
    name: "Emily Johnson",
    designation: "Teacher",
    image: userImage,
  },
];

const ParentChoice = () => {
  return (
    <section className="text-white">
      <div className="w-full bg-[#003366] text-center py-6">
        <h2 className="text-6xl font-bold text-white">Parents Choice</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="overflow-x-auto flex space-x-14 scrollbar-hide w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[300px] px-6 py-6 border border-black rounded-lg bg-transparent relative shadow-md flex-shrink-0"
            >
              <RiDoubleQuotesL size={50} color="#0097B2" />

              <p
                className="text-black font-normal mt-2 text-lg"
                style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
              >
                {testimonial.text}
              </p>

              <div className="flex items-center mt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <div className="ml-4">
                  <h3 className="text-black font-bold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentChoice;
