import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import TourDetails from './pages/TourDetails';
import CelebrationPackage from './pages/CelebrationPackage';
import AmenitiesAndTips from './pages/AmenitiesAndTips';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/tour/:tourId" element={<TourDetails />} />
          <Route path="/celebration" element={<CelebrationPackage />} />
          <Route path="/amenities" element={<AmenitiesAndTips />} />
        </Routes>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
