import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="pt-32">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Take a sip
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sweet, tart, and oh-so-refreshing probiotic lemonades
              taste like summer in every bottle.
            </p>
            <Link
              to="/drinks"
              className="inline-block bg-black text-white px-8 py-4 
                rounded-full font-medium hover:bg-gray-900 
                transition-colors duration-300"
            >
              Shop Lemonades
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + '/placeholder1.jpg'}
              alt="Colorful bottles of lemonade on ice"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;