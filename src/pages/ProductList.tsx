import React from 'react';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Spicy Lemonade",
      price: 4.99,
      image: "/placeholder2.jpg",
      description: "A zingy blend with a hint of cayenne"
    },
    {
      id: 2,
      name: "Blue Lavender",
      price: 4.99,
      image: "/placeholder1.jpg",
      description: "Calming lavender with subtle citrus notes"
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Drinks</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of craft beverages, made with real ingredients
            and packed with probiotics for gut health.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-medium">${product.price.toFixed(2)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;