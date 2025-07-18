"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "9025486901";
    const message = "Hi! I'm interested in learning more about Stasis Artis programs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/stasis_artis/", "_blank");
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/sa.jpg" alt="Stasis Artis Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Stasis Artis</h3>
                <p className="text-teal-400 text-sm">Createch Studio</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {/* <li><Link href="/about" className="hover:text-teal-400 transition-colors duration-200">About Us</Link></li> */}
              <li><Link href="/offerings/craft" className="hover:text-teal-400 transition-colors duration-200">Our Offerings</Link></li>
              <li><Link href="/offerings/internships" className="hover:text-teal-400 transition-colors duration-200">Createch Internship</Link></li>
              {/* <li><Link href="/programs" className="hover:text-teal-400 transition-colors duration-200">Programs</Link></li> */}
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              {/* <li><Link href="/offerings/craft" className="hover:text-teal-400 transition-colors duration-200">Craft</Link></li>
              <li><Link href="/offerings/code" className="hover:text-teal-400 transition-colors duration-200">Code</Link></li> */}
              <li><Link href="/offerings/code-n-craft" className="hover:text-teal-400 transition-colors duration-200">Code ∩ Craft</Link></li>
              <li><Link href="/offerings/bulk-orders" className="hover:text-teal-400 transition-colors duration-200">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/offerings/code" className="hover:text-teal-400 transition-colors duration-200">Code</Link></li>
              <li><Link href="/offerings/craft" className="hover:text-teal-400 transition-colors duration-200">Craft</Link></li>
              {/* <li><Link href="/offerings/code-n-craft" className="hover:text-teal-400 transition-colors duration-200">Code ∩ Craft</Link></li> */}
              <li><Link href="/offerings/internships" className="hover:text-teal-400 transition-colors duration-200">Internship</Link></li>
              <li><Link href="/offerings/programs" className="hover:text-teal-400 transition-colors duration-200">Programs</Link></li>
              <li><Link href="/offerings/bulk-orders" className="hover:text-teal-400 transition-colors duration-200">Bulk Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="Location" className="text-teal-400">📍</span>
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="Email" className="text-teal-400">✉️</span>
                <span className="text-sm">stasisartisofficial@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="Phone" className="text-teal-400">📞</span>
                <span className="text-sm">+91 9025486901</span>
              </li>
            </ul>
        <div className="flex justify-center space-x-3 sm:space-x-4 mb-2 mt-4 mr-8  sm:mb-8">
          <button
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-2.5 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5 m-1" />
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-2.5 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
            aria-label="Chat with us on WhatsApp"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5 m-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </button>
          <a
            href="https://www.linkedin.com/company/stasisartis/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 p-2.5 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 m-1" />
          </a>
        </div>
          </div>
          {/* Contact */}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm italic mb-4 md:mb-0">
            "Art is eternal. Tech makes it boundless."
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Stasis Artis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;