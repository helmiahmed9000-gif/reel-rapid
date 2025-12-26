import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    CheckCircle2,
    ArrowRight,
    Clock,
    DollarSign,
    Users,
    TrendingUp,
    Zap
} from 'lucide-react';

// Service data
const servicesData: Record<string, any> = {
    'viral-short-videos': {
        title: 'Viral Short Videos',
        subtitle: 'Create Scroll-Stopping Content That Goes Viral',
        description: 'In the age of TikTok, Instagram Reels, and YouTube Shorts, short-form video is king. We create highly engaging 15-60 second videos optimized for maximum reach and engagement across all major platforms.',
        hero: 'Capture attention in seconds and turn viewers into customers with viral-worthy content.',

        whatsIncluded: [
            'Platform-specific optimization (TikTok, Reels, Shorts)',
            'Trending audio and effects integration',
            'Hook development in first 3 seconds',
            'Viral editing techniques',
            'Caption and hashtag strategy',
            'Multiple format variations',
            '3-5 video concepts per package',
            'Unlimited revisions',
        ],

        benefits: [
            {
                title: 'Massive Reach',
                description: 'Short-form content gets 2.5x more engagement than long-form video.',
            },
            {
                title: 'Algorithm-Friendly',
                description: 'Optimized for each platform\'s algorithm to maximize visibility.',
            },
            {
                title: 'Cost-Effective',
                description: 'Lower production costs with higher ROI potential.',
            },
            {
                title: 'Quick Turnaround',
                description: 'Rapid production to capitalize on trending topics.',
            },
        ],

        process: [
            {
                step: 1,
                title: 'Discovery Call',
                description: 'We learn about your brand, goals, and target audience.',
            },
            {
                step: 2,
                title: 'Concept Development',
                description: 'Our team creates 3-5 viral-worthy concepts tailored to your brand.',
            },
            {
                step: 3,
                title: 'Production',
                description: 'Professional filming and editing with trending techniques.',
            },
            {
                step: 4,
                title: 'Optimization',
                description: 'Final touches, platform formatting, and delivery.',
            },
        ],

        pricing: [
            {
                name: 'Starter',
                price: '$499',
                period: '/package',
                features: [
                    '3 viral short videos',
                    'Platform optimization',
                    'Trending audio integration',
                    '2 revision rounds',
                    '5-7 day delivery',
                ],
            },
            {
                name: 'Growth',
                price: '$899',
                period: '/package',
                features: [
                    '5 viral short videos',
                    'Platform optimization',
                    'Trending audio & effects',
                    'Custom hooks development',
                    'Unlimited revisions',
                    '3-5 day delivery',
                    'Performance analytics',
                ],
                popular: true,
            },
            {
                name: 'Enterprise',
                price: '$1,499',
                period: '/package',
                features: [
                    '10 viral short videos',
                    'Multi-platform strategy',
                    'Trend monitoring & execution',
                    'Custom hooks & concepts',
                    'Unlimited revisions',
                    '24-48 hour delivery',
                    'Performance analytics',
                    'Dedicated account manager',
                ],
            },
        ],

        faqs: [
            {
                question: 'What platforms do you optimize for?',
                answer: 'We create videos optimized for TikTok, Instagram Reels, YouTube Shorts, Facebook Reels, and more. Each platform has unique requirements and we ensure your content performs well on all of them.',
            },
            {
                question: 'How do you make content go viral?',
                answer: 'While there\'s no magic formula, we use proven strategies: strong hooks in the first 3 seconds, trending audio, platform-specific editing techniques, optimal posting times, and compelling storytelling that encourages shares.',
            },
            {
                question: 'Can you use my existing footage?',
                answer: 'Absolutely! We can take your raw footage and transform it into engaging short-form content. We also offer full filming services if needed.',
            },
            {
                question: 'What\'s the typical turnaround time?',
                answer: 'Standard turnaround is 5-7 days for the Starter package, 3-5 days for Growth, and 24-48 hours for Enterprise. Rush delivery is available for an additional fee.',
            },
        ],
    },

    'product-videos': {
        title: 'Product Videos',
        subtitle: 'Showcase Your Products in Stunning Detail',
        description: 'Transform your product pages with professional product videos that highlight features, demonstrate benefits, and drive conversions. Perfect for e-commerce, crowdfunding, and product launches.',
        hero: 'Increase conversions by up to 80% with professional product videos.',

        whatsIncluded: [
            'Professional cinematography',
            '4K video quality',
            'Feature highlighting animations',
            'Lifestyle & studio shots',
            'Product demonstration',
            'Text overlays & graphics',
            'Background music & sound design',
            'Multiple length variations (15s, 30s, 60s)',
        ],

        benefits: [
            {
                title: 'Higher Conversions',
                description: 'Product pages with videos convert 80% better than those without.',
            },
            {
                title: 'Reduced Returns',
                description: 'Clear product demonstrations lead to fewer returns and complaints.',
            },
            {
                title: 'Better SEO',
                description: 'Video content improves search rankings and increases time on page.',
            },
            {
                title: 'Multi-Purpose',
                description: 'Use across website, ads, social media, and email campaigns.',
            },
        ],

        process: [
            {
                step: 1,
                title: 'Product Brief',
                description: 'Share product details, key features, and target audience.',
            },
            {
                step: 2,
                title: 'Storyboarding',
                description: 'We create a visual plan for filming and highlighting features.',
            },
            {
                step: 3,
                title: 'Professional Filming',
                description: 'Studio or lifestyle shooting with professional equipment.',
            },
            {
                step: 4,
                title: 'Post-Production',
                description: 'Editing, color grading, graphics, and final delivery.',
            },
        ],

        pricing: [
            {
                name: 'Essential',
                price: '$799',
                period: '/product',
                features: [
                    '1 product video (30-60s)',
                    'Studio filming',
                    'Feature highlights',
                    '4K quality',
                    '2 revision rounds',
                    '7-10 day delivery',
                ],
            },
            {
                name: 'Professional',
                price: '$1,299',
                period: '/product',
                features: [
                    '1 product video (60-90s)',
                    'Studio + lifestyle filming',
                    'Advanced animations',
                    'Text overlays & graphics',
                    '4K quality',
                    'Unlimited revisions',
                    '5-7 day delivery',
                    'Multiple format exports',
                ],
                popular: true,
            },
            {
                name: 'Premium',
                price: '$2,499',
                period: '/product',
                features: [
                    'Multiple video variations',
                    'Studio + lifestyle + action shots',
                    'Professional models/talent',
                    'Advanced motion graphics',
                    'Custom music composition',
                    'Unlimited revisions',
                    '3-5 day delivery',
                    'Dedicated producer',
                ],
            },
        ],

        faqs: [
            {
                question: 'Do I need to send you the product?',
                answer: 'Yes, for studio filming you\'ll need to send us the product. We provide prepaid shipping labels. For remote shoots, we can work with footage you provide or hire local videographers.',
            },
            {
                question: 'What if my product is too large to ship?',
                answer: 'For large products, we can send our team to your location or work with local videographers near you. Contact us for a custom quote.',
            },
            {
                question: 'Can you create videos for multiple products?',
                answer: 'Absolutely! We offer bundle pricing for multiple products. Contact us for a custom package.',
            },
            {
                question: 'Will I own the video?',
                answer: 'Yes, you receive full commercial usage rights to use the video anywhere you want, forever.',
            },
        ],
    },

    // Add other services here...
    'explainer-videos': {
        title: 'Explainer Videos',
        subtitle: 'Simplify Complex Ideas with Engaging Animation',
        description: 'Transform complex concepts into clear, engaging explainer videos that educate your audience and drive action. Perfect for SaaS, tech products, and services.',
        hero: 'Make the complicated simple with animated explainer videos.',
        whatsIncluded: [
            'Custom script development',
            'Professional voiceover (male/female)',
            'Animated graphics & illustrations',
            'Background music',
            'Sound effects',
            'Text overlays & captions',
            'Unlimited revisions',
            'Source files included',
        ],
        benefits: [
            { title: 'Clear Communication', description: 'Explain complex features in 90 seconds or less.' },
            { title: 'Higher Retention', description: 'Viewers retain 95% of a message when watching vs 10% when reading.' },
            { title: 'Increased Trust', description: 'Professional explainers establish credibility and authority.' },
            { title: 'Versatile Use', description: 'Perfect for websites, pitches, training, and more.' },
        ],
        process: [
            { step: 1, title: 'Script Development', description: 'We write a compelling script that explains your product clearly.' },
            { step: 2, title: 'Storyboarding', description: 'Visual planning of each scene and transition.' },
            { step: 3, title: 'Voiceover', description: 'Professional voice talent records the script.' },
            { step: 4, title: 'Animation', description: 'Bring your story to life with custom animations.' },
        ],
        pricing: [
            { name: 'Basic', price: '$1,299', period: '/video', features: ['60-90 second video', 'Script included', 'Professional voiceover', 'Basic animation', '2 revision rounds', '10-14 day delivery'] },
            { name: 'Professional', price: '$2,199', period: '/video', features: ['90-120 second video', 'Script included', 'Professional voiceover', 'Advanced animation', 'Custom illustrations', 'Unlimited revisions', '7-10 day delivery', 'Subtitles included'], popular: true },
            { name: 'Premium', price: '$3,999', period: '/video', features: ['120-180 second video', 'Premium script development', 'Premium voiceover talent', 'Advanced 3D animation', 'Custom character design', 'Unlimited revisions', '5-7 day delivery', 'Multiple language versions'] },
        ],
        faqs: [
            { question: 'Do you write the script?', answer: 'Yes! Script development is included in all packages. We work with you to create a compelling narrative.' },
            { question: 'Can I use my own voiceover?', answer: 'Absolutely! You can provide your own voiceover or choose from our professional voice talent.' },
            { question: 'What animation style do you use?', answer: 'We offer various styles: 2D animation, whiteboard, motion graphics, and 3D. We\'ll recommend the best style for your message.' },
            { question: 'How long should my explainer be?', answer: '60-90 seconds is ideal for most products. We can create longer videos for complex topics.' },
        ],
    },

    'tutorial-videos': {
        title: 'Tutorial Videos',
        subtitle: 'Educate Your Audience with Step-by-Step Guides',
        description: 'Create clear, professional tutorial videos that teach your audience how to use your product or service effectively.',
        hero: 'Build trust and reduce support tickets with comprehensive tutorials.',
        whatsIncluded: ['Screen recording', 'Visual annotations', 'Voiceover narration', 'Chapter markers', 'Captions/subtitles', 'Custom graphics', 'Knowledge base integration', 'Multiple export formats'],
        benefits: [
            { title: 'Reduce Support Costs', description: 'Video tutorials reduce support tickets by up to 70%.' },
            { title: 'Improve Onboarding', description: 'Visual learning accelerates user adoption.' },
            { title: 'Increase Retention', description: 'Well-educated users are more likely to stay.' },
            { title: 'Scale Education', description: 'Create once, educate thousands.' },
        ],
        process: [
            { step: 1, title: 'Content Planning', description: 'Outline the topics and learning objectives.' },
            { step: 2, title: 'Recording', description: 'Screen capture and filming of demonstrations.' },
            { step: 3, title: 'Editing', description: 'Add annotations, callouts, and visual aids.' },
            { step: 4, title: 'Voiceover', description: 'Professional narration and final polish.' },
        ],
        pricing: [
            { name: 'Single Tutorial', price: '$599', period: '/video', features: ['Up to 10 minutes', 'Screen recording', 'Basic annotations', 'Voiceover', '2 revisions', '5-7 day delivery'] },
            { name: 'Tutorial Series', price: '$1,799', period: '/series', features: ['3-5 tutorial videos', 'Up to 30 minutes total', 'Advanced annotations', 'Professional voiceover', 'Unlimited revisions', '7-10 day delivery', 'Chapter markers'], popular: true },
            { name: 'Complete Course', price: '$3,999', period: '/course', features: ['10+ tutorial videos', 'Up to 90 minutes total', 'Custom graphics package', 'Professional studio', 'Multi-language captions', 'Unlimited revisions', '14-21 day delivery', 'LMS integration'] },
        ],
        faqs: [
            { question: 'What software do you record?', answer: 'We can create tutorials for any software, web application, mobile app, or physical process.' },
            { question: 'Can you host the videos?', answer: 'We deliver files you can host anywhere. We can also help with hosting recommendations.' },
            { question: 'Do you offer interactive elements?', answer: 'Yes! We can add quizzes, clickable buttons, and interactive hotspots for an additional fee.' },
            { question: 'Can you update existing tutorials?', answer: 'Yes, we offer update services to refresh outdated content at a discounted rate.' },
        ],
    },

    'storytelling-videos': {
        title: 'Storytelling Videos',
        subtitle: 'Connect Emotionally Through Compelling Narratives',
        description: 'Build deeper connections with your audience through authentic brand storytelling that inspires action and builds loyalty.',
        hero: 'Stories sell. Facts tell. Let us tell your story.',
        whatsIncluded: ['Narrative development', 'Professional filming', 'Interview coordination', 'Cinematic editing', 'Color grading', 'Licensed music', 'Sound design', 'Multiple cuts for different platforms'],
        benefits: [
            { title: 'Emotional Connection', description: 'Stories create 22x more memorable experiences than facts alone.' },
            { title: 'Brand Loyalty', description: 'Authentic storytelling builds deeper customer relationships.' },
            { title: 'Higher Engagement', description: 'Story-driven content gets 3x more shares.' },
            { title: 'Differentiation', description: 'Stand out in a crowded market with unique narratives.' },
        ],
        process: [
            { step: 1, title: 'Story Discovery', description: 'Uncover your brand\'s unique story and message.' },
            { step: 2, title: 'Script & Storyboard', description: 'Craft a compelling narrative arc.' },
            { step: 3, title: 'Production', description: 'Cinematic filming with professional crew.' },
            { step: 4, title: 'Post-Production', description: 'Editing, color, sound, and final delivery.' },
        ],
        pricing: [
            { name: 'Brand Story', price: '$1,499', period: '/video', features: ['60-90 second video', 'Single location shoot', 'Basic cinematography', 'Licensed music', '2 revisions', '10-14 day delivery'] },
            { name: 'Customer Story', price: '$2,499', period: '/video', features: ['2-3 minute video', 'Interview filming', 'B-roll footage', 'Professional cinematography', 'Color grading', 'Unlimited revisions', '7-10 day delivery', 'Testimonial integration'], popular: true },
            { name: 'Documentary Style', price: '$4,999', period: '/video', features: ['5-10 minute video', 'Multiple locations', 'Multiple interviews', 'Cinematic production', 'Advanced color & sound', 'Unlimited revisions', '14-21 day delivery', 'Director involvement'] },
        ],
        faqs: [
            { question: 'What makes a good brand story?', answer: 'Authenticity, emotion, and a clear message. We help you identify what makes your brand unique and craft a narrative around it.' },
            { question: 'Do you provide actors?', answer: 'We typically feature real employees, customers, or founders for authenticity. We can provide actors if needed.' },
            { question: 'Where do you film?', answer: 'We can film at your location, our studio, or scenic locations that fit your brand story.' },
            { question: 'How long should it be?', answer: 'Most brand stories are 60-180 seconds. Longer documentary-style pieces can be 5-10 minutes.' },
        ],
    },

    'video-ads': {
        title: 'Video Ads',
        subtitle: 'High-Converting Ads That Maximize ROAS',
        description: 'Create attention-grabbing video advertisements optimized for Facebook, Instagram, YouTube, TikTok, and display networks.',
        hero: 'Turn ad spend into revenue with data-driven video ads.',
        whatsIncluded: ['A/B test variations', 'Platform-specific formats', 'Conversion-focused copy', 'Professional filming/animation', 'Multiple length variations (6s, 15s, 30s)', 'CTA optimization', 'Landing page alignment', 'Performance tracking setup'],
        benefits: [
            { title: 'Higher ROAS', description: 'Our video ads average 4-6x return on ad spend.' },
            { title: 'Better CPM', description: 'Video ads typically have 30% lower cost per mille.' },
            { title: 'Platform Optimized', description: 'Format and messaging tailored for each ad platform.' },
            { title: 'A/B Tested', description: 'Multiple variations to find your best performer.' },
        ],
        process: [
            { step: 1, title: 'Audience Research', description: 'Understand your target audience and messaging.' },
            { step: 2, title: 'Creative Development', description: 'Create multiple ad concepts for testing.' },
            { step: 3, title: 'Production', description: 'Professional filming or animation.' },
            { step: 4, title: 'Optimization', description: 'Format for each platform and deliver.' },
        ],
        pricing: [
            { name: 'Single Ad', price: '$899', period: '/ad', features: ['1 video ad (15-30s)', 'Platform optimization', '2 A/B variations', 'Basic analytics setup', '2 revisions', '5-7 day delivery'] },
            { name: 'Ad Campaign', price: '$2,499', period: '/campaign', features: ['3-5 video ads', 'Multi-platform formats', '5 A/B variations', 'Advanced analytics', 'Unlimited revisions', '7-10 day delivery', 'Performance optimization'], popular: true },
            { name: 'Enterprise', price: '$5,999', period: '/campaign', features: ['10+ video ads', 'Full funnel strategy', 'Unlimited variations', 'Advanced analytics & reporting', 'Unlimited revisions', '10-14 day delivery', 'Dedicated media buyer', 'Monthly optimization'] },
        ],
        faqs: [
            { question: 'Which platforms do you create ads for?', answer: 'Facebook, Instagram, YouTube, TikTok, LinkedIn, Twitter, and display networks. Each gets platform-specific optimization.' },
            { question: 'Do you run the ads too?', answer: 'We create the ads. For ad management services, we partner with specialized agencies or can recommend one.' },
            { question: 'What\'s the ideal ad length?', answer: 'For most platforms, 15-30 seconds works best. We also create 6-second bumper ads and longer form for YouTube.' },
            { question: 'How many variations should I test?', answer: 'We recommend at least 3-5 variations testing different hooks, offers, and CTAs to find your winner.' },
        ],
    },
};

