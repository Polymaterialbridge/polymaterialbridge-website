import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Connecting Polymer Supply and Demand
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-slate-600 mb-12">
              Independent brokerage for PP and PE materials across Europe.
            </h2>
            
            <div className="w-full">
              <img 
                src="/images/hero-home.png.jpg" 
                alt="PolyMaterialBridge Hero - Polymer Logistics" 
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section A3: Focus Materials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Focus Materials</h3>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Polyethylene (PE) */}
            <div className="group border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/pe-material.png.jpg" 
                  alt="Polyethylene (PE) Material" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg" 
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">PE (Polyethylene)</h4>
              <p className="text-slate-600 mb-8">
                Extensive network for sourcing and distributing high-quality LDPE, HDPE, and LLDPE.
              </p>
              <Link to="/products" className="inline-block bg-slate-900 text-white px-6 py-3 rounded font-semibold hover:bg-teal-600 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Polypropylene (PP) */}
            <div className="group border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/pp-material.jpg.jpg" 
                  alt="Polypropylene (PP) Material" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg" 
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">PP (Polypropylene)</h4>
              <p className="text-slate-600 mb-8">
                Independent brokerage of PP Homo, Random, and Impact polymers for diverse industrial applications.
              </p>
              <Link to="/products" className="inline-block bg-slate-900 text-white px-6 py-3 rounded font-semibold hover:bg-teal-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="bg-teal-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">Ready to optimize your supply chain?</h3>
          <p className="text-teal-50 max-w-2xl mx-auto mb-10 text-lg">
            PolyMaterialBridge connects you with the right partners at the right price point.
          </p>
          <Link to="/contact" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-slate-100 transition-colors">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
