
import React from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

const Products: React.FC = () => {
  const products = [
    {
      title: 'HDPE (High-Density Polyethylene)',
      description: 'Known for its high strength-to-density ratio, HDPE is ideal for pipes, blow-molded bottles, and heavy-duty containers.',
      apps: 'Infrastructure, Packaging, Industrial Storage'
    },
    {
      title: 'LDPE (Low-Density Polyethylene)',
      description: 'Valued for its flexibility and toughness, LDPE is widely used in films, coatings, and squeeze bottles.',
      apps: 'Agricultural Films, Shrink Wraps, Laminations'
    },
    {
      title: 'PP (Polypropylene)',
      description: 'A versatile thermoplastic polymer used in a wide variety of applications including packaging and labeling, textiles, and stationary.',
      apps: 'Automotive Parts, Medical Devices, Food Packaging'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Material Portfolio</h1>
          <p className="text-lg text-slate-600">
            We specialize in providing high-quality primary and secondary polymer resins sourced from leading European manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3">
                <PlaceholderImage label={`${product.title} Visual`} aspectRatio="square" />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h2>
                <p className="text-slate-600 mb-6">
                  {product.description}
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Key Applications</span>
                  <span className="text-slate-800 font-medium">{product.apps}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
