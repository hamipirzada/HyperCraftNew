import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Palette, 
  Settings, 
  MessageSquare,
  Database,
  Users,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      slug: "custom-software-development",
      description: "Tailored applications built with modern technologies to meet your unique business requirements and scale with your growth.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"],
      technologies: ["React", "Node.js", "Python", "Java", "Flutter"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Expert cloud migration and management services across AWS, Azure, and GCP to optimize performance and reduce costs.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps", "Cost Optimization"],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      slug: "ai-data-analytics",
      description: "Harness the power of artificial intelligence and data analytics to gain actionable insights and automate processes.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
      technologies: ["Python", "TensorFlow", "Power BI", "Tableau", "Apache Spark"]
    },
    {
      icon: MessageSquare,
      title: "IT Consulting & Digital Strategy",
      slug: "it-consulting",
      description: "Strategic guidance to align your technology investments with business objectives and drive digital transformation.",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      technologies: ["ITIL", "Agile", "Scrum", "Lean", "Six Sigma"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      slug: "cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets from evolving threats and ensure compliance.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Security Training"],
      technologies: ["SIEM", "Firewall", "VPN", "SSL/TLS", "Multi-factor Auth"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "User-centered design solutions that create intuitive, engaging experiences across all digital touchpoints.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      slug: "managed-it-services",
      description: "24/7 IT support and management to keep your systems running smoothly while you focus on your core business.",
      features: ["24/7 Support", "System Monitoring", "Maintenance", "Help Desk"],
      technologies: ["ITSM", "Remote Monitoring", "Ticketing", "Asset Management"]
    },
    {
      icon: Database,
      title: "Odoo Integration & Customization",
      slug: "odoo-integration",
      description: "Seamlessly implement, customize, and optimize Odoo ERP to streamline your business processes, from CRM to accounting.",
      features: ["ERP Implementation", "Custom Modules", "Data Migration", "Training & Support"],
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript"]
    },
    {
      icon: Users,
      title: "Salesforce Services",
      slug: "salesforce-services",
      description: "Maximize your customer relationships and sales pipeline with tailored Salesforce solutions—from setup to custom integration.",
      features: ["CRM Setup", "Custom Development", "Integration", "User Training"],
      technologies: ["Salesforce", "Apex", "Lightning", "SOQL", "REST API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and 
              digital transformation journey. From custom development to cloud migration, 
              we've got you covered.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 0.1}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 dark:border-gray-700 group h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3 mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
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
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;