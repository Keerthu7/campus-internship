import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'AI-Powered Chatbot Integration',
    description: 'Build intelligent chatbot systems with natural language processing and AI models.'
  },
  {
    title: 'Smart Web Applications with AI',
    description: 'Create feature-rich web apps that leverage AI for enhanced user experiences.'
  },
  {
    title: 'Developer Productivity Tools',
    description: 'Develop tools that help teams work faster and smarter with AI assistance.'
  },
  {
    title: 'Real Product Feature Modules',
    description: 'Contribute to live production features used by thousands of users.'
  }
];

export default function ProjectShowcase() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-1.5 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Projects You May Work On
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            Experience real-world problems and contribute to live applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-gray-50 border-gray-200 p-4 sm:p-6 space-y-2 sm:space-y-3 group hover:border-gray-400 transition-colors text-black">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <span className="text-white font-bold text-xs sm:text-sm">{idx + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                {project.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 sm:p-6 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            This makes the internship feel <span className="font-bold text-black">real and practical</span>, not just training. You'll work on actual features that impact real users.
          </p>
        </div>
      </div>
    </section>
  );
}
