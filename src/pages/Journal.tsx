import { Link } from "react-router-dom";
import { journalPosts } from "../data/journalPosts";

export function Journal() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-4">Journal</h1>
                    <p className="text-charcoal/60 text-xl font-sans max-w-2xl">
                        Insights, Case Studies und tiefgreifende Analysen zum Thema Corporate Fashion und High-End B2B Merchandise.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {journalPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/journal/${post.slug}`}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-charcoal/10 rounded-3xl p-6 md:p-8 hover:bg-white transition-all hover:shadow-xl hover:shadow-charcoal/5"
                        >
                            <div className="md:col-span-5 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/5">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="md:col-span-7 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs font-mono text-primary font-bold uppercase tracking-widest mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-charcoal/70 text-lg md:text-xl font-sans mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                    Artikel lesen
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform -rotate-45">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
