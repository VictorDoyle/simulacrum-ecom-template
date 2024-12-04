import React from 'react';
import { useParams } from 'react-router-dom';

const Product: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img
              src="/placeholder1.jpg"
              alt="Product Name"
              className="w-full h-auto"
            />
          </div>

          {/* Product Info */}
          <div className="py-8">
            <h1 className="text-4xl font-bold mb-4">Spicy Lemonade</h1>
            <p className="text-2xl mb-6">$4.99</p>

            <div className="prose prose-lg mb-8">
              <p>
                Our signature spicy lemonade combines fresh-squeezed citrus with a
                kick of cayenne pepper for a uniquely refreshing experience.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-900 transition-colors">
                Add to Cart
              </button>

              {/* Product Details */}
              <div className="border-t pt-8 mt-8">
                <h3 className="font-medium mb-4">Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>12 fl oz</li>
                  <li>Contains live probiotics</li>
                  <li>No artificial sweeteners</li>
                  <li>Best served chilled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
