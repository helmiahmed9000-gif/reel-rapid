import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: 'Results-Focused',
            description: 'We measure success by your business growth, not just views and likes.',
        },
        {
            icon: Lightbulb,
            title: 'Creative Excellence',
            description: 'Every video is crafted with creativity that stands out and captures attention.',
        },
        {
            icon: Users,
            title: 'Client Partnership',
            description: 'We work as an extension of your team, understanding your goals deeply.',
        },
        {
            icon: Heart,
            title: 'Passion-Driven',
            description: 'We love what we do, and it shows in every frame we produce.',
        },
    ];

    const stats = [
        { value: '500+', label: 'Videos Produced' },
        { value: '200+', label: 'Happy Clients' },
        { value: '50M+', label: 'Total Views' },
        { value: '8', label: 'Years Experience' },
    ];

    const team = [
        {
            name: 'Alex Rivera',
            role: 'Founder & Creative Director',
            avatar: 'AR',
            bio: '15 years in video production with a passion for storytelling.',
        },
        {
            name: 'Sam Taylor',
            role: 'Head of Strategy',
            avatar: 'ST',
            bio: 'Data-driven marketing expert with 10+ years experience.',
        },
        {
            name: 'Jordan Lee',
            role: 'Senior Video Editor',
            avatar: 'JL',
            bio: 'Award-winning editor specializing in viral content.',
        },
        {
            name: 'Casey Morgan',
            role: 'Motion Graphics Lead',
            avatar: 'CM',
            bio: 'Creative animator bringing ideas to life through motion.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            About <span className="text-primary">Reel Rapid</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            We're a team of video marketing specialists dedicated to helping brands
                            grow through the power of compelling visual storytelling.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Story */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                <p>
                                    Founded in 2016, Reel Rapid Agency started with a simple mission:
                                    make video marketing accessible and effective for businesses of all sizes.
                                </p>
                                <p>
                                    What began as a small team of passionate creatives has grown into a
                                    full-service video marketing agency serving over 200 clients worldwide.
                                </p>
                                <p>
                                    Today, we've produced over 500 videos that have generated more than
                                    50 million views, helping brands increase their visibility, engagement,
                                    and revenue through the power of video.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-white">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-3">Our Mission</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        To empower brands with video content that doesn't just look good,
                                        but drives measurable business results and creates lasting connections
                                        with audiences.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-3">Our Vision</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        To be the world's most trusted video marketing partner, known for
                                        transforming brands through creative excellence and strategic thinking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Our <span className="text-primary">Values</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {value.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Stats */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-orange-600 bg-clip-text text-transparent mb-3">
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

            {/* Team */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Meet Our <span className="text-primary">Team</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The creative minds behind your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <Card key={member.name} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium text-sm mb-3">
                                    {member.role}
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    {member.bio}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's create something amazing. Get in touch to discuss your video marketing needs.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
}
