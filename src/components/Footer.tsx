
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-temple-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-temple-saffron flex items-center justify-center">
                <span className="om-symbol font-bold text-2xl">ॐ</span>
              </div>
              <div className="ml-2">
                <h3 className="font-devnagari font-bold text-xl">स्वयंभू पालेश्वर महादेव मंदिर देवस्थान</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              A sacred space dedicated to Lord Shiva, offering spiritual guidance and a place of worship for devotees.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/swayambhupaleshwar/videos/" className="text-white hover:text-temple-saffron transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/explore/locations/1852171578357324/swayambhu-paleshwar-mahadev-mandir-devasthan/" className="text-white hover:text-temple-saffron transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@Gramdevswayambhupaleshwar" className="text-white hover:text-temple-saffron transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-temple-saffron pl-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Temple', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Events Calendar', path: '/events' },
                { name: 'Book Puja', path: '/puja' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-temple-saffron transition-all hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-temple-saffron pl-3">Temple Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Daily Aarti', path: '/about#aarti' },
                { name: 'Temple Tours', path: '/about#tours' },
                { name: 'Spiritual Discourses', path: '/events' },
                { name: 'Video Archive', path: '/videos' },
                { name: 'Rules & FAQs', path: '/rules' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-temple-saffron transition-all hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-temple-saffron pl-3">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-temple-saffron p-2 rounded mr-3 mt-1">
                  <Mail size={14} />
                </div>
                <p>swayambhupaleswar@gmail.com</p>
              </div>
              <div className="flex items-start">
                <div className="bg-temple-saffron p-2 rounded mr-3 mt-1">
                  <Phone size={14} />
                </div>
                <p>+91 99206 81945</p>
              </div>
              <address className="not-italic">
CTS 856,856/1,951(952) paleshwar mandir road,
                       opp. bank of baroda, marol village Andheri(east) 400059
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} स्वयंभू पालेश्वर महादेव मंदिर देवस्थान. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
