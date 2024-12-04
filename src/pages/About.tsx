import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <div className="prose prose-lg">
              <p className="mb-4">
                Founded in 2024, Taste began with a simple mission: to create
                delicious probiotic drinks that make wellness enjoyable.
              </p>
              <p className="mb-4">
                We source only the finest organic ingredients and use a unique
                fermentation process that results in billions of live probiotics
                in every bottle.
              </p>
              <p>
                Our drinks are crafted in small batches in our Portland facility,
                where we maintain strict quality controls and sustainable practices.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + '/placeholder1.jpg'}
              alt="Our brewing process"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🌱
            </div>
            <h3 className="font-bold mb-2">Organic Ingredients</h3>
            <p className="text-gray-600">
              We use only certified organic ingredients sourced from trusted farmers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🔬
            </div>
            <h3 className="font-bold mb-2">Probiotic Rich</h3>
            <p className="text-gray-600">
              Each bottle contains billions of live probiotic cultures.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ♻️
            </div>
            <h3 className="font-bold mb-2">Sustainable</h3>
            <p className="text-gray-600">
              Our packaging is 100% recyclable and we use renewable energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;