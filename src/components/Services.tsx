import React from 'react';
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Palette, 
  Settings, 
  MessageSquare,
  Database,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored applications built with modern technologies to meet your unique business requirements and scale with your growth.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Expert cloud migration and management services across AWS, Azure, and GCP to optimize performance and reduce costs.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps", "Cost Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description: "Harness the power of artificial intelligence and data analytics to gain actionable insights and automate processes.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Business Intelligence"]
    },
    {
      icon: MessageSquare,
      title: "IT Consulting & Digital Strategy",
      description: "Strategic guidance to align your technology investments with business objectives and drive digital transformation.",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets from evolving threats and ensure compliance.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Security Training"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging experiences across all digital touchpoints.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      description: "24/7 IT support and management to keep your systems running smoothly while you focus on your core business.",
      features: ["24/7 Support", "System Monitoring", "Maintenance", "Help Desk"]
    },
    {
      icon: Database,
      title: "Odoo Integration & Customization",
      description: "Seamlessly implement, customize, and optimize Odoo ERP to streamline your business processes, from CRM to accounting.",
      features: ["ERP Implementation", "Custom Modules", "Data Migration", "Training & Support"]
    },
    {
      icon: Users,
      title: "Salesforce Services",
      description: "Maximize your customer relationships and sales pipeline with tailored Salesforce solutions—from setup to custom integration.",
      features: ["CRM Setup", "Custom Development", "Integration", "User Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and 
            digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3 mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700 transform hover:translate-x-2 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="text-indigo-600 font-semibold hover:text-purple-600 transition-colors transform hover:translate-x-2 inline-block"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;