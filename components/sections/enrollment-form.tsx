'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function EnrollmentForm({ onSubmit }: { onSubmit: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    yearOfStudy: '',
    preferredDomain: '',
    experienceLevel: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit();
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        collegeName: '',
        yearOfStudy: '',
        preferredDomain: '',
        experienceLevel: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="enrollment-form" className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-1 sm:mb-2">
          Apply for the Internship
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-400 mb-6 sm:mb-8">
          Fill in your details below and let's start your journey
        </p>

        <Card className="bg-gray-950 border-gray-800 p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-3 sm:space-y-4 py-8 sm:py-12">
              <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">✓</div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Thank You for Applying!
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Our team will review your application and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 outline-none transition-colors"
                    placeholder="Your college/university"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Year of Study
                  </label>
                  <input
                    type="text"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 outline-none transition-colors"
                    placeholder="1st Year / 2nd Year / etc"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Preferred Domain
                  </label>
                  <select
                    name="preferredDomain"
                    value={formData.preferredDomain}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-gray-700 outline-none transition-colors"
                  >
                    <option value="">Select a domain</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="ai">AI / Generative AI</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-gray-700 outline-none transition-colors"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold text-sm sm:text-base py-2.5 sm:py-3"
              >
                Apply for Internship
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
