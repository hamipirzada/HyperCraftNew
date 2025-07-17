import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'digital-transformation-guide-2025',
      title: 'The Complete Guide to Digital Transformation in 2025',
      excerpt: 'Discover the latest trends, strategies, and technologies driving digital transformation across industries.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-15',
      category: 'Digital Strategy',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'ai-business-automation-trends',
      title: 'How AI is Revolutionizing Business Automation',
      excerpt: 'Explore the latest AI technologies and their impact on business process automation and efficiency.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-12',
      category: 'Artificial Intelligence',
      readTime: '6 min read',
      featured: false
    },
    {
      slug: 'cloud-migration-best-practices',
      title: 'Cloud Migration Best Practices for SMEs',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud with minimal disruption.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-10',
      category: 'Cloud Computing',
      readTime: '10 min read',
      featured: false
    },
    {
      slug: 'cybersecurity-threats-2025',
      title: 'Top Cybersecurity Threats to Watch in 2025',
      excerpt: 'Stay ahead of emerging cyber threats and learn how to protect your business in the digital age.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-08',
      category: 'Cybersecurity',
      readTime: '7 min read',
      featured: false
    },
    {
      slug: 'odoo-vs-salesforce-comparison',
      title: 'Odoo vs Salesforce: Which ERP is Right for Your Business?',
      excerpt: 'Compare the features, costs, and benefits of Odoo and Salesforce to make the right choice for your business.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-05',
      category: 'ERP Systems',
      readTime: '12 min read',
      featured: false
    },
    {
      slug: 'ui-ux-design-trends-2025',
      title: 'UI/UX Design Trends That Will Dominate 2025',
      excerpt: 'Discover the latest design trends and how they can improve user experience and business outcomes.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'HyperCraft Team',
      date: '2025-01-03',
      category: 'Design',
      readTime: '5 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Digital Strategy', 'Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'ERP Systems', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              HyperCraft <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in technology, 
              digital transformation, and business innovation.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        {featuredPost && (
          <AnimatedSection animation="fadeInUp">
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Category Filter */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <AnimatedSection
              key={post.slug}
              animation="scaleIn"
              delay={index * 0.1}
            >
              <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 dark:border-gray-700 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter Signup */}
        <AnimatedSection animation="fadeInUp">
          <div className="mt-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on technology and digital transformation.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Blog;