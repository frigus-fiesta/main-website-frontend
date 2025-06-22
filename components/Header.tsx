/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { 
        href: '/', 
        label: 'Who We Are',
        dropdown: [
            { href: '/about/story', label: 'About us' },
            { href: '/about/FAQ', label: 'FAQ`s' },
            { href: '/about/team', label: 'Our Team' },
            { href: '/about/careers', label: 'Career with us' },
        ] 
    },
    { 
        href: '/', 
        label: 'Our Services',
        dropdown: [
            { href: '/services/corporate', label: 'Corporate Events' },
            { href: '/services/concerts', label: 'Live Concerts' },
            { href: '/services/social', label: 'Social Events' }
        ]
    },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/appointment', label: "Book Appointment" },
];

const goldHoverColor = 'hover:text-yellow-400';
const transparentNavTextColor = 'text-white';
const solidNavTextColor = 'text-gray-800';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

        if (isHomepage) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
            
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setHasScrolled(true);
        }
    }, [pathname, isHomepage]);

    const isTransparent = isHomepage && !hasScrolled;
    const navTextColor = isTransparent ? transparentNavTextColor : solidNavTextColor;

    const toggleMobileDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    }
    
    return (
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white/90 shadow-md backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image src="/assets/friguslogo.svg" alt='logo' width={100000} height={100000} className='mt-2 size-44 md:mt-0'/>
            </Link>
            <div className="hidden items-center space-x-6 xl:flex">
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.dropdown && setHoveredItem(link.label)}
                    onMouseLeave={() => link.dropdown && setHoveredItem(null)}
                  >
                    <Link
                      href={link.href}
                      className={`group relative flex items-center text-sm font-bold transition-colors duration-300 ${navTextColor} ${goldHoverColor}`}
                    >
                      {link.label}
                      {link.dropdown && <FaChevronDown className="ml-1.5 size-3 opacity-70" />}
                    </Link>
                    <AnimatePresence>
                      {link.dropdown && hoveredItem === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white p-2 uppercase shadow-xl ring-1 ring-black ring-opacity-5"
                        >
                          {link.dropdown.map(subLink => (
                            <Link 
                              key={subLink.label} 
                              href={subLink.href} 
                              className={`block px-3 py-2 text-sm ${solidNavTextColor} ${goldHoverColor} rounded-md`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
              <Link href="/pay" className={`rounded-full bg-gradient-to-r from-yellow-400 to-yellow-400 px-3 py-1 font-bold text-white`}>
                Pay Now
              </Link>
            </div>
            <div className="flex items-center xl:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${navTextColor}`}>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
          <>
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
                    onClick={() => setIsOpen(false)}
                />
            <motion.div 
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-xl xl:hidden"
                >
              <div className="flex h-full flex-col p-5">
                <div className="flex justify-end">
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="mt-8 grow">
                  {navLinks.map((link) => (
                    <div key={link.label} className="border-b border-gray-100 py-2">
                      {link.dropdown ? (
                        <div>
                          <button onClick={() => toggleMobileDropdown(link.label)} className={`flex w-full items-center justify-between px-4 py-2 text-gray-700 ${goldHoverColor}`}>
                            <span>{link.label}</span>
                            <FaChevronDown className={`size-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.label && (
                            <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-8"
                                                >
                              {link.dropdown.map(subLink => (
                                <Link key={subLink.label} href={subLink.href} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-sm uppercase text-gray-600 ${goldHoverColor}`}>
                                  {subLink.label}
                                </Link>
                                                    ))}
                            </motion.div>
                                            )}
                          </AnimatePresence>
                        </div>
                                    ) : (
                                      <Link href={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-gray-700 ${goldHoverColor}`}>
                                        {link.label}
                                      </Link>
                                    )}
                    </div>
                            ))}
                </nav>
                <div className="mt-auto p-4">
                  <Link href="/pay" className={`block w-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-500 px-5 py-2.5 text-center font-bold text-white`}>
                    Pay Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
            )}
        </AnimatePresence>
      </header>
    );
};

export default Header;