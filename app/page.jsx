import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="block">
      <Hero />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
}
