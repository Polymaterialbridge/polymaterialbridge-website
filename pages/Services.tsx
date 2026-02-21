import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Customer Care',
      desc: 'Dedicated support for all our partners. We prioritize long-term relationships through attentive communication and personalized service strategies.',
      image: '/images/service-customer.jpg.png'
    },
    {
      title: 'Trading & Brokerage',
      desc: 'Independent market analysis and procurement strategies. We find the best match for your supply needs or your excess production.',
      image: '/images/service-trading.jpg.jpg'
    },
    {
      title: 'Logistics',
      desc: 'Seamless end-to-end transportation management. We coordinate road, sea, and rail logistics to ensure timely delivery across borders.',
      image: '/images/service-logistics.jpg.jpg'
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col h-full">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="w-full mt-4">
                <img 
                  src={service.image} 
                  alt={`${service.title} Service`} 
                  className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-12 rounded-3xl text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Independent Brokerage Advantage</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            By remaining independent, we offer unbiased market advice. We are not tied to specific 
            manufacturers, allowing us to pivot quickly and find the best value for our customers in 
            fluctuating market conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-slate-800 px-6 py-2 rounded-full text-sm font-medium border border-slate-700">Transparency</div>
             <div className="bg-slate-800 px-6 py-2 rounded-full text-sm font-medium border border-slate-700">Speed</div>
             <div className="bg-slate-800 px-6 py-2 rounded-full text-sm font-medium border border-slate-700">Reliability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
