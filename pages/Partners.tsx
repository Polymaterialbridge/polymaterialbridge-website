
import React from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

const Partners: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Partner Network</h1>
          <p className="text-lg text-slate-600">Expanding European supply chains through collaborative excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">For Suppliers</h2>
            <p className="text-slate-600 mb-6">
              Reach a diverse audience of converters and manufacturers across Europe. 
              We handle the market discovery and logistical coordination.
            </p>
            <PlaceholderImage label="Supplier Portal Visual" aspectRatio="video" className="mb-6" />
            <button className="w-full py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition-colors">
              Become a Supplier Partner
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">For Distributors</h2>
            <p className="text-slate-600 mb-6">
              Source prime and recycled PP/PE resins from reliable origins. 
              Benefit from our consolidated logistics and independent price checks.
            </p>
            <PlaceholderImage label="Distributor Network Visual" aspectRatio="video" className="mb-6" />
            <button className="w-full py-3 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
              Request Partner Access
            </button>
          </div>
        </div>

        <div className="border border-slate-200 p-12 rounded-3xl text-center">
          <h3 className="text-xl font-bold mb-6">Our Partner Commitment</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="max-w-[200px]">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-sm font-semibold text-slate-700">Verified Quality</p>
            </div>
            <div className="max-w-[200px]">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-sm font-semibold text-slate-700">Fast Execution</p>
            </div>
            <div className="max-w-[200px]">
              <div className="text-3xl mb-2">⚖️</div>
              <p className="text-sm font-semibold text-slate-700">Fair Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
