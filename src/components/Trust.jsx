import React from "react";
import ScrollReveal from "./ScrollReveal";
import { IMG } from "../config/images";

const Trust = () => {
  const logos = [
    { name: "Amazon", url: IMG.LOGO_AMAZON, width: "w-24" },
    { name: "Microsoft", url: IMG.LOGO_MICROSOFT, width: "w-32" },
    { name: "Google", url: IMG.LOGO_GOOGLE, width: "w-24" },
    { name: "Meta", url: IMG.LOGO_META, width: "w-28" },
    { name: "Airbnb", url: IMG.LOGO_AIRBNB, width: "w-24" },
    { name: "Spotify", url: IMG.LOGO_SPOTIFY, width: "w-28" },
    { name: "Shopify", url: IMG.LOGO_SHOPIFY, width: "w-28" },
    { name: "Netflix", url: IMG.LOGO_NETFLIX, width: "w-24" },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white dark:bg-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <ScrollReveal animation="fade">
          <div className="text-center mb-12">
            <p className="text-sm font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">
              Trusted by top innovative companies
            </p>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden mask-image-linear">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 mx-8 lg:mx-14 shrink-0"
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className={`object-contain ${logo.width} opacity-40 hover:opacity-100 transition-all duration-300 drop-shadow-sm ${
                    logo.name === "Google" ? "dark:invert" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
