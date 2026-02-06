
import React from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b-4 border-teal-500 inline-block pb-2">About PolyMaterialBridge</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Who We Are</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              PolyMaterialBridge is an independent brokerage firm specialized in the European polymer market. 
              We act as the vital link between manufacturers and converters, ensuring a transparent, efficient, 
              and reliable exchange of PP and PE materials.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With decades of collective experience in the petrochemical industry, our team brings deep 
              market insights and a vast network of suppliers across the continent.
            </p>
          </div>
          <PlaceholderImage label="Company Team / Office Visual" aspectRatio="video" />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Our Vision</h3>
            <p className="text-slate-600">
              To be the most trusted independent polymer broker in Europe, known for our integrity, 
              market intelligence, and commitment to sustainable growth in the plastic industry supply chain.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Our Responsibilities</h3>
            <ul className="text-slate-600 list-disc list-inside space-y-2">
              <li>Ensuring market-fair pricing for all stakeholders.</li>
              <li>Maintaining rigorous quality standards for sourced materials.</li>
              <li>Providing transparent communication throughout the trading process.</li>
              <li>Navigating complex logistical challenges for our clients.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
