import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (subscribed) {
      const timer = setTimeout(() => setSubscribed(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [subscribed]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const serviceLinks = [
    { name: "Paid Social Advertising", href: "/#services" },
    { name: "UGC & Creative Studio", href: "/#services" },
    { name: "Email & SMS Marketing", href: "/#services" },
    { name: "Advanced Analytics", href: "/#services" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Podcast", href: "/podcast" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Support", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-300 pt-24 pb-12 overflow-hidden border-t border-slate-900">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-600/20 group-hover:bg-indigo-500 transition-colors duration-300">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black text-white uppercase tracking-tight">
                Tier
              </span>
            </Link>

            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-sm">
              We build scalable, high-performance digital experiences that help
              modern businesses thrive in a competitive landscape.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Subscribe to stay updated with our latest insights and modern
              business trends.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-sm font-medium text-emerald-300">
                  You're in! Check your inbox to confirm.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex flex-col gap-3 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Tier Digital. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
