import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/micBoy.webp";
import HeroBG from "../../assets/images/HeroBG2.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import { PUBLIC_SPEAKING_TESTIMONIALS } from "@/constants/testimonials";
import { PUBLIC_SPEAKING_STATS } from "@/constants/statsData";

const featureData = [
  {
    iconBg: "bg-[#FFBC36] border-[#FFBC36]",
    level: "Foundation Module",
    list: [
      "Overcoming Stage Fear",
      "Body Language Basics",
      "Active Listening Skills",
      "Storytelling for Kids",
      "1:3 Personalized Mentorship",
    ],
    btnColor: "bg-[#FFBC36]",
    arrowColor: "bg-[#e5a930]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#FFBC36] border-[#FFBC36]",
    level: "Communication Core",
    list: [
      "Sentence Construction",
      "Vocabulary Building",
      "Expression & Emotion",
      "Confidence Drills",
      "12 Live Interactive Classes",
    ],
    btnColor: "bg-[#FFBC36]",
    arrowColor: "bg-[#e5a930]",
    image: Writing,
  },
];

const LevelOne = () => {
  return (
    <InternalPage
      heroTitle="Public Speaking Foundation (Level 1)"
      heroSubtitle="Building a strong foundation of confidence and basic communication for students in Grade 3 - Grade 6."
      heroImage={Boy}
      bgImage={HeroBG}
      bgColor={"bg-[#FFBC36]"}
      stats={PUBLIC_SPEAKING_STATS}
      featureData={featureData}
      title="What Parents Say About Level 1"
      testimonials={PUBLIC_SPEAKING_TESTIMONIALS}
    />
  );
};

export default LevelOne;
