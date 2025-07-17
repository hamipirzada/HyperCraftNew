import React from 'react';
import { Code2, Database, Cloud, Smartphone, Globe, Cpu, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TechnologyStack = () => {
  const categories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Database,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Python", "Java", "PHP", "Express", "Django"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-orange-500 to-red-500",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-indigo-500 to-purple-500",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic", "Xamarin"]
    },
    {
      icon: Cpu,
      title: "AI & ML",
      color: "from-yellow-500 to-orange-500",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "MLflow"]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-100/50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Technology Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage the latest and most reliable technologies to build scalable, 
              secure, and high-performance solutions for your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 0.1}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${category.color} rounded-xl p-3 mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {category.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-3 text-center transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group-hover:shadow-md"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom section */}
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See Your Preferred Technology?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always exploring new technologies and can adapt to your specific requirements. 
                Let's discuss your project needs and find the perfect technology stack.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechnologyStack;