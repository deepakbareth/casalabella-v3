import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import PageSkeleton from './layout/PageSkeleton';

// Lazily load page components to improve initial page load performance
const Home = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const GalleryPage = lazy(() => import('./pages/gallery'));

// Tiny helper component to handle smooth hash scrolling
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router basename="/casalabella-v3">
      <ScrollToHashElement />
      <Navbar />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;


