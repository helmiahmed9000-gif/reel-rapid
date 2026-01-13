import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getBlogPosts, getBlogPostUrl } from '@/lib/contentful';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest insights, tips, and trends in video marketing, SEO, and content creation from the experts at Reel Rapid Agency.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
    const posts = await getBlogPosts();

    // Transform Contentful data to match UI expectations
    const blogPosts = posts.map(post => {
        const fields = post.fields;
        const category = fields.category && typeof fields.category === 'object' && 'fields' in fields.category ? (fields.category.fields as any).name : 'Uncategorized';

        let imageUrl = null;
        if (fields.coverImage && typeof fields.coverImage === 'object' && 'fields' in fields.coverImage) {
            const asset = fields.coverImage as any;
            if (asset.fields.file && asset.fields.file.url) {
                imageUrl = `https:${asset.fields.file.url}`;
            }
        }

        // Get the proper URL (handles parent/child nesting)
        const url = getBlogPostUrl(post);

        return {
            slug: fields.slug,
            url: url,
            title: fields.title,
            excerpt: fields.excerpt,
            category: category,
            date: fields.date,
            readTime: fields.readTime || '5 min read',
            image: imageUrl,
            featured: fields.featured || false,
        };
    });

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    // Get unique categories from posts
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    const categories = ['All', ...uniqueCategories];

    return (

        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            Video Marketing <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Tips, strategies, and insights to help you create better video content and grow your brand.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Categories */}
            <section className="w-full py-8 bg-background border-b border-border">
                <Container>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === 'All'
                                    ? 'bg-primary text-white'
                                    : 'bg-secondary text-foreground hover:bg-primary/10 hover:text-primary'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="w-full py-20 bg-background">
                    <Container>
                        <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <Link key={post.slug} href={post.url} className="group">
                                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                                        {/* Image Placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-orange-200 relative overflow-hidden">
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-6xl opacity-20">📹</div>
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-4 h-4" />
                                                    {post.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Regular Posts */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
                    {regularPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularPosts.map((post) => (
                                <Link key={post.slug} href={post.url} className="group">
                                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                                        {/* Image Placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 relative overflow-hidden">
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-5xl opacity-20">🎬</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    {post.category}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-muted-foreground">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                </span>
                                                <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">No recent articles found. Check back soon!</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Newsletter CTA */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Never Miss an Update
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter for weekly video marketing tips, industry insights, and exclusive content.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-8 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

