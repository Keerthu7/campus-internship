import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
          Kickstart Your Tech Career with Real Industry Experience
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
          Limited to 30 seats. Only ₹5,500 for comprehensive mentorship and real project experience.
        </p>

        <Button 
          className="bg-white text-black hover:bg-gray-200 font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-4 w-full sm:w-auto"
          onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Apply Now – Secure Your Seat
        </Button>

        <div className="border-t border-gray-900 pt-4 sm:pt-6 mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2024 Hynox Campus. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </section>
  );
}
