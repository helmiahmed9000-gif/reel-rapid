import { Container } from '@/components/layout/Container';
import { CheckCircle2, Target, Zap, Award } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'We focus on creating videos that drive real business results, not just views.',
    },
    {
        icon: Zap,
        title: 'Fast Turnaround',
        description: 'Quick production timelines without compromising on quality or creativity.',
    },
    {
        icon: Award,
        title: 'Award-Winning',
        description: 'Our team has won multiple industry awards for creative excellence.',
    },
    {
        icon: CheckCircle2,
        title: 'Full Service',
        description: 'From concept to final edit, we handle every aspect of video production.',
    },
];

const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3x', label: 'Average ROI Increase' },
    { value: '24/7', label: 'Support Available' },
    { value: '100+', label: 'Industry Awards' },
];

export function WhyChooseUsSection() {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-white to-orange-50/30">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                                Why Choose Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                We Turn Views Into{' '}
                                <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                                    Revenue
                                </span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We're not just video creators—we're growth partners. Our data-driven approach ensures every frame serves a purpose and every second counts.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="text-5xl font-bold bg-gradient-to-br from-primary to-orange-600 bg-clip-text text-transparent mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Benefits */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">Strategic Planning</h3>
                        <p className="text-white/90">
                            Every video starts with a comprehensive strategy aligned with your business goals.
                        </p>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">Creative Excellence</h3>
                        <p className="text-muted-foreground">
                            Award-winning creative team that brings fresh perspectives to every project.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 border border-primary/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">Data-Driven</h3>
                        <p className="text-muted-foreground">
                            We use analytics and A/B testing to continuously optimize your video performance.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
