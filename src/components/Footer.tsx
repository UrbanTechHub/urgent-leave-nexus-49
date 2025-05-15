
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">UN Emergency Leave Center</h3>
            <p className="text-gray-300 mb-4">
              Supporting military personnel and their families during times of need with efficient emergency leave processing.
            </p>
            <div className="flex items-center">
              <img
                src="https://www.un.org/sites/un2.un.org/themes/bootstrap_un_theme/images/logo-footer-en.svg"
                alt="UN Logo"
                className="h-10 w-auto mr-2"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#application-form" className="text-gray-300 hover:text-white transition-colors">Apply for Leave</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>United Nations Headquarters</li>
              <li>New York, NY 10017</li>
              <li>United States of America</li>
              <li className="mt-4">Email: emergency@un.org</li>
              <li>Tel: +1-212-555-1212</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} United Nations. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white mr-4">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
