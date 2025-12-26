import Link from 'next/link';
import { Container } from './Container';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const services = [
        { name: 'Viral Short Videos', href: '/services/viral-short-videos' },
        { name: 'Product Videos', href: '/services/product-videos' },
        { name: 'Explainer Videos', href: '/services/explainer-videos' },
        { name: 'Tutorial Videos', href: '/services/tutorial-videos' },
        { name: 'Storytelling Videos', href: '/services/storytelling-videos' },
        { name: 'Video Ads', href: '/services/video-ads' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'YouTube', href: '#', icon: Youtube },
    ];

    return (
        <footer className="w-full bg-gradient-to-b from-background to-orange-50/30 border-t border-border mt-20">
            <Container className="py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">RR</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">Reel Rapid</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Transforming brands through the power of video marketing.
                            We create engaging content that drives results.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-primary" />
                                <a href="mailto:hello@reelrapid.com" className="hover:text-primary transition-colors">
                                    hello@reelrapid.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                                <span>123 Creative Street, NY 10001</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to our newsletter for the latest video marketing tips and insights.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <p>© {currentYear} Reel Rapid Agency. All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
