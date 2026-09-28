import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

const routeModules = {
  Home: () => import("./pages/Home"),
  Blog: () => import("./pages/Blog"),
  BlogPost: () => import("./pages/BlogPost"),
  Podcast: () => import("./pages/Podcast"),
  Careers: () => import("./pages/Careers"),
  Contact: () => import("./pages/Contact"),
  CaseStudies: () => import("./pages/CaseStudies"),
  CaseStudy: () => import("./pages/CaseStudy"),
  ServicePage: () => import("./pages/ServicePage"),
  Privacy: () => import("./pages/Privacy"),
  Terms: () => import("./pages/Terms"),
  NotFound: () => import("./pages/NotFound"),
};

const Home = lazy(routeModules.Home);
const Blog = lazy(routeModules.Blog);
const BlogPost = lazy(routeModules.BlogPost);
const Podcast = lazy(routeModules.Podcast);
const Careers = lazy(routeModules.Careers);
const Contact = lazy(routeModules.Contact);
const CaseStudies = lazy(routeModules.CaseStudies);
const CaseStudy = lazy(routeModules.CaseStudy);
const ServicePage = lazy(routeModules.ServicePage);
const Privacy = lazy(routeModules.Privacy);
const Terms = lazy(routeModules.Terms);
const NotFound = lazy(routeModules.NotFound);

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
  useEffect(() => {
    const warmRoutes = () => {
      Object.values(routeModules).forEach((load) => {
        load().catch(() => {});
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(warmRoutes, { timeout: 4000 });
      return undefined;
    }

    const timer = window.setTimeout(warmRoutes, 2000);
    return () => window.clearTimeout(timer);
  }, []);

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
