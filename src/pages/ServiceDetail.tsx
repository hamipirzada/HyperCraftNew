import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();

  const serviceDetails = {
    'custom-software-development': {
      title: 'Custom Software Development',
      description: 'Transform your business with tailored software solutions built using cutting-edge technologies and industry best practices.',
      hero: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our custom software development services help businesses create unique, scalable applications that perfectly align with their specific requirements. We use modern technologies and agile methodologies to deliver high-quality solutions on time and within budget.',
      benefits: [
        'Tailored to your exact business needs',
        'Scalable architecture for future growth',
        'Modern, secure, and maintainable code',
        'Full ownership of your software',
        'Ongoing support and maintenance',
        'Integration with existing systems'
      ],
      process: [
        {
          step: '1',
          title: 'Discovery & Planning',
          description: 'We analyze your requirements, define project scope, and create a detailed development roadmap.'
        },
        {
          step: '2',
          title: 'Design & Architecture',
          description: 'Our team designs the user interface and system architecture for optimal performance and user experience.'
        },
        {
          step: '3',
          title: 'Development & Testing',
          description: 'We build your application using agile methodologies with continuous testing and quality assurance.'
        },
        {
          step: '4',
          title: 'Deployment & Support',
          description: 'We deploy your application and provide ongoing support, maintenance, and feature enhancements.'
        }
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Flutter', 'PostgreSQL', 'MongoDB', 'AWS'],
      caseStudy: {
        title: 'E-commerce Platform for RetailPro',
        description: 'Built a comprehensive e-commerce platform that increased online sales by 300% and improved customer satisfaction.',
        results: ['300% increase in online sales', '50% reduction in cart abandonment', '99.9% uptime achieved']
      }
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and optimize your infrastructure with our expert cloud services across AWS, Azure, and Google Cloud Platform.',
      hero: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our cloud solutions help businesses leverage the power of cloud computing to reduce costs, improve scalability, and enhance security. We provide end-to-end cloud services from migration to ongoing management.',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities',
        '24/7 monitoring and support',
        'Faster deployment and updates'
      ],
      process: [
        {
          step: '1',
          title: 'Cloud Assessment',
          description: 'We evaluate your current infrastructure and identify the best cloud strategy for your business.'
        },
        {
          step: '2',
          title: 'Migration Planning',
          description: 'Create a detailed migration plan with minimal downtime and risk mitigation strategies.'
        },
        {
          step: '3',
          title: 'Implementation',
          description: 'Execute the migration with careful monitoring and testing at each phase.'
        },
        {
          step: '4',
          title: 'Optimization',
          description: 'Continuously optimize your cloud infrastructure for performance and cost efficiency.'
        }
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Monitoring Tools'],
      caseStudy: {
        title: 'Cloud Migration for TechStart Solutions',
        description: 'Successfully migrated legacy infrastructure to AWS, resulting in significant cost savings and improved performance.',
        results: ['40% reduction in infrastructure costs', '99.9% uptime improvement', '50% faster deployment cycles']
      }
    },
    'ai-data-analytics': {
      title: 'AI & Data Analytics',
      description: 'Unlock the power of your data with advanced AI and analytics solutions that drive intelligent business decisions.',
      hero: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Transform your business with AI-powered insights and data analytics. We help organizations harness their data to make informed decisions, automate processes, and gain competitive advantages.',
      benefits: [
        'Data-driven decision making',
        'Automated business processes',
        'Predictive analytics capabilities',
        'Real-time insights and reporting',
        'Improved operational efficiency',
        'Competitive market advantage'
      ],
      process: [
        {
          step: '1',
          title: 'Data Assessment',
          description: 'Analyze your data sources, quality, and identify opportunities for AI implementation.'
        },
        {
          step: '2',
          title: 'Solution Design',
          description: 'Design AI models and analytics frameworks tailored to your business objectives.'
        },
        {
          step: '3',
          title: 'Development & Training',
          description: 'Build and train AI models using your data with continuous validation and testing.'
        },
        {
          step: '4',
          title: 'Deployment & Monitoring',
          description: 'Deploy solutions with ongoing monitoring and model optimization for best performance.'
        }
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Power BI', 'Tableau', 'Apache Spark', 'Elasticsearch', 'Machine Learning'],
      caseStudy: {
        title: 'Predictive Analytics for EduTech Innovations',
        description: 'Implemented AI-powered student performance prediction system that improved learning outcomes by 60%.',
        results: ['60% improvement in student engagement', '35% reduction in dropout rates', '90% prediction accuracy']
      }
    },
    'it-consulting': {
      title: 'IT Consulting & Digital Strategy',
      description: 'Strategic guidance to align your technology investments with business objectives and drive digital transformation.',
      hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our IT consulting services help businesses navigate the complex technology landscape and make informed decisions about their digital transformation journey.',
      benefits: [
        'Strategic technology roadmap',
        'Cost optimization strategies',
        'Risk assessment and mitigation',
        'Vendor selection and management',
        'Change management support',
        'Performance optimization'
      ],
      process: [
        {
          step: '1',
          title: 'Current State Analysis',
          description: 'Comprehensive assessment of your existing technology infrastructure and processes.'
        },
        {
          step: '2',
          title: 'Strategy Development',
          description: 'Create a tailored digital strategy aligned with your business goals and objectives.'
        },
        {
          step: '3',
          title: 'Implementation Planning',
          description: 'Develop detailed implementation plans with timelines, resources, and milestones.'
        },
        {
          step: '4',
          title: 'Ongoing Support',
          description: 'Provide continuous guidance and support throughout your digital transformation journey.'
        }
      ],
      technologies: ['ITIL', 'Agile', 'Scrum', 'Lean', 'Six Sigma', 'Enterprise Architecture', 'Business Analysis', 'Project Management'],
      caseStudy: {
        title: 'Digital Transformation for Manufacturing Corp',
        description: 'Led comprehensive digital transformation initiative resulting in improved efficiency and reduced costs.',
        results: ['30% improvement in operational efficiency', '25% reduction in operational costs', '50% faster decision making']
      }
    },
    'cybersecurity': {
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats and ensure compliance.',
      hero: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our cybersecurity services provide comprehensive protection for your business against evolving cyber threats while ensuring compliance with industry standards.',
      benefits: [
        'Advanced threat protection',
        'Compliance with regulations',
        '24/7 security monitoring',
        'Incident response planning',
        'Employee security training',
        'Regular security assessments'
      ],
      process: [
        {
          step: '1',
          title: 'Security Assessment',
          description: 'Comprehensive evaluation of your current security posture and vulnerabilities.'
        },
        {
          step: '2',
          title: 'Security Strategy',
          description: 'Develop a tailored security strategy based on your risk profile and compliance requirements.'
        },
        {
          step: '3',
          title: 'Implementation',
          description: 'Deploy security solutions and controls to protect your infrastructure and data.'
        },
        {
          step: '4',
          title: 'Monitoring & Response',
          description: 'Continuous monitoring and rapid response to security incidents and threats.'
        }
      ],
      technologies: ['SIEM', 'Firewall', 'VPN', 'SSL/TLS', 'Multi-factor Auth', 'Endpoint Protection', 'Threat Intelligence', 'Security Analytics'],
      caseStudy: {
        title: 'Security Implementation for Financial Services',
        description: 'Implemented comprehensive security framework for financial services company ensuring regulatory compliance.',
        results: ['100% compliance achievement', '99.9% threat prevention rate', '50% reduction in security incidents']
      }
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive, engaging experiences across all digital touchpoints.',
      hero: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our UI/UX design services focus on creating exceptional user experiences that drive engagement, conversion, and customer satisfaction.',
      benefits: [
        'User-centered design approach',
        'Improved user engagement',
        'Higher conversion rates',
        'Consistent brand experience',
        'Accessibility compliance',
        'Mobile-first design'
      ],
      process: [
        {
          step: '1',
          title: 'User Research',
          description: 'Conduct comprehensive user research to understand your target audience and their needs.'
        },
        {
          step: '2',
          title: 'Design Strategy',
          description: 'Develop design strategy and create wireframes and prototypes for validation.'
        },
        {
          step: '3',
          title: 'Visual Design',
          description: 'Create beautiful, functional designs that align with your brand and user expectations.'
        },
        {
          step: '4',
          title: 'Testing & Iteration',
          description: 'Test designs with real users and iterate based on feedback and analytics.'
        }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Zeplin', 'Miro'],
      caseStudy: {
        title: 'E-commerce Redesign for Fashion Brand',
        description: 'Complete redesign of e-commerce platform resulting in improved user experience and sales.',
        results: ['40% increase in conversion rate', '60% reduction in bounce rate', '35% increase in average order value']
      }
    },
    'managed-it-services': {
      title: 'Managed IT Services',
      description: '24/7 IT support and management to keep your systems running smoothly while you focus on your core business.',
      hero: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our managed IT services provide comprehensive support and management of your IT infrastructure, allowing you to focus on your core business activities.',
      benefits: [
        '24/7 monitoring and support',
        'Proactive maintenance',
        'Reduced IT costs',
        'Improved system reliability',
        'Expert technical support',
        'Scalable solutions'
      ],
      process: [
        {
          step: '1',
          title: 'Assessment & Onboarding',
          description: 'Comprehensive assessment of your IT infrastructure and smooth onboarding process.'
        },
        {
          step: '2',
          title: 'Monitoring Setup',
          description: 'Deploy monitoring tools and establish baseline performance metrics.'
        },
        {
          step: '3',
          title: 'Proactive Management',
          description: 'Continuous monitoring, maintenance, and optimization of your IT systems.'
        },
        {
          step: '4',
          title: 'Support & Reporting',
          description: 'Provide ongoing support and regular reporting on system performance and health.'
        }
      ],
      technologies: ['ITSM', 'Remote Monitoring', 'Ticketing Systems', 'Asset Management', 'Backup Solutions', 'Network Management', 'Security Tools', 'Cloud Management'],
      caseStudy: {
        title: 'IT Management for Growing Startup',
        description: 'Provided comprehensive IT management services enabling startup to scale without IT concerns.',
        results: ['99.9% system uptime', '50% reduction in IT costs', '24/7 support coverage']
      }
    },
    'odoo-integration': {
      title: 'Odoo Integration & Customization',
      description: 'Seamlessly implement, customize, and optimize Odoo ERP to streamline your business processes.',
      hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our Odoo services help businesses implement and customize this powerful ERP system to streamline operations and improve efficiency.',
      benefits: [
        'Integrated business processes',
        'Customized to your needs',
        'Improved operational efficiency',
        'Real-time business insights',
        'Scalable solution',
        'Cost-effective ERP'
      ],
      process: [
        {
          step: '1',
          title: 'Requirements Analysis',
          description: 'Analyze your business processes and requirements for Odoo implementation.'
        },
        {
          step: '2',
          title: 'System Configuration',
          description: 'Configure Odoo modules and customize them to match your business processes.'
        },
        {
          step: '3',
          title: 'Data Migration',
          description: 'Migrate your existing data to Odoo with data validation and testing.'
        },
        {
          step: '4',
          title: 'Training & Support',
          description: 'Provide comprehensive training and ongoing support for your team.'
        }
      ],
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript', 'QWeb', 'OWL Framework', 'REST API'],
      caseStudy: {
        title: 'ERP Implementation for Manufacturing Company',
        description: 'Complete Odoo ERP implementation streamlining manufacturing and inventory processes.',
        results: ['40% improvement in inventory accuracy', '30% reduction in order processing time', '25% increase in productivity']
      }
    },
    'salesforce-services': {
      title: 'Salesforce Services',
      description: 'Maximize your customer relationships and sales pipeline with tailored Salesforce solutions.',
      hero: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: 'Our Salesforce services help businesses leverage the world\'s leading CRM platform to improve sales performance and customer relationships.',
      benefits: [
        'Improved sales performance',
        'Better customer relationships',
        'Automated sales processes',
        'Advanced analytics and reporting',
        'Mobile accessibility',
        'Scalable platform'
      ],
      process: [
        {
          step: '1',
          title: 'CRM Assessment',
          description: 'Evaluate your current CRM processes and identify Salesforce implementation opportunities.'
        },
        {
          step: '2',
          title: 'Configuration & Customization',
          description: 'Configure Salesforce to match your sales processes and customize as needed.'
        },
        {
          step: '3',
          title: 'Integration & Migration',
          description: 'Integrate with existing systems and migrate your customer data to Salesforce.'
        },
        {
          step: '4',
          title: 'Training & Optimization',
          description: 'Train your team and continuously optimize your Salesforce implementation.'
        }
      ],
      technologies: ['Salesforce', 'Apex', 'Lightning', 'SOQL', 'REST API', 'Visualforce', 'Process Builder', 'Flow'],
      caseStudy: {
        title: 'Sales Automation for Tech Company',
        description: 'Implemented comprehensive Salesforce solution improving sales team productivity and customer management.',
        results: ['35% increase in sales productivity', '50% improvement in lead conversion', '60% faster quote generation']
      }
    }
  };

  const service = serviceDetails[serviceSlug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatedSection animation="fadeInUp">
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-80">
              <img
                src={service.hero}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                  <p className="text-xl max-w-2xl">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Overview */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {service.overview}
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1">
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Process */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Technologies */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Case Study */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Success Story</h2>
              <h3 className="text-2xl font-semibold mb-4">{service.caseStudy.title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">{service.caseStudy.description}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {service.caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Star className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transform hover:scale-105 transition-all duration-200"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServiceDetail;