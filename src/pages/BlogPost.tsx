import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { journalPosts } from "../data/journalPosts";
import { useEffect } from "react";

export function BlogPost() {
    const { slug } = useParams();
    const post = journalPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <main className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-heading font-bold text-charcoal mb-4">Artikel nicht gefunden</h1>
                <p className="text-charcoal/60 mb-8 max-w-md">Der gesuchte Beitrag existiert leider nicht oder wurde verschoben.</p>
                <Link to="/journal" className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity">
                    <ArrowLeft className="w-5 h-5" />
                    Zurück zum Journal
                </Link>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <article className="max-w-4xl mx-auto">
                <Link to="/journal" className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary font-medium transition-colors mb-12">
                    <ArrowLeft className="w-5 h-5" />
                    Zurück zum Journal
                </Link>

                <div className="flex items-center gap-4 text-xs font-mono text-primary font-bold uppercase tracking-widest mb-6">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                    <span>{post.readTime}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-8 leading-tight">
                    {post.title}
                </h1>

                <p className="text-2xl font-serif italic text-charcoal/70 mb-12 border-l-4 border-primary pl-6">
                    {post.excerpt}
                </p>

                <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 bg-charcoal/5">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="prose prose-lg prose-charcoal max-w-none 
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-charcoal 
                        prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                        prose-p:font-sans prose-p:text-charcoal/80 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:list-disc prose-ul:font-sans prose-ul:text-charcoal/80 prose-ul:pl-6
                        prose-li:mb-2
                        prose-strong:font-bold prose-strong:text-charcoal
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:text-charcoal/70 prose-blockquote:my-12
                    "
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
}
