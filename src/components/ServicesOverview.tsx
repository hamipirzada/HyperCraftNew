import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Palette, 
  Settings, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored applications built with modern technologies to meet your unique business requirements.",
      color: "from-blue-500 to-cyan-500",
      link: "/services/custom-software-development"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Expert cloud migration and management services across AWS, Azure, and GCP platforms.",
      color: "from-indigo-500 to-purple-500",
      link: "/services/cloud-solutions"
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description: "Harness artificial intelligence and data analytics to gain actionable business insights.",
      color: "from-purple-500 to-pink-500",
      link: "/services/ai-data-analytics"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets from evolving threats.",
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging digital experiences.",
      color: "from-green-500 to-emerald-500",
      link: "/services/ui-ux-design"
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      description: "24/7 IT support and management to keep your systems running smoothly.",
      color: "from-yellow-500 to-orange-500",
      link: "/services/managed-it-services"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From custom development to cloud migration, we deliver cutting-edge technology solutions 
              that drive business growth and digital transformation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
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
                      <div className={`bg-gradient-to-r ${service.color} rounded-xl p-3 mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-purple-600 transition-colors transform hover:translate-x-2 group-hover:translate-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our comprehensive IT services can help you achieve your digital goals 
                and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block shadow-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesOverview;