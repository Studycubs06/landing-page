import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/micBoy.webp";
import HeroBG from "../../assets/images/HeroBG2.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";

import Stud from "../../assets/images/stud.webp";
import Group from "../../assets/images/group.webp";
import Hand from "../../assets/images/hand.webp";
import Course from "../../assets/images/courses.webp";

const statsData = [
  {
    icon: Stud,
    title: "90",
    subtitle: "Number of class",
  },
  {
    icon: Hand,
    title: "90hrs",
    subtitle: "Duration",
  },
  {
    icon: Group,
    title: "3L",
    subtitle: "Levels",
  },
  {
    icon: Course,
    title: "6m",
    subtitle: "Months",
  },
];

const featureData = [
  {
    iconBg: "bg-[#704FE6] border-[#1B75E8]",
    level: "Beginner level",
    list: [
      "Story Telling",
      "Reading Foundation ",
      "Beginning to write",
      "Conversation skills",
      "Grammar & vocabulary",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#704FE6] border-[#FF6881]",
    level: "Intermediate Level",
    list: [
      "Improving my writing ",
      "active listening",
      "Creative performance",
      "Story Writing",
      "Voice& Fluency",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Writing,
  },
  {
    iconBg: "bg-[#704FE6] border-[#00BC65]",
    level: "Advanced Level",
    list: [
      "Logical & critical thinking",
      "Non fiction writer",
      "Social emotional skills",
      "creative expression",
      "Presentation skills",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Mobile,
  },
];

const page = () => {
  return (
    <InternalPage
      Boy={Boy}
      HeroBG={HeroBG}
      bgColor={"bg-[#704FE6]"}
      stats={statsData}
      featureData={featureData}
      TestiTitle="Parents love towards studcubs"
    />
  );
};

export default page;
