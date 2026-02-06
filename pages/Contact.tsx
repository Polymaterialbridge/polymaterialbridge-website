
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-200">
            <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">Get in Touch</h1>
            <p className="text-center text-slate-600 mb-12 max-w-lg mx-auto">
              Ready to discuss your polymer needs or list your availability? Our brokers are standing by.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Button */}
              <a 
                href="mailto:info@polymaterialbridge.com"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-sm text-slate-500 mt-2">info@polymaterialbridge.com</p>
              </a>

              {/* LinkedIn Button */}
              <a 
                href="#"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🔗
                </div>
                <h3 className="font-bold text-slate-900">LinkedIn</h3>
                <p className="text-sm text-slate-500 mt-2">Connect Professionally</p>
              </a>

              {/* Phone Button */}
              <a 
                href="tel:+31201234567"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-slate-100 hover:border-green-500 hover:bg-green-50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="text-sm text-slate-500 mt-2">+31 (0) 20 123 4567</p>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-2">Office Hours</p>
              <p className="text-slate-600">Monday — Friday: 09:00 - 18:00 (CET)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
