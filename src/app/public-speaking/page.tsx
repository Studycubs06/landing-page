// import Boxes from "@/components/public-speaking/Boxes";
// import Hero from "@/components/public-speaking/Hero";
// import JourneyBoxes from "@/components/public-speaking/JourneyBoxes";
// import Pricing from "@/components/public-speaking/Pricing";
// import bgRectangle from "../../assets/images/Rectangle 487.png";
// import boy from "../../assets/images/image 41.png";
// import chat from "../../assets/images/Chat.png";
// import chalkBoard from "../../assets/images/Chalkboard.png";
// import theater from "../../assets/images/Theater.png";
// import medal from "../../assets/images/international-math-olympiad.svg fill.png";
// import speaker from "../../assets/icons/speaker.png";
// import logicBlock from "../../assets/icons/logicBlock.png";
// import brain from "../../assets/icons/brain.png";
// import reader from "../../assets/icons/reader.png";
// import handwriting from "../../assets/icons/handwriting.png";
// import { BoxItem, JourneyBoxItem, PricingData } from "../../../types/data";

// export default function PublicSpeaking() {
//   const pricingData: PricingData = {
//     bgImage: bgRectangle,
//     textColor: "text-white",
//     title: "Affordable Pricing For You",
//     boyImage: boy,
//     listItems: [
//       [
//         "Class Size: 5 Students",
//         "3 Classes a week",
//         "Include 1 Activity class",
//         "Duration: 1 Hr per day",
//       ],
//       [
//         "Designed Syllabus",
//         "2 Test series",
//         "Individual Attention",
//         "Flexible Classes",
//       ],
//     ],
//     buttons: ["₹1499/-", "₹4499/-", "₹8999/-"],
//     buttonLabels: ["Per Month", "Quarterly", "Semi Annually"],
//     buttonLabelColor: "text-black",
//     bulletColor: "bg-white",
//   };

//   const boxes: BoxItem[] = [
//     {
//       id: 1,
//       image: chat,
//       title: "Fundamental",
//       description: "Conversation",
//       hasExtraContent: true,
//       hasBorder: true,
//       classes: 16,
//       activity: 4,
//       imageBorder: true,
//       textAboveImage: false,
//     },
//     {
//       id: 2,
//       image: chalkBoard,
//       title: "Create Sentence:",
//       description: " Build Vocabulary",
//       textAboveImage: true,
//       textDesc: "Unlocks at",
//       classesText: "32 classes",
//     },
//     {
//       id: 3,
//       image: theater,
//       title: "Build creativity:",
//       description: "Creative Performance",
//       classes: 48,
//       activity: 24,
//       hasExtraContent: true,
//       textAboveImage: false,
//       imageBorder: true,
//     },
//     {
//       id: 4,
//       image: medal,
//       title: "Build Confidence",
//       description: "Become Public Speaker",
//       textAboveImage: true,
//       textDesc: "Unlocks if you",
//       classesText: "sign up for 90 classes",
//     },
//   ];

//   const journeyTitle = "Your Public Speaking Journey";
//   const journeyDescription =
//     "Unlock your potential with our structured learning path.";

//   const boxItems: JourneyBoxItem[] = [
//     {
//       image: speaker,
//       alt: "Speaker",
//       text: "Confident Speaker",
//       bgColorLight: "rgba(255,153,0,0.21)",
//       bgColorDark: "#FF9900",
//     },
//     {
//       image: logicBlock,
//       alt: "Logic Block",
//       text: "Logical & Critical Thinking",
//       bgColorLight: "rgba(220,155,80,0.21)",
//       bgColorDark: "#DC9B50",
//     },
//     {
//       image: handwriting,
//       alt: "Handwriting",
//       text: "Creative Writing",
//       bgColorLight: "rgba(252,90,90,0.21)",
//       bgColorDark: "#FC5A5A",
//     },
//     {
//       image: brain,
//       alt: "Brain",
//       text: "Creativity",
//       bgColorLight: "rgba(61,213,152,0.21)",
//       bgColorDark: "#3DD598",
//     },
//     {
//       image: reader,
//       alt: "Reader",
//       text: "Pro Reader",
//       bgColorLight: "rgba(20,222,235,0.21)",
//       bgColorDark: "#14DEEB",
//     },
//   ];
//   return (
//     <>
//       <Hero />
//       <Boxes
//         title="Why Public Speaking?"
//         description="Our activity-based curriculum helps kids understand the 'Why' behind public speaking..."
//         resultsText="What results can your child expect to achieve?"
//         enrollText="Enroll now and watch them shine in every conversation!"
//         items={boxItems}
//       />
//       <JourneyBoxes
//         title={journeyTitle}
//         description={journeyDescription}
//         boxes={boxes}
//       />
//       <Pricing {...pricingData} />
//     </>
//   );
// }
