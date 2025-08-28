import Banner from "../app/components/Banner";
import BrandSection from "../app/components/BrandSection";
import ServicesSection from "../app/components/ServicesSection";
import CaseStudySection from "../app/components/CaseStudySection";
import WorkingProcess from "../app/components/WorkingProcess";
import TeamSection from "../app/components/TeamSection";
import TestimonialSection from "../app/components/TestimonialSection";
import ContactSection from "../app/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <BrandSection />
      <ServicesSection />
      <CaseStudySection />
      <WorkingProcess />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
