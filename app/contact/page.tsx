'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                budget: '',
                message: '',
            });
        }, 1500);
    };

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                            Let's <span className="text-primary">Connect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Ready to create amazing video content? We'd love to hear about your project.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Form & Info */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <Card className="p-4 flex items-start gap-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <a href="mailto:contact@reelrapidagency.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            contact@reelrapidagency.com
                                        </a>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-start gap-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <a href="tel:+212655048286" className="text-muted-foreground hover:text-primary transition-colors">
                                            +212 655-048286
                                        </a>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-start gap-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                                        <p className="text-muted-foreground">
                                            Agadir, Morocco
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Response Time */}
                            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                                <p className="text-white/90 text-sm">
                                    We typically respond within 2-4 hours during business hours (9 AM - 6 PM EST, Mon-Fri).
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="p-8">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-3">
                                            Thank You!
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            Your message has been sent successfully. We'll get back to you within 24 hours.
                                        </p>
                                        <Button
                                            onClick={() => setIsSubmitted(false)}
                                            className="bg-primary hover:bg-orange-600"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                                placeholder="John Doe"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email & Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                    placeholder="john@example.com"
                                                    className={errors.email ? 'border-red-500' : ''}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Label htmlFor="phone">Phone Number (Optional)</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange('phone', e.target.value)}
                                                    placeholder="+212 655-048286"
                                                />
                                            </div>
                                        </div>

                                        {/* Service & Budget */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="service">Service Interested In *</Label>
                                                <Select
                                                    value={formData.service}
                                                    onValueChange={(value) => handleChange('service', value)}
                                                >
                                                    <SelectTrigger className={errors.service ? 'border-red-500' : ''}>
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="viral-short-videos">Viral Short Videos</SelectItem>
                                                        <SelectItem value="product-videos">Product Videos</SelectItem>
                                                        <SelectItem value="explainer-videos">Explainer Videos</SelectItem>
                                                        <SelectItem value="tutorial-videos">Tutorial Videos</SelectItem>
                                                        <SelectItem value="storytelling-videos">Storytelling Videos</SelectItem>
                                                        <SelectItem value="video-ads">Video Ads</SelectItem>
                                                        <SelectItem value="not-sure">Not Sure / Multiple</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.service && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Label htmlFor="budget">Budget Range (Optional)</Label>
                                                <Select
                                                    value={formData.budget}
                                                    onValueChange={(value) => handleChange('budget', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select budget range" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                                                        <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                                                        <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                                                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <Label htmlFor="message">Project Details *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleChange('message', e.target.value)}
                                                placeholder="Tell us about your project, goals, and timeline..."
                                                rows={6}
                                                className={errors.message ? 'border-red-500' : ''}
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-orange-600 text-lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                'Sending...'
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                        Before You Reach Out
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                What's the typical turnaround time?
                            </h3>
                            <p className="text-muted-foreground">
                                Most projects take 5-14 days depending on complexity. Rush delivery available.
                            </p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                Do you offer payment plans?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes! We accept 50% upfront and 50% upon completion. Custom terms available for large projects.
                            </p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                Can you work with my brand guidelines?
                            </h3>
                            <p className="text-muted-foreground">
                                Absolutely! We adapt to your existing branding, fonts, colors, and style guides.
                            </p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                What if I need revisions?
                            </h3>
                            <p className="text-muted-foreground">
                                Most packages include 2-3 revision rounds. Premium packages offer unlimited revisions.
                            </p>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
