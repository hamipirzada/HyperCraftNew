import React from 'react';
import { ExternalLink, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'TechStart Solutions: Complete Digital Transformation',
      client: 'TechStart Solutions',
      industry: 'Technology Startup',
      challenge: 'Legacy systems hindering growth, manual processes causing inefficiencies, and lack of scalable infrastructure.',
      solution: 'Implemented cloud-first architecture, custom CRM system, and automated workflows using modern technologies.',
      results: [
        '300% increase in operational efficiency',
        '40% reduction in infrastructure costs',
        '99.9% system uptime achieved',
        '50% faster time-to-market for new features'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'HyperCraft transformed our entire business operations. The custom software solution they built saved us 40% in operational costs while improving our system performance dramatically.',
        author: 'Rajesh Kumar',
        position: 'CEO, TechStart Solutions'
      }
    },
    {
      id: 2,
      title: 'EduTech Innovations: AI-Powered Learning Platform',
      client: 'EduTech Innovations',
      industry: 'Education Technology',
      challenge: 'Low student engagement, difficulty tracking learning progress, and need for personalized learning experiences.',
      solution: 'Developed AI-powered learning platform with predictive analytics, personalized content delivery, and real-time progress tracking.',
      results: [
        '60% improvement in student engagement',
        '35% reduction in dropout rates',
        '90% prediction accuracy for learning outcomes',
        '10,000+ active users within 6 months'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'The AI and data analytics solution provided by HyperCraft gave us insights we never had before. Our student engagement increased by 60% and our platform now serves over 10,000 active users seamlessly.',
        author: 'Priya Sharma',
        position: 'CTO, EduTech Innovations'
      }
    },
    {
      id: 3,
      title: 'RetailPro: E-commerce Platform Optimization',
      client: 'RetailPro',
      industry: 'Retail & E-commerce',
      challenge: 'Outdated e-commerce platform, inventory management issues, and poor customer experience leading to high cart abandonment.',
      solution: 'Built modern e-commerce platform with integrated inventory management, Odoo ERP integration, and optimized user experience.',
      results: [
        '250% increase in online sales',
        '45% reduction in cart abandonment',
        '70% improvement in inventory accuracy',
        '30% increase in customer satisfaction'
      ],
      technologies: ['React', 'Node.js', 'Odoo', 'Stripe', 'Redis'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Their Odoo integration completely streamlined our inventory management and sales processes. What used to take hours now happens automatically. The ROI was evident within the first month.',
        author: 'Mohammed Ali',
        position: 'Founder, RetailPro'
      }
    },
    {
      id: 4,
      title: 'GlobalTrade Inc: Cybersecurity & Cloud Migration',
      client: 'GlobalTrade Inc',
      industry: 'International Trade',
      challenge: 'Security vulnerabilities, compliance requirements, and need for scalable cloud infrastructure for global operations.',
      solution: 'Implemented comprehensive cybersecurity framework, migrated to multi-cloud architecture, and established 24/7 monitoring.',
      results: [
        '100% compliance with international standards',
        '99.99% security incident prevention',
        '60% reduction in IT operational costs',
        '24/7 global system availability'
      ],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'SIEM', 'Terraform'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'HyperCraft\'s cybersecurity assessment and implementation protected us from potential threats we didn\'t even know existed. Their 24/7 managed IT services give us peace of mind to focus on growth.',
        author: 'Sarah Johnson',
        position: 'Operations Director, GlobalTrade Inc'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Success <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve digital transformation, 
              improve efficiency, and drive sustainable growth through innovative technology solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fadeInUp">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">200%</h3>
              <p className="text-gray-600 dark:text-gray-400">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</h3>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={study.id}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="mt-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                    <p className="text-lg italic mb-4">"{study.testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm opacity-90">{study.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CaseStudies;