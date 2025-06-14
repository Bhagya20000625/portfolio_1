import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Zap, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Python', level: 85, icon: Code, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, icon: Globe, color: 'bg-yellow-500' },
    { name: 'React', level: 75, icon: Zap, color: 'bg-cyan-500' },
    { name: 'Data Analysis', level: 90, icon: Database, color: 'bg-green-500' },
    { name: 'HTML/CSS', level: 85, icon: Globe, color: 'bg-orange-500' },
    { name: 'Java', level: 70, icon: Code, color: 'bg-red-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Animate skill bars
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('animate-width');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-50" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate learner combining technical skills with creativity to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Information Technology</h4>
                  <p className="text-gray-600">University of Moratuwa• Expected 2026</p>
                  <p className="text-sm text-gray-500 mt-1">Focus: Data Science & Web Development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Relevant Coursework</h4>
                  <p className="text-gray-600 text-sm">Data Structures, Algorithms, Database Systems, Machine Learning, Human-Computer Interaction</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Target className="text-purple-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Career Goals</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm seeking internship opportunities where I can apply my technical skills in data science and web development 
                while learning from experienced professionals. My goal is to contribute to meaningful projects that make a positive impact.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon size={20} className="text-gray-600" />
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`skill-bar h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out opacity-0`}
                        style={{ 
                          width: '0%',
                          animationDelay: `${index * 100}ms`
                        }}
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'SQL', 'Pandas', 'NumPy', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;