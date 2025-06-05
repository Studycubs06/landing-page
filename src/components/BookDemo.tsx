"use client";
import React, { useState, useEffect } from "react";
import CalendlyEmbed from "../components/CalendlyEmbed";

const BookDemo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCalendlyLoad = setInterval(() => {
      const calendlyWidget = document.querySelector(
        ".calendly-inline-widget iframe"
      );
      if (calendlyWidget) {
        setIsLoading(false);
        clearInterval(checkCalendlyLoad);
      }
    }, 500);

    return () => clearInterval(checkCalendlyLoad);
  }, []);

  return (
    <section className="bg-[#003366] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 flex-column justify-start relative mt-8 md:mt-0"
          style={{ height: "700px" }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-50"></div>
            </div>
          )}

          <CalendlyEmbed url="https://calendly.com/studycubs06/Studycubs-demo-classes?hide_landing_page_details=1&hide_gdpr_banner=1" />
        </div>

        <div className="md:w-1/2 text-center md:text-right mt-6">
          <h2 className="text-3xl md:text-6xl font-bold space-y-4 flex flex-col">
            Try a Free Demo and Experience Personalized Learning at Studycubs!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
