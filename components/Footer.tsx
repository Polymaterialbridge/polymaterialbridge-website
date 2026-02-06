
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo & Slogan */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center font-bold text-white text-lg">PMB</div>
              <span className="text-lg font-bold text-white tracking-tight">PolyMaterialBridge</span>
            </div>
            <p className="text-sm italic leading-relaxed">
              "Connecting Polymer Supply and Demand across Europe."
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center space-x-2">
                <span className="text-teal-500">📧</span>
                <span>info@polymaterialbridge.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-teal-500">📞</span>
                <span>+31 (0) 20 123 4567</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-teal-500">🔗</span>
                <a href="#" className="hover:text-teal-400">LinkedIn Profile</a>
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white">John Doe</p>
                <p className="text-xs text-slate-400 uppercase">Senior Broker</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partners" className="hover:text-teal-400 transition-colors">For Partners</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PolyMaterialBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
