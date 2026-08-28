import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, Compass } from "lucide-react";

const NotFound = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Podcast", href: "/podcast" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 pt-24 pb-16">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-indigo-600/25">
          <Compass className="w-10 h-10" />
        </div>
        <p className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
          This page took an{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
            unexpected detour
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-7 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" /> Back to homepage
          </Link>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Quick links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
