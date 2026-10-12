import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import WhySection from "@/components/WhySection";
import CourseIntro from "@/components/CourseIntro";
import Benefits from "@/components/Benefits";
import CourseProgramme from "@/components/CourseProgramme";
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <WhySection />
        <CourseIntro />
        <Benefits />
        <CourseProgramme />
        <Audience />
        <HowItWorks />
        <Offer />
      </main>
      <Footer />
    </>
  );
}
