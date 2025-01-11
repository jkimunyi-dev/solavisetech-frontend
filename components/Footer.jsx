"use client"

import React from 'react';
import { Facebook, Twitter, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const aboutUsLinks = [
    { label: 'About Solavise Tech', href: '#' },
    { label: 'Administration', href: '#' },
    { label: 'Solavise Tech Team', href: '#' },
    { label: 'Centers', href: '#' },
    { label: 'Gallery', href: '#' }
  ];

  const programmeLinks = [
    { label: 'Online Courses', href: '#' },
    { label: 'AWS', href: '#' },
    { label: 'DevOps', href: '#' },
    { label: 'Cyber Security', href: '#' },
    { label: 'Data Science', href: '#' },
  ];

  const servicesLinks = [
    { label: 'Accreditation and Membership', href: '#' },
    { label: 'Free Webinar Videos', href: '#' },
    { label: 'Conferences', href: '#' },
    { label: 'Training , Seminars and Workshop', href: '#' }
  ];

  const otherServicesLinks = [
    { label: 'Web Development', href: '#' },
    { label: 'Digital Marketing', href: '#' },
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Github, href: '#' },
    { Icon: Linkedin, href: '#' }
  ];

  const FooterLinkSection = ({ title, links }) => (
    <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
      <h3 className="mb-4 text-base font-bold text-blue-800">{title}</h3>
      <ul className="text-sm">
        {links.map((link, index) => (
          <li key={index} className={index === links.length - 1 ? '' : 'mb-4'}>
            <a className="text-blue-500 hover:text-blue-600" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-5 mb-12 md:mb-20">
          {/* Logo and Social Links */}
          <div className="w-full lg:w-1/3 px-5 mb-12 lg:mb-0">
            <a className="inline-block mb-6 text-blue-800 text-lg font-semibold" href="/">
              <div className="flex-shrink-0">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 font-phonk-regular">
                  Solavise
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 font-phonk-contrast">
                  Tech
                </span>
              </div>
            </a>
            <p className="mb-6 max-w-sm text-base text-gray-500">
              Creativity that sparks performance
            </p>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="text-blue-800 mt-1 mr-2" size={20} />
                <p className="text-sm text-gray-500">
                  Corporate office:<br />
                  5680 King Centre Drive,<br />
                  Suite 600 Alexandria,<br />
                  VA 22315 United States of America
                </p>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="text-blue-800 mr-2" size={20} />
                <a href="tel:+17036473886" className="text-sm text-gray-500 hover:text-blue-600">
                  +1 (703) 647 3886
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  className="inline-flex items-center justify-center w-12 h-12 bg-white"
                  href={social.href}
                >
                  <social.Icon className="text-blue-800" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-full lg:w-2/3 px-5">
            <div className="flex flex-wrap justify-between -mx-4">
              <FooterLinkSection title="About Us" links={aboutUsLinks} />
              <FooterLinkSection title="Programmes" links={programmeLinks} />
              <FooterLinkSection title="Services" links={servicesLinks} />
              <FooterLinkSection title="Other Services" links={otherServicesLinks} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 pt-8 px-4 border-t border-gray-100">
          All rights reserved © Solavise Tech {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Footer;