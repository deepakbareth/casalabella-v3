import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomeSkeleton from './layout/HomeSkeleton';
import AboutSkeleton from './layout/AboutSkeleton';
import GallerySkeleton from './layout/GallerySkeleton';
import AmenitiesSkeleton from './layout/AmenitiesSkeleton';

// Lazily load page components to improve initial page load performance
const Home = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const GalleryPage = lazy(() => import('./pages/gallery'));
const AmenitiesPage = lazy(() => import('./pages/amenities'));

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
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<AboutSkeleton />}>
              <AboutPage />
            </Suspense>
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <Suspense fallback={<GallerySkeleton />}>
              <GalleryPage />
            </Suspense>
          } 
        />
        <Route 
          path="/amenities" 
          element={
            <Suspense fallback={<AmenitiesSkeleton />}>
              <AmenitiesPage />
            </Suspense>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


