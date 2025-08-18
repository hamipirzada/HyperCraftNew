import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <AnimatedSection animation="fadeInUp">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-indigo-600 hover:text-purple-600 transform hover:scale-105 transition-all duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>
        </AnimatedSection>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 rounded-lg p-2">
                  <Eye className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out our contact forms or request consultations</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Use our website and services</li>
                </ul>
                <p>This may include your name, email address, phone number, company information, and project details.</p>
              </div>
            </section>
          </AnimatedSection>

          {/* How We Use Information */}
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 rounded-lg p-2">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and marketing communications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>
          </AnimatedSection>

          {/* Information Sharing */}
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 rounded-lg p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Security</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To trusted service providers who assist in operating our website and conducting business</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>
            </section>
          </AnimatedSection>

          {/* Your Rights */}
          <AnimatedSection animation="fadeInUp" delay={0.5}>
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Your Rights and Choices</h2>
              <div className="space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
                <p>To exercise these rights, please contact us at info@hypercraft.in</p>
              </div>
            </section>
          </AnimatedSection>

          {/* Cookies */}
          <AnimatedSection animation="fadeInUp" delay={0.6}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our website functionality</li>
                </ul>
                <p>You can control cookies through your browser settings, but some features may not function properly if cookies are disabled.</p>
              </div>
            </section>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fadeInUp" delay={0.7}>
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@hypercraft.in</p>
                  <p><strong>Phone:</strong> +91-9622286781</p>
                  <p><strong>Address:</strong> Srinagar, Jammu and Kashmir 193201, India</p>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
