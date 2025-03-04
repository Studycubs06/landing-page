import Boxes from "@/components/public-speaking/Boxes";
import JourneyBoxes from "@/components/public-speaking/JourneyBoxes";
import Pricing from "@/components/public-speaking/Pricing";
import bgRectangle from "../../assets/images/Rectangle 491.png";
import boy from "../../assets/images/image 45.png";
import budget from "../../assets/images/Budget.png";
import stock from "../../assets/images/Stock.png";
import wallet from "../../assets/images/Wallet.png";
import medal from "../../assets/images/international-math-olympiad.svg fill.png";
import emp from "../../assets/icons/emp.png";
import money from "../../assets/icons/money.png";
import brain from "../../assets/icons/brain.png";
import reader from "../../assets/icons/reader.png";
import rupee from "../../assets/icons/rupee.png";
import Hero from "@/components/financial-planning/Hero";
import { BoxItem, JourneyBoxItem, PricingData } from "@/../types/data";

export default function FinancialPlanning() {
  const pricingData: PricingData = {
    bgImage: bgRectangle,
    textColor: "text-black",
    title: "Affordable Pricing For You",
    boyImage: boy,
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
    bulletColor: "bg-black",
    buttons: ["₹1999/-", "₹5999/-", "₹11999/-"],
    buttonLabels: ["Per Month", "Quarterly", "Semi Annually"],
    buttonLabelColor: "text-white",
  };

  const boxes: BoxItem[] = [
    {
      id: 1,
      image: budget,
      title: "Fundamental",
      description: "Financial Terms ",
      hasExtraContent: true,
      hasBorder: true,
      classes: 16,
      activity: 2,
      imageBorder: true,
      textAboveImage: false,
    },
    {
      id: 2,
      image: stock,
      title: "Investment with:",
      description: "Stock Market",
      textAboveImage: true,
      textDesc: "Unlocks at",
      classesText: "32 classes",
    },
    {
      id: 3,
      image: wallet,
      title: "Understand:",
      description: "How money works",
      classes: 52,
      activity: 6,
      hasExtraContent: true,
      textAboveImage: false,
      imageBorder: true,
    },
    {
      id: 4,
      image: medal,
      title: "Management",
      description: "Become Finance Manager",
      textAboveImage: true,
      textDesc: "Unlocks if you",
      classesText: "sign up for 90 classes",
    },
  ];

  const journeyTitle = "Your Public Speaking Journey";
  const journeyDescription =
    "Unlock your potential with our structured learning path.";

  const boxItems: JourneyBoxItem[] = [
    {
      image: emp,
      alt: "Investment",
      text: "Investment",
      bgColorLight: "rgba(255,153,0,0.21)",
      bgColorDark: "#FF9900",
    },
    {
      image: money,
      alt: "Money Management",
      text: "Money Management",
      bgColorLight: "rgba(220,155,80,0.21)",
      bgColorDark: "#DC9B50",
    },
    {
      image: rupee,
      alt: "Money Psychology",
      text: "Money Psychology",
      bgColorLight: "rgba(252,90,90,0.21)",
      bgColorDark: "#FC5A5A",
    },
    {
      image: brain,
      alt: "Decision Making",
      text: "Decision Making",
      bgColorLight: "rgba(61,213,152,0.21)",
      bgColorDark: "#3DD598",
    },
    {
      image: reader,
      alt: "Finance ,Taxation Economics & Accounting",
      text: "Finance ,Taxation Economics & Accounting",
      bgColorLight: "rgba(20,222,235,0.21)",
      bgColorDark: "#14DEEB",
    },
  ];
  return (
    <>
      <Hero />
      <Boxes
        title="Why Financial Planning?"
        description="Our activity-based curriculum in financial planning helps students understand the 'Why' behind money management, building confidence in budgeting, investing, and financial decision-making. Your child will gain a strong foundation in financial literacy for life."
        resultsText="What results can your child expect to achieve?"
        enrollText="Enroll now and watch them thrive in every financial decision!"
        items={boxItems}
      />
      <JourneyBoxes
        title={journeyTitle}
        description={journeyDescription}
        boxes={boxes}
      />
      <Pricing {...pricingData} />
    </>
  );
}
