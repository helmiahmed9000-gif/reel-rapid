import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-semibold">
                                    🎬 Premium Video Marketing
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                                Video Marketing{' '}
                                <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                                    Agency
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                                We create stunning video content that captivates audiences and drives real results for your brand.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg px-8 py-6 group"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-primary text-primary hover:bg-orange-50 text-lg px-8 py-6 group"
                                >
                                    <Play className="mr-2 w-5 h-5" />
                                    View Our Services
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">500+</div>
                                <div className="text-sm text-muted-foreground">Videos Created</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">200+</div>
                                <div className="text-sm text-muted-foreground">Happy Clients</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">50M+</div>
                                <div className="text-sm text-muted-foreground">Views Generated</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse delay-75"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
