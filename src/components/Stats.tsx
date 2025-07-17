import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Happy Clients',
      description: 'Businesses transformed'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: TrendingUp,
      number: '200%',
      label: 'Average ROI',
      description: 'Client growth achieved'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Support Available',
      description: 'Always here to help'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our track record speaks for itself. Here's how we've helped businesses grow and thrive.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 0.1}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 dark:border-gray-700 group">
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;