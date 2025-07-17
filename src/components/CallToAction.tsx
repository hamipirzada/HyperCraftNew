import React from 'react';
import { ArrowRight, Phone, Mail, Calendar, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business
              <br />
              <span className="text-white/90">Today</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have already transformed their operations with HyperCraft's 
              innovative technology solutions. Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <AnimatedSection animation="scaleIn" delay={0.1}>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us Now</h3>
              <p className="text-white/80 mb-4">Speak directly with our experts</p>
              <a
                href="tel:+919622415387"
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                +91-9622415387
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-white/80 mb-4">Get detailed project information</p>
              <a
                href="mailto:info@hypercraft.in"
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                info@hypercraft.in
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.3}>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Book Consultation</h3>
              <p className="text-white/80 mb-4">Free 30-minute strategy session</p>
              <a
                href="/contact"
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                Schedule Now
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 shadow-2xl"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-all duration-300" />
              </a>
              
              <a
                href="/case-studies"
                className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
            
            <p className="text-white/70 mt-8 text-sm">
              ✓ Free consultation • ✓ No obligation • ✓ Expert advice • ✓ Custom solutions
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;