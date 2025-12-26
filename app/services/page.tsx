import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    TrendingUp,
    Package,
    FileText,
    GraduationCap,
    Heart,
    Video,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const services = [
    {
        icon: TrendingUp,
        title: 'Viral Short Videos',
        slug: 'viral-short-videos',
        description: 'Create scroll-stopping short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts that drives massive engagement.',
        features: [
            'Platform-specific optimization',
            'Trend-based content strategy',
            'Hook-driven storytelling',
            'Viral editing techniques',
        ],
        gradient: 'from-orange-400 to-orange-600',
        price: 'Starting at $499',
    },
    {
        icon: Package,
        title: 'Product Videos',
        slug: 'product-videos',
        description: 'Showcase your products with stunning visuals that highlight features, benefits, and drive conversions on your sales pages.',
        features: [
            'Professional product cinematography',
            'Feature highlighting animations',
            'Lifestyle integration shots',
            'E-commerce optimization',
        ],
        gradient: 'from-orange-500 to-red-500',
        price: 'Starting at $799',
    },
    {
        icon: FileText,
        title: 'Explainer Videos',
        slug: 'explainer-videos',
        description: 'Simplify complex ideas with engaging animated or live-action explainer videos that educate and convert.',
        features: [
            'Custom script development',
            'Professional voiceover',
            'Animated graphics & icons',
            'Clear call-to-action',
        ],
        gradient: 'from-primary to-orange-500',
        price: 'Starting at $1,299',
    },
    {
        icon: GraduationCap,
        title: 'Tutorial Videos',
        slug: 'tutorial-videos',
        description: 'Educate your audience with clear, step-by-step tutorial videos that build trust and establish authority.',
        features: [
            'Screen recording & editing',
            'Visual annotations',
            'Step-by-step guidance',
            'Knowledge base integration',
        ],
        gradient: 'from-orange-600 to-orange-700',
        price: 'Starting at $599',
    },
    {
        icon: Heart,
        title: 'Storytelling Videos',
        slug: 'storytelling-videos',
        description: 'Connect emotionally with your audience through compelling brand storytelling that builds loyalty and engagement.',
        features: [
            'Brand narrative development',
            'Cinematic production',
            'Emotional resonance',
            'Authentic testimonials',
        ],
        gradient: 'from-orange-400 to-pink-500',
        price: 'Starting at $1,499',
    },
    {
        icon: Video,
        title: 'Video Ads',
        slug: 'video-ads',
        description: 'High-converting video advertisements optimized for social media and display networks that maximize your ROAS.',
        features: [
            'A/B testing variations',
            'Platform-specific formats',
            'Conversion-focused messaging',
            'Performance analytics',
        ],
        gradient: 'from-primary to-orange-600',
        price: 'Starting at $899',
    },
];

const benefits = [
    'Free initial consultation',
    'Unlimited revisions',
    'Fast turnaround (7-14 days)',
    'Dedicated project manager',
    'Commercial usage rights',
    'Raw footage included',
];

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Explore our premium video marketing services including viral short videos, product videos, explainer videos, and video ads.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            Our <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Complete video marketing solutions to help your brand stand out,
                            engage audiences, and drive measurable results.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Card
                                    key={service.slug}
                                    className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-border"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-primary font-semibold text-lg">
                                            {service.price}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link href={`/services/${service.slug}`}>
                                        <Button className="w-full bg-primary hover:bg-orange-600 text-primary-foreground group">
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                            What's Included with Every Service
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-foreground font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Not Sure Which Service is Right for You?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Book a free consultation and we'll help you choose the perfect video marketing strategy for your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                                >
                                    Schedule Free Consultation
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                                >
                                    Request Custom Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
