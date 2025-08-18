import React from 'react';
import { ArrowRight, Phone, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInUp">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Transforming Businesses Since 2023</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Empowering Businesses to{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Scale, Innovate, and Thrive
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Future-ready IT solutions, from cloud and AI to cybersecurity and managed services. 
                Transform your business with cutting-edge technology that drives real results.
              </p>
            </AnimatedSection>

            {/* Key Points */}
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 transform group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium transform group-hover:translate-x-2 transition-all duration-300">
                    Custom Software Development & Cloud Migration
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2 transform group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium transform group-hover:translate-x-2 transition-all duration-300">
                    AI & Data Analytics Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 transform group-hover:scale-110 transition-all duration-300">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium transform group-hover:translate-x-2 transition-all duration-300">
                    Odoo & Salesforce Integration Experts
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fadeInUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-all duration-300" />
                </a>
                <a
                  href="tel:+919622286781"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5 transform group-hover:rotate-12 transition-all duration-300" />
                  <span>+91-9622286781</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Company Info */}
            <AnimatedSection animation="fadeInUp" delay={0.5}>
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Based in Srinagar, J&K
                  </span> • Serving businesses across India and beyond
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - 3D Visual */}
          <AnimatedSection animation="fadeInRight" delay={0.3}>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-white/20 rounded-full p-2">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">What We Do</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
                      <div className="bg-white/20 rounded-lg p-2 w-fit mb-3 group-hover:rotate-12 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded"></div>
                      </div>
                      <h4 className="font-semibold mb-2">Software Development</h4>
                      <p className="text-sm opacity-90">Custom, scalable applications</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
                      <div className="bg-white/20 rounded-lg p-2 w-fit mb-3 group-hover:rotate-12 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded"></div>
                      </div>
                      <h4 className="font-semibold mb-2">Cloud Solutions</h4>
                      <p className="text-sm opacity-90">AWS, Azure, GCP experts</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
                      <div className="bg-white/20 rounded-lg p-2 w-fit mb-3 group-hover:rotate-12 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded"></div>
                      </div>
                      <h4 className="font-semibold mb-2">AI & Analytics</h4>
                      <p className="text-sm opacity-90">Data-driven insights</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
                      <div className="bg-white/20 rounded-lg p-2 w-fit mb-3 group-hover:rotate-12 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
                      </div>
                      <h4 className="font-semibold mb-2">ERP Integration</h4>
                      <p className="text-sm opacity-90">Odoo & Salesforce</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg transform hover:scale-125 hover:rotate-12 transition-all duration-300 animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 shadow-lg transform hover:scale-125 hover:-rotate-12 transition-all duration-300 animate-bounce delay-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full p-2 shadow-lg transform hover:scale-125 hover:rotate-45 transition-all duration-300 animate-pulse">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
