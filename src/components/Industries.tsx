import React from 'react';
import { 
  Building2, 
  Rocket, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Heart,
  TrendingUp,
  Users
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Small & Medium Enterprises",
      description: "Scalable solutions that grow with your business, from startup to enterprise level.",
      benefits: ["Cost-effective solutions", "Rapid deployment", "Scalable architecture"]
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "MVP development and rapid prototyping to help you validate ideas and scale quickly.",
      benefits: ["Fast time-to-market", "Agile development", "Investor-ready solutions"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete digital commerce solutions with integrated payment, inventory, and CRM systems.",
      benefits: ["Multi-channel selling", "Payment integration", "Analytics & insights"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions including IoT integration, supply chain optimization, and quality management.",
      benefits: ["Process automation", "Quality control", "Supply chain visibility"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital learning platforms, student management systems, and educational technology solutions.",
      benefits: ["Learning management", "Student tracking", "Virtual classrooms"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for patient management, telemedicine, and healthcare analytics.",
      benefits: ["Patient management", "Compliance ready", "Secure data handling"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, we deliver tailored technology solutions 
            across diverse industries and business sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Digital Transformation Success</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help businesses across industries embrace digital transformation and achieve 
              measurable results through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Growth Acceleration</h4>
              <p className="text-gray-600">Helping businesses scale operations and increase efficiency through technology</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Customer Satisfaction</h4>
              <p className="text-gray-600">Delivering solutions that exceed expectations and drive business value</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Innovation Leadership</h4>
              <p className="text-gray-600">Pioneering new approaches to solve complex business challenges</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to join our success stories?</p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;