import React from "react";
import CalendlyEmbed from "../components/CalendlyEmbed";

const BookDemo = () => {
  return (
    <section className="bg-[#003366] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 flex-column justify-start relative mt-8 md:mt-0"
          style={{
            height: "700px",
          }}
        >
          <CalendlyEmbed url="https://calendly.com/studycubs06/studycubs-demo-classes?hide_landing_page_details=1&hide_gdpr_banner=1" />
        </div>

        <div className="md:w-1/2 text-center md:text-right mt-6">
          <h2 className="text-3xl md:text-6xl font-bold space-y-4 flex flex-col">
            <span>Try a Free Demo</span>
            <span>Experience Personalized</span>
            <span>Learning at StudyCubs!</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
