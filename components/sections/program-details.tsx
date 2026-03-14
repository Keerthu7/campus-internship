export default function ProgramDetails() {
  const details = [
    { label: 'Mode', value: 'Hybrid (Online Learning + Practical Development)' },
    { label: 'Duration', value: '8–12 Weeks Internship Program' },
    { label: 'Seats Available', value: 'Only 30 Participants' }
  ];

  const eligibility = [
    'Software development',
    'AI technologies',
    'Web development'
  ];

  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          Program Details
        </h2>
        
        <div className="space-y-8">
          {details.map((detail, idx) => (
            <div key={idx} className="border-b border-gray-900 pb-4 sm:pb-6 last:border-b-0">
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest mb-2">
                {detail.label}
              </p>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <div className="bg-gray-950 border border-gray-800 p-6 sm:p-8 rounded-lg">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Who Should Apply?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
            Students interested in:
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {eligibility.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
