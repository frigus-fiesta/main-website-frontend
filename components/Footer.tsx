import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative">
      <footer className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <div className="w-16 h-16 border-2 border-yellow-300 rotate-45 transform"></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-yellow-200 to-yellow-300 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                  <polygon points="25,2 45,15 45,35 25,48 5,35 5,15" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-6 py-16">
          <nav className="flex flex-wrap justify-center gap-8 mb-12">
            {['Home', 'About Us', 'Gallery', 'Contact Us', 'Book Appointment'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-white font-semibold text-lg hover:text-yellow-200 transition-all duration-300 transform relative group"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="text-center mb-12 flex items-center justify-center">
                <Image src={`/assets/logo.png`} width={150} height={150} alt='logo' className='bg-black/20 rounded'/>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">FRIGUS FIESTA</h3>
              <p className="text-yellow-100">
                Jawahar Nagar, Sainikpuri,<br />
                Hyderabad, Telangana, India- 500094
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Contact Phones</h3>
              <p className="text-yellow-100">91-91826-84160</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-yellow-100">info@frigusfiesta.com</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { Icon: Facebook, href: '/' },
              { Icon: Instagram, href: '/' },
              { Icon: Youtube, href: '/' }
            ].map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-yellow-500 transition-all duration-300 hover:scale-110 transform hover:rotate-12"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          <div className="border-t border-white border-opacity-30 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white text-sm">
                ©2025 Frigus Fiesta | Developed by{' '}
                <Link href={`https://www.electroplix.com/`} className="text-yellow-200 font-semibold hover:underline hover:underline-offset-1 transition-colors duration-300 cursor-pointer">
                  Electroplix
                </Link>
              </p>
              <Link 
                href="/" 
                className="text-yellow-200 text-sm hover:text-white transition-colors duration-300 underline hover:no-underline"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;