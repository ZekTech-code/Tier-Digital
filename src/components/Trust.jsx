import React from "react";
import ScrollReveal from "./ScrollReveal";

const Trust = () => {
  const logos = [
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", width: "w-24" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", width: "w-32" },
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", width: "w-24" },
    { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", width: "w-28" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg", width: "w-24" },
    { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", width: "w-28" },
    { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", width: "w-28" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", width: "w-24" },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[20px_20px] opacity-40"></div>

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
