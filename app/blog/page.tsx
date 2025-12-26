import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

// Demo blog posts data
const blogPosts = [
    {
        slug: 'viral-video-secrets-2024',
        title: '10 Secrets to Creating Viral Videos in 2024',
        excerpt: 'Discover the proven strategies top creators use to make videos go viral on TikTok, Instagram Reels, and YouTube Shorts.',
        category: 'Video Marketing',
        date: '2024-12-20',
        readTime: '8 min read',
        image: '/images/blog/viral-secrets.jpg',
        featured: true,
    },
    {
        slug: 'product-video-conversion-guide',
        title: 'The Ultimate Guide to Product Videos That Convert',
        excerpt: 'Learn how to create product videos that increase conversions by 80% and reduce returns significantly.',
        category: 'E-commerce',
        date: '2024-12-18',
        readTime: '12 min read',
        image: '/images/blog/product-videos.jpg',
        featured: true,
    },
    {
        slug: 'video-marketing-trends',
        title: '2024 Video Marketing Trends You Can\'t Ignore',
        excerpt: 'Stay ahead of the curve with these emerging video marketing trends that will dominate in 2024 and beyond.',
        category: 'Trends',
        date: '2024-12-15',
        readTime: '10 min read',
        image: '/images/blog/trends.jpg',
        featured: false,
    },
    {
        slug: 'hook-first-3-seconds',
        title: 'How to Hook Viewers in the First 3 Seconds',
        excerpt: 'The science behind creating irresistible video hooks that stop the scroll and capture attention instantly.',
        category: 'Video Tips',
        date: '2024-12-12',
        readTime: '6 min read',
        image: '/images/blog/hooks.jpg',
        featured: false,
    },
    {
        slug: 'video-seo-optimization',
        title: 'Video SEO: Optimize Your Videos for Search',
        excerpt: 'Master video SEO to rank higher on YouTube, Google, and social media platforms for maximum visibility.',
        category: 'SEO',
        date: '2024-12-10',
        readTime: '9 min read',
        image: '/images/blog/seo.jpg',
        featured: false,
    },
    {
        slug: 'budget-video-equipment',
        title: 'Creating Professional Videos on a Budget',
        excerpt: 'You don\'t need expensive gear to create stunning videos. Here\'s what you actually need to get started.',
        category: 'Equipment',
        date: '2024-12-08',
        readTime: '7 min read',
        image: '/images/blog/budget.jpg',
        featured: false,
    },
    {
        slug: 'storytelling-techniques',
        title: 'Master the Art of Video Storytelling',
        excerpt: 'Learn the narrative techniques that make videos unforgettable and build emotional connections with viewers.',
        category: 'Storytelling',
        date: '2024-12-05',
        readTime: '11 min read',
        image: '/images/blog/storytelling.jpg',
        featured: false,
    },
    {
        slug: 'video-analytics-guide',
        title: 'Understanding Video Analytics: A Complete Guide',
        excerpt: 'Decode video metrics and analytics to understand what\'s working and optimize your content strategy.',
        category: 'Analytics',
        date: '2024-12-01',
        readTime: '10 min read',
        image: '/images/blog/analytics.jpg',
        featured: false,
    },
];

const categories = ['All', 'Video Marketing', 'E-commerce', 'Trends', 'Video Tips', 'SEO', 'Equipment', 'Storytelling', 'Analytics'];

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest insights, tips, and trends in video marketing, SEO, and content creation from the experts at Reel Rapid Agency.',
};

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

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
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                                        {/* Image Placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-orange-200 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-6xl opacity-20">📹</div>
                                            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                                    {/* Image Placeholder */}
                                    <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-5xl opacity-20">🎬</div>
                                        </div>
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
