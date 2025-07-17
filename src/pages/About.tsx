import React from 'react';
import { Users, Target, Award, MapPin, Calendar, Globe, Heart, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">HyperCraft</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Founded in 2023 and headquartered in the beautiful valley of Srinagar, we're a dynamic IT solutions company 
              dedicated to empowering businesses through innovative technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                HyperCraft was born from a vision to bridge the digital divide and empower businesses 
                with cutting-edge technology solutions. Based in the beautiful valley of Kashmir, 
                we bring global expertise to local and international markets.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Our team of passionate technologists specializes in custom software development, 
                cloud solutions, AI analytics, and enterprise integrations. We believe in building 
                long-term partnerships that drive sustainable growth.
              </p>
              
              <div className="flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
                <MapPin className="h-6 w-6" />
                <span className="font-semibold text-lg">Srinagar, Jammu and Kashmir 193201</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Company Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Calendar className="h-8 w-8 mb-3" />
                    <h4 className="font-semibold mb-2">Founded</h4>
                    <p className="text-sm opacity-90">2023</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Users className="h-8 w-8 mb-3" />
                    <h4 className="font-semibold mb-2">Team Size</h4>
                    <p className="text-sm opacity-90">10+ Experts</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Globe className="h-8 w-8 mb-3" />
                    <h4 className="font-semibold mb-2">Global Reach</h4>
                    <p className="text-sm opacity-90">India & Beyond</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Award className="h-8 w-8 mb-3" />
                    <h4 className="font-semibold mb-2">Projects</h4>
                    <p className="text-sm opacity-90">100+ Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <AnimatedSection animation="scaleIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                To empower businesses of all sizes with innovative, scalable, and secure 
                technology solutions that drive digital transformation and sustainable growth. 
                We strive to be the catalyst that helps organizations thrive in the digital age.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                To be the leading technology partner for businesses seeking to thrive in 
                the digital age, known for our innovation, reliability, and exceptional service. 
                We envision a future where technology seamlessly enhances human potential.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection animation="fadeInUp">
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Embracing cutting-edge technologies and creative solutions to solve complex business challenges 
                  and drive meaningful progress.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Integrity</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Building trust through transparency, ethical practices, and honest communication 
                  in every client relationship and business decision.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Delivering superior quality in every solution we create, continuously improving 
                  our skills and exceeding client expectations.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose HyperCraft?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Skilled professionals with diverse expertise across modern technologies and industry best practices.'
            },
            {
              icon: Target,
              title: 'Client-Focused',
              description: 'Tailored solutions designed specifically for your business needs and growth objectives.'
            },
            {
              icon: Award,
              title: 'Quality First',
              description: 'Unwavering commitment to excellence in every project, from conception to delivery.'
            },
            {
              icon: Globe,
              title: 'Global Reach',
              description: 'Serving clients across India and internationally with 24/7 support and communication.'
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
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
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;