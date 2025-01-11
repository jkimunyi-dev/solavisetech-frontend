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
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <div className="flex-shrink-0">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 font-phonk-regular">
                Solavise
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 font-phonk-contrast">
                Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-4 lg:space-x-8">
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
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <button className={getStartedButtonClass}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-white/50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md border-t">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={navItemClass}
              >
                {item.name}
              </a>
            ))}
            <button className={getStartedButtonClass}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;