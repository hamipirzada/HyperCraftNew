import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from a CMS or API
  const blogPost = {
    title: 'The Complete Guide to Digital Transformation in 2025',
    content: `
      <p>Digital transformation has become more than just a buzzword—it's a necessity for businesses looking to thrive in today's rapidly evolving technological landscape. As we move through 2025, the pace of digital innovation continues to accelerate, presenting both opportunities and challenges for organizations across all industries.</p>

      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>

      <h2>Key Trends Shaping Digital Transformation in 2025</h2>
      
      <h3>1. Artificial Intelligence and Machine Learning</h3>
      <p>AI and ML are no longer futuristic concepts—they're practical tools that businesses are using to automate processes, gain insights from data, and improve customer experiences. From chatbots to predictive analytics, AI is becoming integral to business operations.</p>

      <h3>2. Cloud-First Strategies</h3>
      <p>The shift to cloud computing has accelerated, with businesses adopting cloud-first strategies to improve scalability, reduce costs, and enable remote work. Multi-cloud and hybrid cloud approaches are becoming the norm.</p>

      <h3>3. Low-Code/No-Code Platforms</h3>
      <p>These platforms are democratizing software development, allowing business users to create applications without extensive coding knowledge. This trend is accelerating digital transformation by reducing development time and costs.</p>

      <h2>Steps to Successful Digital Transformation</h2>
      
      <h3>1. Assess Your Current State</h3>
      <p>Before embarking on digital transformation, it's crucial to understand where you currently stand. Conduct a comprehensive audit of your existing technology, processes, and capabilities.</p>

      <h3>2. Define Your Vision and Strategy</h3>
      <p>Clearly articulate what digital transformation means for your organization. Set specific, measurable goals and create a roadmap for achieving them.</p>

      <h3>3. Invest in the Right Technology</h3>
      <p>Choose technologies that align with your business objectives and can scale with your growth. Consider factors like integration capabilities, security, and user experience.</p>

      <h3>4. Focus on Change Management</h3>
      <p>Digital transformation is as much about people as it is about technology. Invest in training, communication, and support to help your team adapt to new ways of working.</p>

      <h2>Common Challenges and How to Overcome Them</h2>
      
      <h3>Resistance to Change</h3>
      <p>Change can be difficult, but clear communication about the benefits and providing adequate training can help overcome resistance.</p>

      <h3>Budget Constraints</h3>
      <p>Start small with pilot projects that demonstrate value, then scale successful initiatives. Consider cloud-based solutions that reduce upfront costs.</p>

      <h3>Skills Gap</h3>
      <p>Invest in training existing employees and consider partnering with external experts to fill knowledge gaps.</p>

      <h2>Measuring Success</h2>
      <p>Define key performance indicators (KPIs) that align with your transformation goals. These might include improved efficiency, customer satisfaction scores, revenue growth, or cost savings.</p>

      <h2>Conclusion</h2>
      <p>Digital transformation is not a destination but a continuous journey. By staying focused on customer value, investing in the right technologies, and fostering a culture of innovation, businesses can successfully navigate the digital landscape and thrive in 2025 and beyond.</p>
    `,
    author: 'HyperCraft Team',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Digital Strategy',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Digital Transformation', 'Technology', 'Business Strategy', 'Innovation']
  };

  const relatedPosts = [
    {
      slug: 'ai-business-automation-trends',
      title: 'How AI is Revolutionizing Business Automation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      slug: 'cloud-migration-best-practices',
      title: 'Cloud Migration Best Practices for SMEs',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Image */}
        <AnimatedSection animation="fadeInUp">
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </AnimatedSection>

        {/* Article Header */}
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-medium">
                {blogPost.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              
              <button className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </header>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-li:text-gray-700 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with Digital Transformation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our experts can help you navigate your digital transformation journey.
            </p>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Book Free Consultation
            </Link>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
};

export default BlogPost;