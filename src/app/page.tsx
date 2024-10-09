"use client";

import FeaturCource from "@/components/FeaturCource";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestmonialCards from "@/components/TestmonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
      <HeroSection/>
      <FeaturCource/>
      <WhyChooseUs/>
      <TestmonialCards/>
      <UpcomingWebinars/>
      <Footer/>
      </main>
    </>
  );
}
