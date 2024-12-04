import React from 'react';

const Bundles: React.FC = () => {
  const bundles = [
    {
      id: 'starter-pack',
      name: "Starter Pack",
      price: 24.99,
      image: "/simulacrum-ecom-template/placeholder1.jpg",
      description: "Perfect introduction to our flavors",
      includes: ["2x Classic Lemonade", "2x Blueberry Mint", "2x Ginger Spice"],
      savings: "Save 15%"
    },
    {
      id: 'family-pack',
      name: "Family Pack",
      price: 45.99,
      image: "/simulacrum-ecom-template/placeholder2.jpg",
      description: "Great for sharing with the whole family",
      includes: ["4x Classic Lemonade", "4x Blueberry Mint", "4x Lavender Dream"],
      savings: "Save 20%"
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Value Bundles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save more when you buy our curated bundles. Perfect for gifting or
            stocking up your favorite flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{bundle.name}</h3>
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    {bundle.savings}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{bundle.description}</p>
                <ul className="space-y-2 mb-6">
                  {bundle.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${bundle.price}</span>
                  <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundles;