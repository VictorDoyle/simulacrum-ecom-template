import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-black text-white text-center py-3 text-sm font-medium tracking-wide">
          Free shipping on all orders over $70
        </div>


        {/* Header */}
        <header
          className={`
            w-full bg-white transition-all duration-300
            ${isScrolled ? 'shadow-sm' : ''}
          `}
        >
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a
                href="/"
                className="font-mono text-2xl tracking-tighter hover:opacity-80 transition-opacity"
              >
                taste
              </a>

              {/* Main Navigation */}
              <nav className="flex items-center space-x-12">
                <div className="group relative">
                  <a
                    href="/drinks"
                    className="text-gray-800 hover:text-gray-600 transition-colors py-2"
                  >
                    Drinks
                  </a>
                </div>
                <a
                  href="/bundles"
                  className="text-gray-800 hover:text-gray-600 transition-colors py-2"
                >
                  Bundles
                </a>
                <a
                  href="/recipes"
                  className="text-gray-800 hover:text-gray-600 transition-colors py-2"
                >
                  Recipes
                </a>
                <a
                  href="/about"
                  className="text-gray-800 hover:text-gray-600 transition-colors py-2"
                >
                  About
                </a>
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-6">
                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="/cart"
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;