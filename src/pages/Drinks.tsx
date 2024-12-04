import React from 'react';
import { Link } from 'react-router-dom';
const Drinks: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Classic Probiotic Lemonade",
      price: 4.99,
      image: `${process.env.PUBLIC_URL}/placeholder1.jpg`,
      description: "Our signature blend with a perfect balance of sweet and tart"
    },
    {
      id: 2,
      name: "Blueberry Mint Fusion",
      price: 5.49,
      image: `${process.env.PUBLIC_URL}/placeholder2.jpg`,
      description: "Fresh mint and wild blueberries create a refreshing combination"
    },
    {
      id: 3,
      name: "Ginger Spice Kombucha",
      price: 4.99,
      image: `${process.env.PUBLIC_URL}/placeholder3.png`,
      description: "A zingy blend with notes of ginger and citrus"
    },
    {
      id: 4,
      name: "Lavender Dream",
      price: 5.99,
      image: `${process.env.PUBLIC_URL}/placeholder4.png`,
      description: "Calming lavender with subtle honey notes"
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Drinks</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each bottle is crafted with organic ingredients and packed with billions
            of live probiotics. Experience wellness in every sip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-w-4 aspect-h-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-medium">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drinks;