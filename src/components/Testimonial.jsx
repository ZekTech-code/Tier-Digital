import React from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Chief Marketing Officer',
    company: 'TechFlow',
    content: "Working with this team has completely transformed our online presence. The attention to detail and modern design aesthetic is truly unparalleled. We've seen a 40% increase in user engagement since the redesign.",
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'Nexus Innovations',
    content: "An absolute game-changer. The seamless integration and dynamic animations brought our platform to life. They didn't just build a website; they crafted a digital experience that our users love.",
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Product Lead',
    company: 'Vanguard Systems',
    content: "Professional, innovative, and incredibly responsive. The team understood our vision immediately and delivered a product that exceeded all expectations. Highly recommended for any serious web project.",
    image: 'https://i.pravatar.cc/150?img=32'
  }
];

const Testimonial = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 dark:bg-indigo-900/40 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-50 dark:bg-blue-900/40 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-left">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Loved by innovative companies
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              Don't just take our word for it. Here is what some of our amazing clients have to say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-slate-700/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-blue-500 opacity-20 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.973V3H24V14.973L21.571 21H14.017ZM3 21L5.394 14.973V3H12.983V14.973L10.554 21H3Z" />
                </svg>
              </div>

              <p className="text-gray-700 dark:text-slate-200 text-lg leading-relaxed mb-8 relative z-10 grow">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-slate-700 group-hover:ring-blue-100 dark:group-hover:ring-blue-500/40 transition-all duration-300">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonial;
