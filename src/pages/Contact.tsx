import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe, MessageCircle, Video, Calendar, User } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [selectedMeetingType, setSelectedMeetingType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    message: formData.message
  };

  try {
    const result = await emailjs.send(
      'service_8h0ybp4',     // e.g., 'gmail_service'
      'template_wlrhzod',    // e.g., 'contact_form'
      templateParams,
      'gQAGzkreAAN4vTWQL'      // e.g., 'XyzABC123'
    );
    if (result.status === 200) {
    alert('Message sent successfully!');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again later.');
  }

    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  

  const handleMeetingBooking = (meetingType: string) => {
    setSelectedMeetingType(meetingType);

    if (meetingType === 'Phone Call') {
      // Initiate phone call
      window.location.href = 'tel:+919622286781';
    } else {
      alert(`Booking ${meetingType}... You'll receive a confirmation email with meeting details within 5 minutes.`);
    }
  };

  const services = [
    'Custom Software Development',
    'Cloud Solutions',
    'AI & Data Analytics',
    'IT Consulting',
    'Cybersecurity',
    'UI/UX Design',
    'Managed IT Services',
    'Odoo Integration',
    'Salesforce Services'
  ];

  const meetingTypes = [
    {
      id: 'video',
      icon: Video,
      title: 'Video Consultation',
      description: 'Discuss your project requirements via video call',
      duration: '30 minutes',
      color: 'from-blue-500 to-cyan-500',
      disabled: true

    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Call',
      description: 'Quick phone consultation for initial discussion',
      duration: '20 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'in-person',
      icon: User,
      title: 'In-Person Meeting',
      description: 'Meet at our Srinagar office for detailed discussion',
      duration: '45 minutes',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss your project and explore
              how we can help you achieve your digital goals with innovative technology solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Meeting Scheduler */}
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Schedule a Meeting</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Choose your preferred meeting type and book a time that works for you.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {meetingTypes.map((meeting) => {
                  const IconComponent = meeting.icon;
                  return (
                    <div
                      key={meeting.id}
                      className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`bg-gradient-to-r ${meeting.color} rounded-xl p-3`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{meeting.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {meeting.duration}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">{meeting.description}</p>

                      {/* <button
                        onClick={() => handleMeetingBooking(meeting.title)}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Book Now
                      </button> */}
                      <button
                        onClick={() => !meeting.disabled && handleMeetingBooking(meeting.id)}
                        disabled={meeting.disabled}
                        className={`w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${meeting.disabled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transform hover:scale-105'
                          }`}
                      >
                        {meeting.disabled ? 'Coming Soon' : 'Book Now'}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> All meetings are conducted by our senior consultants. You'll receive a
                  confirmation email with meeting details within 5 minutes of booking.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h4>
                      <a
                        href="tel:+919622415387"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium text-lg transition-colors"
                      >
                        +91-9622415387
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Available 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                      <a
                        href="mailto:info@hypercraft.in"
                        className="text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium text-lg transition-colors"
                      >
                        info@hypercraft.in
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-pink-600 to-indigo-600 rounded-lg p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Srinagar, Jammu and Kashmir</p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">193201, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Business Hours */}
            <AnimatedSection animation="fadeInRight" delay={0.2}>
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span className="text-sm">All times in Indian Standard Time (IST)</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h3>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Srinagar, J&K</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* FAQ Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Frequently Asked Questions</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">How quickly can you start my project?</h4>
                <p className="text-gray-600 dark:text-gray-400">We typically begin new projects within 1-2 weeks after the initial consultation and project scoping.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Do you provide ongoing support?</h4>
                <p className="text-gray-600 dark:text-gray-400">Yes, we offer comprehensive support and maintenance packages to ensure your systems run smoothly.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What industries do you specialize in?</h4>
                <p className="text-gray-600 dark:text-gray-400">We work with SMEs, startups, e-commerce, healthcare, education, and manufacturing sectors.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Can you work with our existing systems?</h4>
                <p className="text-gray-600 dark:text-gray-400">Absolutely! We specialize in integrating new solutions with existing infrastructure and legacy systems.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;