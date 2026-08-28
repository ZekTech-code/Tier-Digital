import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-40 pb-24 min-h-screen text-center px-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
          Article not found
        </h1>
        <Link
          to="/blog"
          className="text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800"
        >
          Back to all articles
        </Link>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-12 lg:pt-44 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-125 h-125 bg-blue-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
            <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-black">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-500" />
                {post.author}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {post.authorRole} at Tier Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-semibold leading-relaxed mb-12 border-l-4 border-indigo-500 pl-6">
            {post.excerpt}
          </p>

          {post.content.map((block, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                {block.heading}
              </h2>
              {block.paragraphs.map((para, j) => (
                <p
                  key={j}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5"
                >
                  {para}
                </p>
              ))}
              {block.list && (
                <ul className="space-y-4 my-8 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-7">
                  {block.list.map((item, k) => (
                    <li key={k} className="flex gap-3 text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Author CTA */}
          <div className="mt-16 bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black mb-2">Want results like these?</h3>
              <p className="text-indigo-100 font-medium max-w-md">
                Book a free strategy call and we'll show you exactly how we'd
                approach your account.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-white text-indigo-600 font-bold py-3.5 px-7 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
            >
              Work With Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-10">
            Keep reading
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
