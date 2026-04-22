import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowToBook from "@/components/HowToBook";
import Steps from "@/components/Steps";
import Programs from "@/components/Programs";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import DemoForm from "@/components/DemoForm";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SuperCubs from "@/components/SuperCubs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SectionDivider variant="line" />
    <AnimatedSection>
      <HowToBook />
    </AnimatedSection>
    <SectionDivider variant="dots" />
    <AnimatedSection>
      <Steps />
    </AnimatedSection>
    <SectionDivider variant="wave" />
    <AnimatedSection>
      <Programs />
    </AnimatedSection>
    <SectionDivider variant="line" />
    <AnimatedSection>
      <AboutUs />
    </AnimatedSection>
    <SectionDivider variant="dots" />
    <AnimatedSection>
      <Testimonials />
    </AnimatedSection>
    <SectionDivider variant="line" />
    <AnimatedSection>
      <DemoForm />
    </AnimatedSection>
    <SectionDivider variant="wave" />
    <AnimatedSection>
      <SuperCubs />
    </AnimatedSection>
    <SectionDivider variant="dots" />
    <AnimatedSection>
      <FAQ />
    </AnimatedSection>
    <AnimatedSection>
      <CTASection />
    </AnimatedSection>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
