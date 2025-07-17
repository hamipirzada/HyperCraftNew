import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStart Solutions',
      company: 'Mumbai, India',
      rating: 5,
      text: 'HyperCraft transformed our entire business operations with their custom software solution. The team\'s expertise in cloud migration saved us 40% in operational costs while improving our system performance dramatically.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO, EduTech Innovations',
      company: 'Bangalore, India',
      rating: 5,
      text: 'The AI and data analytics solution provided by HyperCraft gave us insights we never had before. Our student engagement increased by 60% and our platform now serves over 10,000 active users seamlessly.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mohammed Ali',
      position: 'Founder, RetailPro',
      company: 'Delhi, India',
      rating: 5,
      text: 'Their Odoo integration completely streamlined our inventory management and sales processes. What used to take hours now happens automatically. The ROI was evident within the first month of implementation.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director, GlobalTrade Inc',
      company: 'Singapore',
      rating: 5,
      text: 'HyperCraft\'s cybersecurity assessment and implementation protected us from potential threats we didn\'t even know existed. Their 24/7 managed IT services give us peace of mind to focus on growth.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about working with HyperCraft.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <AnimatedSection animation="scaleIn">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <Quote className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              </div>

              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-indigo-600 dark:bg-indigo-400'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Trusted By Logos */}
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Trusted by innovative companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">TechStart</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">EduTech</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">RetailPro</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">GlobalTrade</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;