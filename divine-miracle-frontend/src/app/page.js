"use client";
import About from "@/components/About.jsx";
import CTASection from "@/components/CTASection.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Services from "@/components/Services.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import VideoTestimonials from "@/components/VideoTestimonials.jsx";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <VideoTestimonials />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
}
