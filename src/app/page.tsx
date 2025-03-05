import CalendarBooking from "@/components/CalendarBooking";
import CoursePublicSpeaking from "@/components/CoursePublicSpeaking";
import FAQComponent from "@/components/FAQComponent";
import CourseFinancialPlanning from "@/components/CourseFinancialPlanning";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuperCub from "@/components/SuperCub";
import CourseCoding from "@/components/CourseCoding";
import WhytoChoose from "@/components/WhytoChose";
import CourseCards from "@/components/coding/CourseCards";

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
      <CourseCards />
      <WhytoChoose />
      <FAQComponent />
    </div>
  );
}
