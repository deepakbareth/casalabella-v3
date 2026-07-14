import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomeSkeleton from './layout/HomeSkeleton';
import AboutSkeleton from './layout/AboutSkeleton';
import GallerySkeleton from './layout/GallerySkeleton';
import AmenitiesSkeleton from './layout/AmenitiesSkeleton';
import ReviewsSkeleton from './layout/ReviewsSkeleton';
import InquireSkeleton from './layout/InquireSkeleton';

// Lazily load page components to improve initial page load performance
const Home = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const GalleryPage = lazy(() => import('./pages/gallery'));
const AmenitiesPage = lazy(() => import('./pages/amenities'));
const ReviewsPage = lazy(() => import('./pages/reviews'));
const InquirePage = lazy(() => import('./pages/inquire'));

// Helper component to handle scroll reset on route change & smooth hash scrolling
function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

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
      // Instantly reset window scroll position to top on page transition
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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
        <Route
          path="/reviews"
          element={
            <Suspense fallback={<ReviewsSkeleton />}>
              <ReviewsPage />
            </Suspense>
          }
        />
        <Route
          path="/book-now"
          element={
            <Suspense fallback={<InquireSkeleton />}>
              <InquirePage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


