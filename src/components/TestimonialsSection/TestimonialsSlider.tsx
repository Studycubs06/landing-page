"use client";

import { useEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

interface Testimonial {
  id: number;
  text: string;
  name: string;
}

const TestimonialsSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.5; // Adjust for speed control

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number | null = null;

    const scroll = () => {
      if (!isPaused) {
        setScrollPosition((prev) => prev + scrollSpeed);
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div
        className="flex space-x-14"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {/* Duplicate testimonials to create seamless looping */}
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-full sm:w-[300px] p-3 sm:p-6 border border-black rounded-lg bg-transparent shadow-md flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <RiDoubleQuotesL size={50} color="#0097B2" />
                <div className="text-black font-bold text-md sm:text-lg text-wrap">
                  {testimonial.text}
                </div>
              </div>
              <div className="flex items-center mt-auto">
                <h3 className="text-black font-bold text-md sm:text-lg text-wrap">
                  &ldquo;{testimonial.name}&rdquo;
                </h3>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
