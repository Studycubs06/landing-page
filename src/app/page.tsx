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
