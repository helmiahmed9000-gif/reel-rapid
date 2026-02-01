import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { Eye, Heart, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Portfolio - Our Work',
    description: 'Explore our portfolio of viral short videos, product videos, explainer videos, and more. See the results we deliver for our clients.',
};

// Portfolio items - videos will be added later, using placeholders for now
const portfolioItems = [
    {
        id: 1,
        title: 'Skincare Brand Launch',
        category: 'Commercial Video',
        views: '2.4M',
        likes: '156K',
        thumbnail: 'https://images.unsplash.com/photo-1556228552-523cd169eb90?w=720&q=80',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        id: 2,
        title: 'Fitness App Promo',
        category: 'Viral Short Videos',
        views: '5.1M',
        likes: '342K',
        thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=720&q=80',
        gradient: 'from-orange-400 to-orange-600',
    },
    {
        id: 3,
        title: 'Tech Startup Explainer',
        category: 'Explainer Videos',
        views: '890K',
        likes: '67K',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=720&q=80',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        id: 4,
        title: 'Fashion Collection',
        category: 'Commercial Video',
        views: '3.2M',
        likes: '198K',
        thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=720&h=1280&fit=crop',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 5,
        title: 'Food Delivery App',
        category: 'Video Ads',
        views: '4.7M',
        likes: '285K',
        thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=720&h=1280&fit=crop',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        id: 6,
        title: 'Gaming Headset Review',
        category: 'UGC Videos',
        views: '1.8M',
        likes: '124K',
        thumbnail: 'https://images.unsplash.com/photo-1612287230217-969b65929d45?w=720&h=1280&fit=crop',
        gradient: 'from-red-500 to-orange-500',
    },
    {
        id: 7,
        title: 'SaaS Platform Tutorial',
        category: 'Tutorial Videos',
        views: '650K',
        likes: '45K',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=1280&fit=crop',
        gradient: 'from-indigo-500 to-purple-500',
    },
    {
        id: 8,
        title: 'Coffee Brand Story',
        category: 'Storytelling Videos',
        views: '1.2M',
        likes: '89K',
        thumbnail: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=720&h=1280&fit=crop',
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        id: 9,
        title: 'Jewelry Collection',
        category: 'Commercial Video',
        views: '2.9M',
        likes: '175K',
        thumbnail: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=720&h=1280&fit=crop',
        gradient: 'from-yellow-400 to-amber-500',
    },
    {
        id: 10,
        title: 'Wellness App Launch',
        category: 'Viral Short Videos',
        views: '6.3M',
        likes: '412K',
        thumbnail: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=720&h=1280&fit=crop',
        gradient: 'from-teal-500 to-cyan-500',
    },
    {
        id: 11,
        title: 'Sneaker Drop Campaign',
        category: 'Video Ads',
        views: '4.1M',
        likes: '267K',
        thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=720&h=1280&fit=crop',
        gradient: 'from-slate-600 to-slate-800',
    },
    {
        id: 12,
        title: 'Beauty Tutorial Series',
        category: 'Tutorial Videos',
        views: '980K',
        likes: '78K',
        thumbnail: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=720&h=1280&fit=crop',
        gradient: 'from-rose-400 to-pink-500',
    },
];

const categories = [
    'All',
    'Viral Short Videos',
    'Commercial Video',
    'Explainer Videos',
    'Video Ads',
    'UGC Videos',
    'Tutorial Videos',
    'Storytelling Videos',
];

const stats = [
    { value: '50M+', label: 'Total Views Generated' },
    { value: '500+', label: 'Videos Produced' },
    { value: '200+', label: 'Happy Clients' },
    { value: '95%', label: 'Client Satisfaction' },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            Our <span className="text-primary">Portfolio</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Discover the videos that have helped brands go viral,
                            drive conversions, and build loyal audiences.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="w-full py-16 bg-background border-b border-border">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-orange-600 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Category Filter */}
            <section className="w-full py-8 bg-background sticky top-20 z-40 border-b border-border">
                <Container>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Portfolio Grid */}
            <section className="w-full py-16 bg-gradient-to-b from-background to-orange-50/30">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                        {portfolioItems.map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            Load More Videos
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Results Section */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Real <span className="text-primary">Results</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Our videos don't just look good – they deliver measurable business impact
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-foreground mb-2">3.5x</div>
                            <div className="text-lg font-semibold text-foreground mb-2">Average ROAS</div>
                            <p className="text-muted-foreground text-sm">
                                Our video ads consistently outperform industry benchmarks
                            </p>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-foreground mb-2">85%</div>
                            <div className="text-lg font-semibold text-foreground mb-2">Watch Rate</div>
                            <p className="text-muted-foreground text-sm">
                                Viewers watch our videos to completion at above-average rates
                            </p>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-foreground mb-2">12%</div>
                            <div className="text-lg font-semibold text-foreground mb-2">Avg. Engagement</div>
                            <p className="text-muted-foreground text-sm">
                                Higher engagement means more shares and organic reach
                            </p>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join the brands that have transformed their marketing with our video content.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
