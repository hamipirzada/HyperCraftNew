import React from 'react';
import { Award, Users, Zap, Shield, Globe, Heart, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "100+ successful projects delivered with 99.9% client satisfaction rate",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with 5+ years average experience in cutting-edge technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Agile methodologies ensure faster time-to-market without compromising quality",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security measures and compliance with industry standards",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across India and internationally with 24/7 support",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Dedicated support and long-term partnerships that drive mutual success",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Why Choose HyperCraft</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technology Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference. 
              Here's what sets us apart in the competitive technology landscape.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 0.1}
              >
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`bg-gradient-to-r ${feature.color} rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience the HyperCraft Difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join the growing number of businesses that trust HyperCraft for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;