// Generate static params for all service pages
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-block">
                            <Link
                                href="/services"
                                className="text-primary hover:text-orange-600 font-medium text-sm flex items-center gap-2 justify-center mb-4"
                            >
                                ← Back to Services
                            </Link>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            {service.title}
                        </h1>
                        <p className="text-2xl text-primary font-semibold">
                            {service.subtitle}
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                        <div className="pt-6">
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary hover:bg-orange-600 text-lg px-8 py-6">
                                    Get Started Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What's Included */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                        What's Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {service.whatsIncluded.map((item: string) => (
                            <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Benefits */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                        Why Choose This Service
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.benefits.map((benefit: any) => (
                            <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-all">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Process */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                        Our Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {service.process.map((step: any) => (
                            <div key={step.step} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Pricing */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-4">
                        Pricing Packages
                    </h2>
                    <p className="text-xl text-muted-foreground text-center mb-12">
                        Choose the package that fits your needs
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {service.pricing.map((pkg: any) => (
                            <Card
                                key={pkg.name}
                                className={`p-8 ${pkg.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-border'}`}
                            >
                                {pkg.popular && (
                                    <div className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {pkg.name}
                                </h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                                    <span className="text-muted-foreground">{pkg.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature: string) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <Button
                                        className={`w-full ${pkg.popular ? 'bg-primary hover:bg-orange-600 text-primary-foreground' : 'bg-secondary hover:bg-accent text-foreground'}`}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {service.faqs.map((faq: any) => (
                            <Card key={faq.question} className="p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and create a custom solution that fits your needs and budget.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                                Schedule Free Consultation
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
