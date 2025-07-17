import React from 'react';
import { MapPin, Clock, Users, Heart, Lightbulb, Award, ArrowRight, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Srinagar, J&K / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.',
      requirements: ['React, Node.js, TypeScript', 'Cloud platforms (AWS/Azure)', 'Database design', 'API development'],
      posted: '2 days ago'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Srinagar, J&K / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead cloud migration projects and design scalable cloud architectures for our enterprise clients.',
      requirements: ['AWS/Azure/GCP expertise', 'DevOps practices', 'Infrastructure as Code', 'Security best practices'],
      posted: '1 week ago'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Srinagar, J&K / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create beautiful, user-centered designs for web and mobile applications that delight our clients.',
      requirements: ['Figma/Adobe XD', 'User research', 'Prototyping', 'Design systems'],
      posted: '3 days ago'
    },
    {
      title: 'Data Scientist',
      department: 'AI & Analytics',
      location: 'Srinagar, J&K / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop AI and machine learning solutions to help our clients gain insights from their data.',
      requirements: ['Python, R, SQL', 'Machine Learning', 'Data visualization', 'Statistical analysis'],
      posted: '5 days ago'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Srinagar, J&K',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive business growth by identifying new opportunities and building relationships with potential clients.',
      requirements: ['B2B sales experience', 'IT industry knowledge', 'Relationship building', 'Presentation skills'],
      posted: '1 week ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.',
      requirements: ['Docker, Kubernetes', 'CI/CD pipelines', 'Monitoring tools', 'Scripting languages'],
      posted: '4 days ago'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: Lightbulb,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and conference attendance.'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to maintain work-life balance.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths and leadership development programs.'
    }
  ];

  const [applicationForm, setApplicationForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    alert('Thank you for your application! We\'ll review it and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Culture */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-20">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Work at HyperCraft?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We believe in fostering innovation, encouraging growth, and creating an environment 
                where every team member can thrive and make meaningful contributions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="scaleIn"
                    delay={index * 0.1}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group">
                      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Open Positions */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Open Positions</h2>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInLeft"
                  delay={index * 0.1}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {position.title}
                          </h3>
                          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                            {position.department}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{position.experience}</span>
                          </div>
                          <span className="text-gray-500">Posted {position.posted}</span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{position.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Requirements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {position.requirements.map((req, reqIndex) => (
                              <span
                                key={reqIndex}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button
                          onClick={() => setApplicationForm({...applicationForm, position: position.title})}
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Application Form */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Apply for a Position</h2>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Position *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((position, index) => (
                      <option key={index} value={position.title}>
                        {position.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Please upload your resume in PDF, DOC, or DOCX format (max 5MB)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </AnimatedSection>

        {/* Contact HR */}
        <AnimatedSection animation="fadeInUp">
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't see the right position?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@hypercraft.in"
              className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span>careers@hypercraft.in</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Careers;