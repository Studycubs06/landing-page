"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{
        minHeight: "700px",
        height: "100%",
        width: "100%",
        minWidth: "320px",
      }}
    ></div>
  );
};

export default CalendlyEmbed;
