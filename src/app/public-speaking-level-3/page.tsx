import InternalPage from "@/components/InternalPage";
import React from "react";
import Oratory from "../../assets/images/boyMic.webp";
import HeroBG from "../../assets/images/HeroBG2.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";
import Performance from "../../assets/images/academics.webp";

import { PUBLIC_SPEAKING_TESTIMONIALS } from "@/constants/testimonials";
import { PUBLIC_SPEAKING_STATS } from "@/constants/statsData";

const featureData = [
  {
    iconBg: "bg-[#17254E] border-[#17254E]",
    level: "Elite Professional Oratory",
    list: [
      "Professional Public Speaking",
      "Advanced Debating Skills",
      "Presentation Mastery",
      "Theatrical Performance",
      "1:3 Elite Mentorship",
    ],
    btnColor: "bg-[#17254E]",
    arrowColor: "bg-[#0b132a]",
    image: Performance,
  },
  {
    iconBg: "bg-[#17254E] border-[#17254E]",
    level: "Leadership & Communication",
    list: [
      "Persuasive Rhetoric",
      "Executive Presence",
      "12 Live Masterclasses",
      "75-Min Rigorous Training",
      "Global Competition Prep",
    ],
    btnColor: "bg-[#17254E]",
    arrowColor: "bg-[#0b132a]",
    image: Mobile,
  },
];

const LevelThree = () => {
  return (
    <InternalPage
      heroTitle="Elite Communication (Level 3)"
      heroSubtitle="Mastering professional oratory, global debating, and elite presentation skills for senior students and undergraduates."
      heroImage={Oratory}
      bgImage={HeroBG}
      bgColor={"bg-[#17254E]"}
      stats={PUBLIC_SPEAKING_STATS}
      featureData={featureData}
      title="Success Stories of Our Elite Orators"
      testimonials={PUBLIC_SPEAKING_TESTIMONIALS}
    />
  );
};

export default LevelThree;
