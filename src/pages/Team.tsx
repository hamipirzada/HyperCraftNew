import React from 'react';
import { Linkedin, Mail, Award, Users, Code, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Team = () => {
  const teamMembers = [
    {
      name: 'Arshad Ahmad',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years of experience in technology and business strategy. Passionate about driving digital transformation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'arshad@hypercraft.in',
      specialties: ['Business Strategy', 'Digital Transformation', 'Leadership']
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      bio: 'Technology expert specializing in cloud architecture and AI solutions. Leads our technical innovation initiatives.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'priya@hypercraft.in',
      specialties: ['Cloud Architecture', 'AI/ML', 'System Design']
    },
    {
      name: 'Rajesh Kumar',
      position: 'Head of Development',
      bio: 'Full-stack developer with expertise in modern web technologies and agile methodologies. Ensures quality delivery.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'rajesh@hypercraft.in',
      specialties: ['Full-Stack Development', 'React', 'Node.js']
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Design',
      bio: 'Creative designer focused on user experience and interface design. Creates beautiful, functional digital experiences.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'sarah@hypercraft.in',
      specialties: ['UI/UX Design', 'User Research', 'Design Systems']
    },
    {
      name: 'Mohammed Ali',
      position: 'Cloud Solutions Architect',
      bio: 'Cloud expert with deep knowledge of AWS, Azure, and GCP. Designs scalable and secure cloud infrastructures.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'mohammed@hypercraft.in',
      specialties: ['AWS', 'Azure', 'DevOps']
    },
    {
      name: 'Anita Patel',
      position: 'Data Scientist',
      bio: 'AI and data analytics specialist helping businesses unlock insights from their data through machine learning.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'anita@hypercraft.in',
      specialties: ['Machine Learning', 'Data Analytics', 'Python']
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '15+',
      label: 'Team Members',
      description: 'Passionate professionals'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Certifications',
      description: 'Industry credentials'
    },
    {
      icon: Code,
      number: '100+',
      label: 'Projects Delivered',
      description: 'Successful implementations'
    },
    {
      icon: Lightbulb,
      number: '5+',
      label: 'Years Experience',
      description: 'Average team expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together years of experience in technology, 
              design, and business strategy to deliver exceptional results for our clients.
            </p>
          </div>
        </AnimatedSection>

        {/* Team Stats */}
        <AnimatedSection animation="fadeInUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
        </AnimatedSection>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 0.1}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 dark:border-gray-700 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Company Culture */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              At HyperCraft, we believe in fostering a collaborative environment where innovation thrives, 
              continuous learning is encouraged, and every team member's contribution is valued.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="opacity-90">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Collaborative Spirit</h3>
                <p className="opacity-90">We work together as one team, sharing knowledge and supporting each other's growth.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence Driven</h3>
                <p className="opacity-90">We strive for excellence in everything we do, continuously improving our skills and processes.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Join Our Team CTA */}
        <AnimatedSection animation="fadeInUp">
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Want to Join Our Team?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@hypercraft.in"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transform hover:scale-105 transition-all duration-200"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Team;