import { Suspense } from "react";
import TestimonialsSlider from "./TestimonialsSlider"; // Import the client component

const testimonials = [
  {
    id: 1,
    text: "Studycubs seems to be a promising platform for the young kids to learn and grow. The teachers are great at keeping the children engrossed in learning with various activities every class.",
    name: "Sangeeta Jain",
  },
  {
    id: 2,
    text: "The public speaking course has really helped my daughter in improving her English-speaking skills, and she seems to be more confident about it. Thanks Studycubs for bringing the difference they promised.",
    name: "Neha Kumari",
  },
  {
    id: 3,
    text: "The Financial planning course is a must for every child. This is the best course that Studycubs has come up with.",
    name: "Santosh Sharma",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="text-white">
      <div className="w-full bg-[#003366] text-center py-6">
        <h2 className="text-3xl sm:text-6xl font-bold text-white">
          Parents Choice
        </h2>
      </div>

      <div className="container mx-auto p-6 md:px-12 py-10 overflow-hidden">
        <Suspense fallback={<p>Loading testimonials...</p>}>
          <TestimonialsSlider testimonials={testimonials} />
        </Suspense>
      </div>
    </section>
  );
};

export default TestimonialsSection;
