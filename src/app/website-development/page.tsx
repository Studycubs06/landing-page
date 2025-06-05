import Boxes from "@/components/public-speaking/Boxes";
import JourneyBoxes from "@/components/public-speaking/JourneyBoxes";
import Pricing from "@/components/public-speaking/Pricing";
import bgCoding from "../../assets/images/codingBg.jpg";
import coder from "../../assets/images/coderBoy.jpg";
import java from "../../assets/images/Java.png";
import plugIn from "../../assets/images/Plug in.png";
import UI from "../../assets/images/Ui.png";
import medal from "../../assets/images/international-math-olympiad.svg fill.png";
import setting from "../../assets/icons/setting.png";
import laptop from "../../assets/icons/laptop.png";
import plug from "../../assets/icons/plug.png";
import database from "../../assets/icons/database.png";
import user from "../../assets/icons/user.png";

import { BoxItem, JourneyBoxItem, PricingData } from "@/../types/data";
import Hero from "@/components/coding/Hero";
import CourseCards from "@/components/coding/CourseCards";
import Certificate from "@/components/coding/Certificate";

export default function Coding() {
  const pricingData: PricingData = {
    bgImage: bgCoding,
    textColor: "text-white",
    title: "Affordable coding lessons",
    boyImage: coder,
    listItems: [
      [
        "Class Size 5 Students",
        "3 Classes a week",
        "Include 1 Activity class",
        "Duration: 1 Hr per day",
      ],
      [
        "Designed Syllabus",
        "2 Test series",
        "Individual Attention",
        "Flexible Classes",
      ],
    ],
    bulletColor: "bg-white",
    buttons: ["₹1999/-", "₹5999/-", "₹11999/-"],
    buttonLabels: ["Per Month", "Quarterly", "Semi Annually"],
    buttonLabelColor: "text-white",
  };

  const boxes: BoxItem[] = [
    {
      id: 1,
      image: java,
      title: "Fundamental",
      description: "Web Development",
      hasExtraContent: true,
      hasBorder: true,
      classes: 16,
      activity: 2,
      imageBorder: true,
      textAboveImage: false,
    },
    {
      id: 2,
      image: UI,
      title: "Build with:",
      description: "React Js",
      textAboveImage: true,
      textDesc: "Unlocks at",
      classesText: "32 classes",
    },
    {
      id: 3,
      image: plugIn,
      title: "Create with:",
      description: "Backend Node js",
      classes: 52,
      activity: 6,
      hasExtraContent: true,
      textAboveImage: false,
      imageBorder: true,
    },
    {
      id: 4,
      image: medal,
      title: "Achived:",
      description: "Become Full Stack Developer",
      textAboveImage: true,
      textDesc: "Unlocks if you",
      classesText: "sign up for 90 classes",
    },
  ];

  const journeyTitle = "Your Website Development Journey";
  const journeyDescription =
    "Unlock your potential with our structured learning path.";

  const boxItems: JourneyBoxItem[] = [
    {
      image: setting,
      alt: "Fundamentals",
      text: "Fundamentals",
      bgColorLight: "rgba(255,153,0,0.21)",
      bgColorDark: "#FF9900",
    },
    {
      image: laptop,
      alt: "Front-End",
      text: "Front-End",
      bgColorLight: "rgba(220,155,80,0.21)",
      bgColorDark: "#DC9B50",
    },
    {
      image: plug,
      alt: "Backend",
      text: "Backend",
      bgColorLight: "rgba(252,90,90,0.21)",
      bgColorDark: "#FC5A5A",
    },
    {
      image: database,
      alt: "Database",
      text: "Database",
      bgColorLight: "rgba(61,213,152,0.21)",
      bgColorDark: "#3DD598",
    },
    {
      image: user,
      alt: "Live project & interview preparation ",
      text: "Live project & interview preparation ",
      bgColorLight: "rgba(20,222,235,0.21)",
      bgColorDark: "#14DEEB",
    },
  ];
  return (
    <>
      <Hero />
      <CourseCards />
      <Boxes
        title="MERNFULL STACK (WEB) DEVELOPMENT"
        description="Studycubs offers a comprehensive MERN Full Stack Development course covering React, Node.js, and MongoDB. Gain hands-on experience with real-world projects, expert mentorship, and flexible learning to become a job-ready developer. Affordable, flexible, and designed to help you succeed!"
        resultsText="What results can your child expect to achieve?"
        enrollText="Enroll now and watch them excel in every web development project!"
        items={boxItems}
      />
      <JourneyBoxes
        title={journeyTitle}
        description={journeyDescription}
        boxes={boxes}
      />
      <Pricing {...pricingData} />
      <Certificate />
    </>
  );
}
