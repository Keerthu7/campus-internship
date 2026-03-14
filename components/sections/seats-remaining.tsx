import { Card } from '@/components/ui/card';

export default function SeatsRemaining({ seatsLeft }: { seatsLeft: number }) {
  return (
    <section className="px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            Seats Remaining
          </h2>
          
          <div className="space-y-3 sm:space-y-4 text-center">
            <p className="text-sm sm:text-base text-gray-400">Total Seats</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">30</p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center">
            <p className="text-sm sm:text-base text-gray-400">Seats Left</p>
            <p className={`text-4xl sm:text-5xl md:text-6xl font-bold ${seatsLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
              {seatsLeft}
            </p>
          </div>

          {seatsLeft <= 5 && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-sm sm:text-base text-red-400 font-semibold">
                ⚠️ Applications Closing Soon
              </p>
            </div>
          )}

          <p className="text-center text-xs sm:text-sm md:text-base text-gray-300">
            Limited Batch Size – Only 30 interns will be selected to ensure better mentorship and real project exposure.
          </p>

          {/* Progress Bar */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
              <div 
                className="bg-white h-1.5 sm:h-2 rounded-full transition-all duration-300"
                style={{ width: `${(seatsLeft / 30) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              {Math.round(((30 - seatsLeft) / 30) * 100)}% Seats Filled
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
