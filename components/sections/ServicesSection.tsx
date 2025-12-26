import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Video, Package, FileText, GraduationCap, Heart, TrendingUp } from 'lucide-react';

const services = [
    {
        icon: TrendingUp,
        title: 'Viral Short Videos',
        description: 'Create scroll-stopping short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts.',
        href: '/services/viral-short-videos',
        gradient: 'from-orange-400 to-orange-600',
    },
    {
        icon: Package,
        title: 'Product Videos',
        description: 'Showcase your products with stunning visuals that highlight features and drive conversions.',
        href: '/services/product-videos',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: FileText,
        title: 'Explainer Videos',
        description: 'Simplify complex ideas with engaging animated or live-action explainer videos.',
        href: '/services/explainer-videos',
        gradient: 'from-primary to-orange-500',
    },
    {
        icon: GraduationCap,
        title: 'Tutorial Videos',
        description: 'Educate your audience with clear, step-by-step tutorial videos that build trust.',
        href: '/services/tutorial-videos',
        gradient: 'from-orange-600 to-orange-700',
    },
    {
        icon: Heart,
        title: 'Storytelling Videos',
        description: 'Connect emotionally with your audience through compelling brand storytelling.',
        href: '/services/storytelling-videos',
        gradient: 'from-orange-400 to-pink-500',
    },
    {
        icon: Video,
        title: 'Video Ads',
        description: 'High-converting video advertisements optimized for social media and display networks.',
        href: '/services/video-ads',
        gradient: 'from-primary to-orange-600',
    },
];

export function ServicesSection() {
    return (
        <section className="w-full py-24 bg-background">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From viral shorts to compelling brand stories, we offer complete video marketing solutions tailored to your needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group"
                            >
                                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border cursor-pointer">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                        Learn More →
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-primary hover:text-orange-600 font-semibold text-lg group"
                    >
                        View All Services
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
