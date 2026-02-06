
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">1. General</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">2. Brokerage Services</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">3. Liability</h2>
              <p>
                PolyMaterialBridge acts strictly as an intermediary. While we strive for absolute accuracy, 
                all final contractual agreements are subject to the specific terms defined between the buyer and the seller.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">4. Privacy & Data</h2>
              <p>
                Your data is protected according to European GDPR standards. We only share necessary business 
                information with verified trading partners.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
