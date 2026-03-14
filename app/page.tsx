'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/hero';
import ProgramOverview from '@/components/sections/program-overview';
import LearningPaths from '@/components/sections/learning-paths';
import InternshipBenefits from '@/components/sections/internship-benefits';
import ProgramDetails from '@/components/sections/program-details';
import SeatsRemaining from '@/components/sections/seats-remaining';
import ProjectShowcase from '@/components/sections/project-showcase';
import PricingSection from '@/components/sections/pricing';
import EnrollmentForm from '@/components/sections/enrollment-form';
import FinalCTA from '@/components/sections/final-cta';
import Header from '@/components/header';

export default function InternshipPage() {
  const [seatsLeft, setSeatsLeft] = useState(12);

  return (
    <main className="bg-black text-white">
      <Header /> <br /><br />
      <HeroSection seatsLeft={seatsLeft} />
      
      <section className="px-4 py-16 bg-white text-black">
        <ProgramOverview />
      </section>
      
      <LearningPaths />
      
      <section className="px-4 py-16 bg-white text-black">
        <InternshipBenefits />
      </section>
      
      <ProgramDetails />
      
      <SeatsRemaining seatsLeft={seatsLeft} />
      
      <section className="px-4 py-16 bg-white text-black">
        <ProjectShowcase />
      </section>
      
      <PricingSection />
      
      <EnrollmentForm onSubmit={() => setSeatsLeft(Math.max(0, seatsLeft - 1))} />
      
      <FinalCTA />
    </main>
  );
}
