import React, { useState, useEffect } from 'react';
import { Mail, Facebook, Instagram, MessageCircle, ExternalLink, MapPin, Briefcase, Menu, X } from 'lucide-react';

export default function SaiyaheenWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/saiyaheen',
      icon: Facebook,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saiyaheeen',
      icon: Instagram,
      bgColor: 'bg-gradient-to-r from-pink-500 to-orange-400',
      hoverColor: 'hover:shadow-pink-500/50'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8801976688132',
      icon: MessageCircle,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      name: 'Chess.com',
      url: 'https://www.chess.com/member/saiyaheen',
      icon: null,
      emoji: '♟️',
      bgColor: 'bg-amber-600',
      hoverColor: 'hover:bg-amber-700'
    },
    {
      name: 'Email',
      url: 'mailto:saiyaheen0.4@gmail.com',
      icon: Mail,
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SMSS Grupe
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#connect" className="hover:text-blue-400 transition-colors">Connect</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#about" 
                className="block hover:text-blue-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#education" 
                className="block hover:text-blue-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Education
              </a>
              <a 
                href="#connect" 
                className="block hover:text-blue-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Badge */}
          <div className="inline-block">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm">
              <p className="text-sm text-blue-300 font-semibold">Entrepreneur • Trader • Digital Enthusiast</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              SM Shah <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Saiyaheen
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From the vibrant heart of Chittagong, Bangladesh
            </p>
          </div>

          {/* Bio Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
            <p className="text-slate-200 leading-relaxed text-lg">
              Welcome! I'm a passionate entrepreneur, trader, and digital enthusiast proudly hailing from the heart of Chittagong, Bangladesh.
            </p>
            <p className="text-slate-300 mt-6 leading-relaxed">
              Born and raised in one of Bangladesh's most vibrant and historically rich cities, I carry the spirit of Chittagong in everything I do — resilient, resourceful, and always forward-thinking.
            </p>
            <p className="text-slate-300 mt-6 leading-relaxed">
              By profession, I am an active trader and importer, building strong business connections across borders and bringing quality products and opportunities to my community. My work in international trade has sharpened my eye for opportunity, negotiation, and building lasting business relationships worldwide.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <p className="text-sm text-slate-400 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            <Briefcase className="w-10 h-10 text-blue-400" />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">My Passion</h3>
                <p className="text-slate-300">
                  International trade and commerce, connecting opportunities across borders and bringing value to communities.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">My Expertise</h3>
                <p className="text-slate-300">
                  Trading, importing, business development, and building lasting international business relationships.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Based In</h3>
                    <p className="text-slate-300">Chittagong, Bangladesh</p>
                    <p className="text-sm text-slate-400 mt-2">A vibrant port city with a rich history of commerce and enterprise</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-400/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Global Reach</h3>
                <p className="text-slate-300">
                  Building strong business connections across international borders with a focus on quality and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Education</h2>

          <div className="space-y-6">
            <div className="relative pl-8 pb-8 border-l-2 border-blue-400">
              <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-400 rounded-full"></div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">BAF Shaheen College Chittagong</h3>
                <p className="text-slate-400">Secondary & Higher Secondary Education</p>
              </div>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-purple-400">
              <div className="absolute -left-4 top-0 w-6 h-6 bg-purple-400 rounded-full"></div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">East Delta University</h3>
                <p className="text-slate-400">Chattogram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Reach out across any platform. I'm always open to discussing new opportunities, trade partnerships, and collaborations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 ${social.bgColor} ${social.hoverColor} border border-slate-600`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      {Icon ? (
                        <Icon className="w-8 h-8 text-white" />
                      ) : (
                        <span className="text-3xl">{social.emoji}</span>
                      )}
                      <ExternalLink className="w-4 h-4 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {social.name}
                    </h3>
                    {social.name === 'WhatsApp' && (
                      <p className="text-sm text-gray-100">+880 1976 688 132</p>
                    )}
                    {social.name === 'Email' && (
                      <p className="text-sm text-gray-100">saiyaheen0.4@gmail.com</p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2021 SM Shah Saiyaheen. Built with passion from Chittagong, Bangladesh.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}