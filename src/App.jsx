import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => (
  <div
    className="flex items-center justify-center min-h-[60vh]"
    role="status"
    aria-label="Loading"
  >
    <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-indigo-600 animate-spin" />
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="grow">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-study/:slug" element={<CaseStudy />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
