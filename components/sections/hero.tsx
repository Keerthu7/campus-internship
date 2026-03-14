import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection({ seatsLeft }: { seatsLeft: number }) {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance">
            Build Real Software Products with Generative AI
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-400">
            Full Stack Development Internship Program
          </p>
        </div>

        {/* Highlight Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Badge variant="outline" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-gray-700 text-gray-300">
            Hybrid Mode
          </Badge>
          <Badge variant="outline" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-gray-700 text-gray-300">
            Only 30 Seats
          </Badge>
          <Badge variant="outline" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-gray-700 text-gray-300">
            Real Projects
          </Badge>
          <Badge variant="outline" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-gray-700 text-gray-300">
            Mentorship
          </Badge>
        </div>



        {/* CTA Button */}
        <div>
          <Button 
            className="bg-white text-black hover:bg-gray-200 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
