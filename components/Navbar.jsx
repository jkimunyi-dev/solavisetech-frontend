"use client";

import React from 'react';
import { Menu, Phone, Home, Info, BookOpen, Wrench, MoreHorizontal, Users, Image, Building2, School, Terminal, Shield, Database, Sparkles, Globe, Smartphone, Award, Video, Users2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navigation = () => {
  const aboutItems = [
    { name: 'Team', href: '/about/team', icon: Users },
    { name: 'Gallery', href: '/about/gallery', icon: Image },
    { name: 'Centers', href: '/about/centers', icon: Building2 },
  ];

  const programs = [
    { name: 'AWS', href: '/programs/aws', icon: School },
    { name: 'DevOps', href: '/programs/devops', icon: Terminal },
    { name: 'Cyber Security', href: '/programs/cyber-security', icon: Shield },
    { name: 'Data Science', href: '/programs/data-science', icon: Database },
    { name: 'Generative AI', href: '/programs/generative-ai', icon: Sparkles },
    { name: 'Web Development', href: '/programs/web-development', icon: Globe },
    { name: 'Android Development', href: '/programs/android-development', icon: Smartphone },
  ];

  const services = [
    { name: 'Accreditation and Membership', href: '/services/accreditation', icon: Award },
    { name: 'Free Webinars', href: '/services/webinars', icon: Video },
    { name: 'Conferences and Workshops', href: '/services/conferences', icon: Users2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-phonk-regular text-2xl font-bold text-blue-800">
              Solavise
              <span className="font-phonk-contrast text-yellow-300">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="px-3 py-2 text-sm flex items-center gap-2">
                    <Home size={16} />
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="flex items-center gap-2">
                      <Info size={16} />
                      About Us
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      {aboutItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink href={item.href} className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2">
                            <item.icon size={16} />
                            {item.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} />
                      Programs
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      {programs.map((program) => (
                        <li key={program.name}>
                          <NavigationMenuLink href={program.href} className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2">
                            <program.icon size={16} />
                            {program.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="flex items-center gap-2">
                      <Wrench size={16} />
                      Services
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink href={service.href} className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2">
                            <service.icon size={16} />
                            {service.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/otherservices" className="px-3 py-2 text-sm flex items-center gap-2">
                    <MoreHorizontal size={16} />
                    Other Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="px-3 py-2 text-sm flex items-center gap-2">
                    <Phone size={16} />
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex items-center">
            <Button variant="outline" className="font-bold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-4">
                  <a href="/" className="px-3 py-2 hover:bg-gray-100 rounded-md flex items-center gap-2">
                    <Home size={16} />
                    Home
                  </a>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="about">
                      <AccordionTrigger className="px-3">
                        <span className="flex items-center gap-2">
                          <Info size={16} />
                          About Us
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        {aboutItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2"
                          >
                            <item.icon size={16} />
                            {item.name}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="programs">
                      <AccordionTrigger className="px-3">
                        <span className="flex items-center gap-2">
                          <BookOpen size={16} />
                          Programs
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        {programs.map((program) => (
                          <a
                            key={program.name}
                            href={program.href}
                            className="block px-6 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2"
                          >
                            <program.icon size={16} />
                            {program.name}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="services">
                      <AccordionTrigger className="px-3">
                        <span className="flex items-center gap-2">
                          <Wrench size={16} />
                          Services
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-6 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2"
                          >
                            <service.icon size={16} />
                            {service.name}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <a href="/otherservices" className="px-3 py-2 hover:bg-gray-100 rounded-md flex items-center gap-2">
                    <MoreHorizontal size={16} />
                    Other Services
                  </a>

                  <a href="/contact" className="px-3 py-2 hover:bg-gray-100 rounded-md flex items-center gap-2">
                    <Phone size={16} />
                    Contact
                  </a>

                  <Button className="w-full mt-4">Get Started</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;