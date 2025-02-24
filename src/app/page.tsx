import BookDemo from "@/components/BookDemo";
import EnrollNow from "@/components/EnrollNow";
import FAQComponent from "@/components/FAQComponent";
import Financial from "@/components/Financial";
import Hero from "@/components/Hero";
import OurCourses from "@/components/OurCourses";
import ParentChoice from "@/components/ParentChoice";
import SuperCub from "@/components/SuperCub";
import ThirdSection from "@/components/ThirdSection";
import WhytoChoose from "@/components/WhytoChose";

export const metadata = {
  title: "StudyCubs | Learn Smarter",
  description:
    "Studycubs offers personalized online learning for grades 3-10 in subjects like public speaking, English, and creative writing.",
  keywords:
    "online learning, personalized classes, public speaking, English grammar, creative writing, study platform, kids education, grade 3 to 10, personal growth, confidence building",
  og: {
    title: "StudyCubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyCubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  social: {
    instagram: "https://www.instagram.com/studycubs/",
    twitter: "https://twitter.com/studycubs",
  },
  // Add favicon
  favicon: "/favicon.ico",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <EnrollNow />
      <ThirdSection />
      <Financial />
      <BookDemo />
      <SuperCub />
      <ParentChoice />
      <OurCourses />
      <WhytoChoose />
      <FAQComponent />
    </div>
  );
}
