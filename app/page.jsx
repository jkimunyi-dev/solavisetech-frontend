import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstructorSection from "@/components/InstructionSection";
import Newsletter from "@/components/NewsLetter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/ui/FAQSection";
import WhyStudyWithUs from "@/components/WhyStudyWithUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="block">
      <Hero />
      <WhyStudyWithUs />
      <TestimonialsSection />
      <InstructorSection />
      <CTA />
      <Newsletter />
      <FAQSection />
      <Footer />
    </div>
  );
}
