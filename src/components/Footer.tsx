import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">All Products</Link></li>
              <li><Link to="/bundles" className="text-gray-600 hover:text-gray-900">Bundles</Link></li>
              <li><Link to="/wholesale" className="text-gray-600 hover:text-gray-900">Wholesale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
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
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
