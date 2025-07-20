import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Rocket, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Heart,
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Small & Medium Enterprises",
      description: "Scalable solutions that grow with your business, from startup to enterprise level.",
      benefits: ["Cost-effective solutions", "Rapid deployment", "Scalable architecture"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "MVP development and rapid prototyping to help you validate ideas and scale quickly.",
      benefits: ["Fast time-to-market", "Agile development", "Investor-ready solutions"],
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete digital commerce solutions with integrated payment, inventory, and CRM systems.",
      benefits: ["Multi-channel selling", "Payment integration", "Analytics & insights"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions including IoT integration, supply chain optimization, and quality management.",
      benefits: ["Process automation", "Quality control", "Supply chain visibility"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital learning platforms, student management systems, and educational technology solutions.",
      benefits: ["Learning management", "Student tracking", "Virtual classrooms"],
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for patient management, telemedicine, and healthcare analytics.",
      benefits: ["Patient management", "Compliance ready", "Secure data handling"],
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Industries We <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From startups to enterprises, we deliver tailored technology solutions 
              across diverse industries and business sectors, driving digital transformation 
              and sustainable growth.
            </p>
          </div>
        </AnimatedSection>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.1}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 dark:border-gray-700 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300 transform hover:translate-x-2 transition-all duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Digital Transformation Success</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                We help businesses across industries embrace digital transformation and achieve 
                measurable results through innovative technology solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Growth Acceleration</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Helping businesses scale operations and increase efficiency through technology innovation and strategic implementation.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Customer Satisfaction</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Delivering solutions that exceed expectations and drive business value through user-centered design and development.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovation Leadership</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Pioneering new approaches to solve complex business challenges with cutting-edge technology solutions.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the businesses that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Industries;