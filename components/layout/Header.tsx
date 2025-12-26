'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Viral Short Videos', href: '/services/viral-short-videos' },
        { name: 'Product Videos', href: '/services/product-videos' },
        { name: 'Explainer Videos', href: '/services/explainer-videos' },
        { name: 'Tutorial Videos', href: '/services/tutorial-videos' },
        { name: 'Storytelling Videos', href: '/services/storytelling-videos' },
        { name: 'Video Ads', href: '/services/video-ads' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
                : 'bg-background'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl">RR</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            Reel Rapid
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors font-medium"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-2xl shadow-lg overflow-hidden transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                    }`}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                {services.map((service, index) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className={`block px-4 py-3 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${index !== services.length - 1 ? 'border-b border-border/50' : ''
                                            }`}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/blog"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <Button className="bg-primary text-primary-foreground hover:bg-orange-600 shadow-sm hover:shadow-md transition-all hover:scale-105">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-foreground hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-foreground hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>

                            {/* Services - Mobile */}
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-muted-foreground">Services</p>
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="block pl-4 text-foreground/80 hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/blog"
                                className="text-foreground hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="text-foreground hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-orange-600">
                                    Get Started
                                </Button>
                            </Link>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}
