import React, { useState, useEffect } from 'react';
import { Users, MapPin, Cpu, Award, ChevronRight, Globe, Clock, Coffee, Heart, Zap } from 'lucide-react';

export default function ContactUs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden">
      {/* Navbar */}
      {/* <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className={`${isScrolled ? 'text-blue-600' : 'text-white'} mr-2`} size={28} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>TripGenius AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>
          <button className={`${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'} px-4 py-2 rounded-full font-medium transition-colors`}>
            Get Started
          </button>
        </div>
      </nav> */}

      {/* Hero Section with Parallax Effect */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-400 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-400 opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-blue-300 opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">About TripGenius AI</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Revolutionizing travel planning with artificial intelligence to create personalized, unforgettable experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-8 py-3 rounded-full font-bold flex items-center">
              Take a Tour <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors px-8 py-3 rounded-full font-bold">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section with Animation */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative mb-6">
              <div className="absolute -left-3 top-0 h-12 w-2 bg-blue-600 rounded-full"></div>
              <h2 className="text-4xl font-bold mb-2 text-gray-800">Our Story</h2>
              <p className="text-blue-600 font-medium">The journey that inspired us</p>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              TripGenius AI was founded in 2023 by Sai and Satish, two travel enthusiasts and AI experts who recognized a gap in the market: travel planning was still largely manual, time-consuming, and often resulted in cookie-cutter experiences.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our mission is to democratize access to personalized travel experiences by leveraging the power of artificial intelligence. We believe that everyone deserves a journey tailored precisely to their preferences, budget, and interests.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="italic text-blue-800">
                "We envision a world where planning your dream vacation is as effortless as having a conversation with a friend who knows you perfectly."
              </p>
              <p className="text-blue-600 font-medium mt-2">— Sai & Satish, Co-Founders</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-30 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:translate-y-[-5px] transition-transform border border-gray-100">
                    <Users className="text-blue-600 mb-3" size={32} />
                    <h3 className="font-bold text-xl text-gray-800 mb-1">25+ Team Members</h3>
                    <p className="text-gray-500">Dedicated experts</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:translate-y-[-5px] transition-transform border border-gray-100">
                    <MapPin className="text-purple-600 mb-3" size={32} />
                    <h3 className="font-bold text-xl text-gray-800 mb-1">120+ Countries</h3>
                    <p className="text-gray-500">Global coverage</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:translate-y-[-5px] transition-transform border border-gray-100">
                    <Cpu className="text-pink-600 mb-3" size={32} />
                    <h3 className="font-bold text-xl text-gray-800 mb-1">AI-Powered</h3>
                    <p className="text-gray-500">Smart algorithms</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:translate-y-[-5px] transition-transform border border-gray-100">
                    <Award className="text-green-600 mb-3" size={32} />
                    <h3 className="font-bold text-xl text-gray-800 mb-1">98% Satisfaction</h3>
                    <p className="text-gray-500">Happy travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works with Interactive Elements */}
      <div className="bg-gradient-to-b from-slate-50 to-slate-100 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How Our AI Technology Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our cutting-edge AI algorithms transform the way you plan your travels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Globe className="text-white" size={28} />,
                bgColor: "bg-blue-600",
                hoverColor: "group-hover:bg-blue-700",
                title: "Data Collection",
                description: "Our AI continuously analyzes millions of travel reviews, destination data, seasonal trends, and real-time availability from trusted sources worldwide."
              },
              {
                icon: <Cpu className="text-white" size={28} />,
                bgColor: "bg-purple-600",
                hoverColor: "group-hover:bg-purple-700",
                title: "AI Processing",
                description: "Using advanced machine learning algorithms, we match your preferences, budget, and travel style to create itineraries that feel handcrafted just for you."
              },
              {
                icon: <Clock className="text-white" size={28} />,
                bgColor: "bg-pink-600",
                hoverColor: "group-hover:bg-pink-700",
                title: "Real-Time Adaptation",
                description: "Your itinerary evolves in real-time based on changing conditions, availability, and your feedback to ensure the perfect travel experience."
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                <div className={`absolute top-0 left-6 -mt-6 w-14 h-14 ${item.bgColor} ${item.hoverColor} rounded-lg flex items-center justify-center shadow-lg transition-colors`}>
                  {item.icon}
                </div>
                <div className="pt-6 pb-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="mt-6 text-blue-600 font-medium flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">What Travelers Say</h2>
              <p className="text-gray-600 text-lg">Hear from people who've experienced the TripGenius difference</p>
            </div>
            <div className="relative h-64">
              {[
                {
                  text: "TripGenius AI revolutionized my vacation planning. The personalized itinerary suggested hidden gems I would never have found on my own. Absolutely worth it!",
                  author: "Sarah T., Adventure Traveler"
                },
                {
                  text: "As a business traveler, efficiency is key. TripGenius AI saves me hours of research and consistently delivers perfect itineraries tailored to my preferences.",
                  author: "Michael K., Executive"
                },
                {
                  text: "Planning our family vacation used to be stressful. TripGenius AI suggested activities that appealed to everyone, from our teenagers to grandparents!",
                  author: "Lisa M., Family Traveler"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out bg-white rounded-xl p-8 border border-gray-100 shadow-lg ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                >
                  <div className="text-blue-600 mb-3">★★★★★</div>
                  <p className="text-gray-700 italic text-lg mb-6">{testimonial.text}</p>
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section with Hover Effects */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Founders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The visionaries bringing AI-powered travel planning to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            {
              name: "Sai",
              role: "CEO & Co-Founder",
              bio: "A visionary technologist with extensive background in AI and a passion for exploring new destinations. Sai has led multiple tech startups before launching TripGenius AI to transform the travel planning experience.",
              color: "from-blue-400 to-blue-600"
            },
            {
              name: "Satish",
              role: "CTO & Co-Founder",
              bio: "An AI researcher and travel enthusiast who has pioneered the core algorithms behind TripGenius. With a PhD in Machine Learning, Satish combines technical expertise with his experience visiting over 50 countries worldwide.",
              color: "from-purple-400 to-purple-600"
            }
          ].map((person, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className={`h-8 bg-gradient-to-r ${person.color}`}></div>
                <div className="p-8 relative">
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <div className={`w-36 h-36 rounded-full p-1 bg-gradient-to-br ${person.color}`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <Users className="text-gray-400 group-hover:scale-110 transition-transform" size={60} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-16">
                    <h3 className="text-2xl font-bold mb-1 text-gray-800">{person.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                    <div className="mt-6 flex justify-center space-x-4">
                      {['Twitter', 'LinkedIn', 'Email'].map((social) => (
                        <a key={social} href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section with Icons */}
      <div className="bg-slate-100 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Zap className="text-blue-600" size={36} />,
                title: "Innovation",
                description: "We're constantly pushing the boundaries of what's possible in travel planning technology."
              },
              {
                icon: <Heart className="text-purple-600" size={36} />,
                title: "Personalization",
                description: "We believe every traveler deserves an experience tailored to their unique preferences."
              },
              {
                icon: <Globe className="text-green-600" size={36} />,
                title: "Sustainability",
                description: "We promote responsible travel that respects local cultures and environments."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full bg-purple-400 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-pink-400 opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Dream Trip?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience travel planning reimagined with the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors font-bold py-4 px-8 rounded-full inline-flex items-center justify-center">
              Get Started Now
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 transition-colors font-bold py-4 px-8 rounded-full inline-flex items-center justify-center">
              See How It Works
            </button>
          </div>
          <div className="mt-12 bg-white bg-opacity-10 rounded-xl p-6 max-w-lg mx-auto">
            <p className="font-medium mb-2">Try it risk-free</p>
            <p className="text-sm opacity-80">14-day money-back guarantee. No questions asked.</p>
          </div>
        </div>
      </div>

      {/* Footer with Better Layout */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Globe className="text-blue-400 mr-2" size={28} />
                <span className="font-bold text-xl">TripGenius AI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing travel with artificial intelligence for personalized, unforgettable experiences.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'News', 'How It Works', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                      <ChevronRight size={16} className="mr-2" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                      <ChevronRight size={16} className="mr-2" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Get Updates</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest features and travel tips.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 rounded-l-lg w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-3 rounded-r-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <hr className="border-gray-800 my-12" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} TripGenius AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}