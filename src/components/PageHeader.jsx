import React from "react";

const PageHeader = ({ eyebrow, title, highlight, description, children }) => {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-125 h-125 bg-blue-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>
      <div className="absolute top-1/2 left-0 -ml-20 w-100 h-100 bg-indigo-400 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        {title && (
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                {highlight}
              </span>
            )}
          </h1>
        )}
        {description && (
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHeader;
