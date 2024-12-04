import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-mono text-xl mb-4">taste</h3>
            <p className="text-gray-600">
              Crafting refreshing probiotic beverages for a healthier you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 hover:text-gray-900">All Products</a></li>
              <li><a href="/bundles" className="text-gray-600 hover:text-gray-900">Bundles</a></li>
              <li><a href="/wholesale" className="text-gray-600 hover:text-gray-900">Wholesale</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-16 pt-8 flex justify-between items-center">
          <p className="text-gray-600">© 2024 taste. All rights reserved.</p>
          <div className="space-x-6">
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;