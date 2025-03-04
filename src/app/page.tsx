import CalendarBooking from "@/components/CalendarBooking";
import CoursePublicSpeaking from "@/components/CoursePublicSpeaking";
import FAQComponent from "@/components/FAQComponent";
import CourseFinancialPlanning from "@/components/CourseFinancialPlanning";
import Hero from "@/components/Hero";
import OurCourses from "@/components/OurCourses";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuperCub from "@/components/SuperCub";
import CourseCoding from "@/components/CourseCoding";
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
  favicon: "/favicon.ico",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <CoursePublicSpeaking />
      <CourseCoding />
      <CourseFinancialPlanning />
      <CalendarBooking />
      <SuperCub />
      <TestimonialsSection />
      <OurCourses />
      <WhytoChoose />
      <FAQComponent />
    </div>
  );
}
