import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/#services" },
    { name: "About Us", href: "/#about" },
    { name: "Blog", href: "/blog" },
    { name: "Podcast", href: "/podcast" },
    { name: "Career", href: "/careers" },
  ];

  const handleHashClick = (e, href) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      }
    }
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-wide relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 ${
      isActive
        ? "text-indigo-600 dark:text-indigo-400 after:w-full"
        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-700 transition shadow-sm">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-indigo-700 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-tight">
              Tier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex gap-7">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={(e) => handleHashClick(e, item.href)}
                    className={
                      item.href.includes("#")
                        ? "text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-wide relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                        : linkClass
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none p-2 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden absolute w-full bg-white dark:bg-slate-950 shadow-xl transition-all duration-300 ease-in-out overflow-hidden border-b border-gray-100 dark:border-slate-800 ${
          isOpen ? "max-h-[32rem] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 flex flex-col space-y-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `font-bold uppercase tracking-wide px-4 py-4 rounded-xl transition-colors shadow-sm border ${
                  isActive && !item.href.includes("#")
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/30"
                    : "text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 border-slate-100 dark:border-slate-800"
                }`
              }
              onClick={(e) => { handleHashClick(e, item.href); setIsOpen(false); }}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="w-full text-center bg-indigo-600 text-white font-bold uppercase tracking-wide py-4 rounded-xl shadow-md hover:bg-indigo-700 transition mt-4"
            onClick={() => setIsOpen(false)}
          >
            Work With Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
