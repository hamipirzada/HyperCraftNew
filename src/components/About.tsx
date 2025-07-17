import React from 'react';
import { Users, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About HyperCraft</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2023 and headquartered in Srinagar, we're a dynamic IT solutions company 
            dedicated to empowering businesses through innovative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              HyperCraft was born from a vision to bridge the digital divide and empower businesses 
              with cutting-edge technology solutions. Based in the beautiful valley of Kashmir, 
              we bring global expertise to local and international markets.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of passionate technologists specializes in custom software development, 
              cloud solutions, AI analytics, and enterprise integrations. We believe in building 
              long-term partnerships that drive sustainable growth.
            </p>
            
            <div className="flex items-center space-x-3 text-blue-600">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Srinagar, Jammu and Kashmir 193201</span>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-gray-600">
                  To empower businesses of all sizes with innovative, scalable, and secure 
                  technology solutions that drive digital transformation and sustainable growth.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                  <h4 className="text-xl font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-gray-600">
                  To be the leading technology partner for businesses seeking to thrive in 
                  the digital age, known for our innovation, reliability, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Values */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-600">Skilled professionals with diverse expertise</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Client-Focused</h4>
            <p className="text-gray-600">Tailored solutions for every business need</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Quality First</h4>
            <p className="text-gray-600">Commitment to excellence in every project</p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-yellow-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h4>
            <p className="text-gray-600">Serving clients across India and beyond</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Embracing cutting-edge technologies to solve complex challenges</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm">Building trust through transparency and ethical practices</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Delivering superior quality in every solution we create</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;