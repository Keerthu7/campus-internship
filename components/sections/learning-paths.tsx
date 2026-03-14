import { Card } from '@/components/ui/card';

const learningPaths = [
  {
    title: 'Full Stack Development',
    points: [
      'Frontend development concepts',
      'Backend APIs',
      'Database integration'
    ]
  },
  {
    title: 'Generative AI Integration',
    points: [
      'AI-powered applications',
      'Prompt engineering basics',
      'AI feature integration'
    ]
  },
  {
    title: 'Real Project Development',
    points: [
      'Work on live product modules',
      'Git-based collaboration',
      'Practical development workflow'
    ]
  }
];

export default function LearningPaths() {
  return (
    <section className="px-4 py-16 bg-black">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          What You Will Learn
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {learningPaths.map((path, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4 hover:border-gray-700 transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {path.title}
              </h3>
              
              <ul className="space-y-2 sm:space-y-3">
                {path.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
