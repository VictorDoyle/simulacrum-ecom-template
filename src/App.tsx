import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Drinks from './pages/Drinks';
import Bundles from './pages/Bundles';
import Recipes from './pages/Recipes';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router basename="/simulacrum/simulacrumShop">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;