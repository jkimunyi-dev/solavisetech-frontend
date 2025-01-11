"use client";

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Services', href: '/services' },
    { name: 'Other Services', href: '/otherservices' },
  ];

  const navItemClass = "block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-900 transition-all duration-300 hover:bg-white/50 rounded-md";
  const desktopNavItemClass = "text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-all duration-300 font-bold px-2 py-1 rounded-md hover:bg-white/50";
  const getStartedButtonClass = "rounded-lg border-2 border-blue-800 py-2 px-4 font-sans text-sm font-bold text-blue-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-900">
              Solavise
              <span className="text-gray-600">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={desktopNavItemClass}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className={getStartedButtonClass}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-white/50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={navItemClass}
              >
                {item.name}
              </a>
            ))}
            <button className={`${getStartedButtonClass} w-full mt-4`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;