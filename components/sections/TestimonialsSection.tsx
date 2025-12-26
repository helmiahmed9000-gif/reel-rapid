import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart Inc',
        content: 'Reel Rapid transformed our marketing strategy. Their viral short videos generated over 10M views and tripled our conversion rate.',
        rating: 5,
        avatar: 'SJ',
    },
    {
        name: 'Michael Chen',
        role: 'Marketing Director, EcoLife',
        content: 'The product videos they created are stunning. Sales increased by 250% within the first month of launch. Absolutely phenomenal work!',
        rating: 5,
        avatar: 'MC',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder, FitnessPro',
        content: 'Professional, creative, and results-driven. They understood our brand vision perfectly and delivered beyond expectations.',
        rating: 5,
        avatar: 'ER',
    },
    {
        name: 'David Thompson',
        role: 'CMO, FinanceHub',
        content: 'Their explainer videos simplified our complex financial products. Customer engagement is up 180%. Couldn\'t be happier!',
        rating: 5,
        avatar: 'DT',
    },
    {
        name: 'Lisa Wang',
        role: 'Brand Manager, StyleCo',
        content: 'The storytelling videos created an emotional connection with our audience. Brand awareness and loyalty have skyrocketed.',
        rating: 5,
        avatar: 'LW',
    },
    {
        name: 'James Miller',
        role: 'VP Marketing, GrowthTech',
        content: 'Fast turnaround without sacrificing quality. Their video ads generated a 4x ROAS. Best investment we\'ve made this year.',
        rating: 5,
        avatar: 'JM',
    },
];

export function TestimonialsSection() {
    return (
        <section className="w-full py-24 bg-background">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                        Client Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        What Our <span className="text-primary">Clients Say</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Don't just take our word for it—hear from brands we've helped grow.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 pt-12 border-t border-border">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                            <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">500+</div>
                            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">200+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">99%</div>
                            <div className="text-sm text-muted-foreground">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
