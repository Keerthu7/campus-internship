import { Card } from '@/components/ui/card';

const benefits = [
  {
    title: 'Certificate of Internship',
    description: 'Receive an official Hynox Campus Internship Certificate after successful completion.'
  },
  {
    title: 'Industry Mentorship',
    description: 'Be guided by experienced mentors working in real software development environments.'
  },
  {
    title: 'Real Project Experience',
    description: 'Contribute to real application features and understand product development processes.'
  },
  {
    title: 'Full-Time Opportunity',
    description: 'Top-performing interns may receive future full-time opportunities or extended roles.'
  }
];

export default function InternshipBenefits() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          Internship Benefits
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="bg-gray-100 border-gray-200 p-4 sm:p-6 space-y-3 sm:space-y-4 hover:border-gray-300 transition-colors text-black">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
