import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Terms = () => {
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
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These terms govern your use of our services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>
        </AnimatedSection>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 rounded-lg p-2">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  By accessing and using HyperCraft's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Services Description */}
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Scale className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>HyperCraft provides IT consulting and development services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom software development</li>
                  <li>Cloud solutions and migration</li>
                  <li>AI and data analytics</li>
                  <li>Odoo and Salesforce integration</li>
                  <li>Cybersecurity services</li>
                  <li>UI/UX design</li>
                  <li>Managed IT services</li>
                </ul>
                <p>
                  All services are provided subject to these terms and any additional agreements we may enter into with you.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* User Responsibilities */}
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 rounded-lg p-2">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>
          </AnimatedSection>

          {/* Intellectual Property */}
          <AnimatedSection animation="fadeInUp" delay={0.5}>
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of HyperCraft and its licensors. 
                  The service is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual design elements without express written permission.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Limitation of Liability */}
          <AnimatedSection animation="fadeInUp" delay={0.6}>
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
              <div className="space-y-4">
                <p>
                  In no event shall HyperCraft, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from your use of the service.
                </p>
                <p>
                  Our total liability to you for all claims arising from or relating to these terms or our services shall not exceed 
                  the amount you paid us in the twelve months preceding the claim.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fadeInUp" delay={0.7}>
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
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

export default Terms;
