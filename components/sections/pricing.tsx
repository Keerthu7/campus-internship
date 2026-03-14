export default function PricingSection() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
          Internship Investment
        </h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-500">
              One-time fee
            </p>
            <p className="text-xs sm:text-sm text-gray-600 line-through">
              Original Price: ₹15,000
            </p>
          </div>
          
          <div className="text-center space-y-1.5 sm:space-y-2 py-4 sm:py-6 border-t border-b border-gray-800">
            <p className="text-xs sm:text-sm text-gray-400">Special Internship Fee</p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              ₹5,500
            </p>
          </div>
          
          <ul className="text-left space-y-2 sm:space-y-3 text-gray-300">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-semibold mt-0.5 flex-shrink-0">•</span>
              <span className="text-xs sm:text-sm">Complete access to all learning materials</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-semibold mt-0.5 flex-shrink-0">•</span>
              <span className="text-xs sm:text-sm">Industry mentorship and guidance</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-semibold mt-0.5 flex-shrink-0">•</span>
              <span className="text-xs sm:text-sm">Internship certificate upon completion</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-semibold mt-0.5 flex-shrink-0">•</span>
              <span className="text-xs sm:text-sm">Full-time job opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
