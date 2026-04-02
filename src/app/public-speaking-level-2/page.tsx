import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/VrBoy.webp";
import HeroBG from "../../assets/images/HeroBG2.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";

import { PUBLIC_SPEAKING_TESTIMONIALS } from "@/constants/testimonials";
import { PUBLIC_SPEAKING_STATS } from "@/constants/statsData";

const featureData = [
  {
    iconBg: "bg-[#0097B2] border-[#0097B2]",
    level: "Mastery Module",
    list: [
      "Persuasive Speaking",
      "Advanced Storytelling",
      "Logical Structure & Flow",
      "Voice Modulation",
      "1:3 Mentor-Student Ratio",
    ],
    btnColor: "bg-[#0097B2]",
    arrowColor: "bg-[#007f96]",
    image: Writing,
  },
  {
    iconBg: "bg-[#0097B2] border-[#0097B2]",
    level: "Fluency & Performance",
    list: [
      "Debate Foundations",
      "Critical Thinking Drills",
      "Creative Expression",
      "12 Live Sessions / Month",
      "75-Min In-Depth Lectures",
    ],
    btnColor: "bg-[#0097B2]",
    arrowColor: "bg-[#007f96]",
    image: Mobile,
  },
];

const LevelTwo = () => {
  return (
    <InternalPage
      heroTitle="Oratory Mastery (Level 2)"
      heroSubtitle="Developing advanced persuasion, storytelling, and vocal fluency for students in Grade 7 - Grade 10."
      heroImage={Boy}
      bgImage={HeroBG}
      bgColor={"bg-[#0097B2]"}
      stats={PUBLIC_SPEAKING_STATS}
      featureData={featureData}
      title="What Parents Say About Level 2"
      testimonials={PUBLIC_SPEAKING_TESTIMONIALS}
    />
  );
};

export default LevelTwo;
