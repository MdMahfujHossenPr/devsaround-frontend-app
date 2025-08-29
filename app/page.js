import Banner from "../app/components/Banner";
import BrandSection from "../app/components/BrandSection";
import ServicesSection from "../app/components/ServicesSection";
import CaseStudySection from "../app/components/CaseStudySection";
import WorkingProcess from "../app/components/WorkingProcess";
import TeamSection from "../app/components/TeamSection";
import TestimonialSection from "../app/components/TestimonialSection";
import ContactSection from "../app/components/ContactSection";
import MakeThingsHappen from "./components/MakeThingsHappen";

export default function Home() {
  return (
    <div className="space-y-16 px-6">
      <Banner />
      <BrandSection />
      <ServicesSection />
      <MakeThingsHappen />
      <CaseStudySection />
      <WorkingProcess />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
