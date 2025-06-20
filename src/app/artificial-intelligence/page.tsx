import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/codingBoy.webp";
import HeroBG from "../../assets/images/greenBG.webp";
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
    title: "3K+",
    subtitle: "Successfully Trained",
  },
  {
    icon: Hand,
    title: "15K+",
    subtitle: "Classes Completed",
  },
  {
    icon: Group,
    title: "97K+",
    subtitle: "Satisfaction Rate",
  },
  {
    icon: Course,
    title: "102K+",
    subtitle: "Students Community",
  },
];

const featureData = [
  {
    iconBg: "bg-[#2AB7CA] border-[#1B75E8]",
    level: "Beginner level",
    list: [
      "Story Telling",
      "Reading Foundation ",
      "Beginning to write",
      "Conversation skills",
      "Grammar & vocabulary",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#2AB7CA] border-[#FF6881]",
    level: "Intermediate Level",
    list: [
      "Improving my writing ",
      "active listening",
      "Creative performance",
      "Story Writing",
      "Voice& Fluency",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Writing,
  },
  {
    iconBg: "bg-[#2AB7CA] border-[#00BC65]",
    level: "Advanced Level",
    list: [
      "Logical & critical thinking",
      "Non fiction writer",
      "Social emotional skills",
      "creative expression",
      "Presentation skills",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Mobile,
  },
];

const page = () => {
  return (
    <InternalPage
      Boy={Boy}
      HeroBG={HeroBG}
      bgColor={"bg-[#2AB7CA]"}
      stats={statsData}
      featureData={featureData}
      TestiTitle="Creating A Community Of
Life Long Learners."
    />
  );
};

export default page;
