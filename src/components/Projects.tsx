import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Calculator, Gamepad, List, AppWindowIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Employee Leave Management System',
      description: '"A comprehensive and intuitive employee leave management system built with Python, featuring automated leave tracking, approval workflows, and a user-friendly dashboard for streamlined HR operations and employee self-service.',
      image: 'https://i.postimg.cc/qM2c5gFT/leave-management-software.webp',
      technologies: ['React', 'Spring Boot', 'MySQL', 'JavaScript', 'Java'],
      githubUrl: 'https://github.com/Bhagya20000625/Employee_Management_System',
      icon: AppWindowIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Number Game',
      description: 'A fun and interactive number guessing game developed using Python. Designed to enhance logical thinking with dynamic gameplay, user feedback.',
      image: 'https://i.postimg.cc/JnS398qS/5-Creative-Counting-Games-for-Kids.jpg',
      technologies: ['Python', 'Random', 'OS'],
      githubUrl: 'https://github.com/Bhagya20000625/Numbers_game',

      icon: Gamepad,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Python To-Do List',
      description: 'A simple yet powerful command-line To-Do List application built with Python. Enables users to manage tasks by adding, viewing, completing, and deleting items—ideal for staying organized and boosting productivity',
      image: 'https://i.postimg.cc/kMxtnWX2/1-A-u-FIy4-ORN-lw-Fi2-SRw-NQ-2x.png',
      technologies: ['Python', 'File Handling', 'OOP'],
      githubUrl: 'https://github.com/Bhagya20000625/To_Do_list',
      icon: List,
      color: 'from-green-500 to-blue-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Animate project cards
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-slide-up');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-white" aria-label="Projects section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="project-card bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 transform translate-y-8 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      onKeyDown={(e) => handleKeyDown(e, project.githubUrl)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <button
            onClick={() => window.open('https://github.com/Bhagya20000625', '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Visit GitHub profile for more projects"
          >
            <Github size={20} />
            <span>View More Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;