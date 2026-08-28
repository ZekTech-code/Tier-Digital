import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "Revenue Generated", value: 47, prefix: "$", suffix: "M+", decimals: 0 },
  { label: "Brands Scaled", value: 150, prefix: "", suffix: "+", decimals: 0 },
  { label: "Average ROAS", value: 6.2, prefix: "", suffix: "x", decimals: 1 },
  { label: "Ad Spend Managed", value: 120, prefix: "$", suffix: "M+", decimals: 0 },
];

const CountUp = ({ target, prefix, suffix, decimals }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[20px_20px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Stats;
