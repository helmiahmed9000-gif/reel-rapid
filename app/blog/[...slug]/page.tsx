import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { getBlogPostByPath, getBlogPosts, getBlogPostUrl } from '@/lib/contentful';

export const revalidate = 0; // Always fetch fresh content

// Generate static params for both single and nested slugs
export async function generateStaticParams() {
    const posts = await getBlogPosts();
    const params: { slug: string[] }[] = [];

    posts.forEach((post) => {
        const parent = post.fields.parentArticle;
        if (parent && typeof parent === 'object' && 'fields' in parent) {
            // Nested: /blog/parent-slug/child-slug
            const parentSlug = (parent.fields as any).slug;
            params.push({ slug: [parentSlug, post.fields.slug] });
        } else {
            // Single: /blog/slug
            params.push({ slug: [post.fields.slug] });
        }
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const postEntry = await getBlogPostByPath(slug);

    if (!postEntry) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: postEntry.fields.title,
        description: postEntry.fields.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const postEntry = await getBlogPostByPath(slug);

    if (!postEntry) {
        notFound();
    }

    const fields = postEntry.fields;

    // Fetch all posts for related posts
    const allPosts = await getBlogPosts();
    // Get related posts (exclude current post)
    const relatedPosts = allPosts
        .filter((p) => p.fields.slug !== fields.slug)
        .slice(0, 3)
        .map((p) => {
            const f = p.fields;
            const cat = f.category && typeof f.category === 'object' && 'fields' in f.category ? (f.category.fields as any).name : 'Uncategorized';
            const url = getBlogPostUrl(p);
            return {
                slug: f.slug,
                title: f.title,
                excerpt: f.excerpt,
                category: cat,
                url: url,
                image: f.coverImage && typeof f.coverImage === 'object' && 'fields' in f.coverImage ? `https:${(f.coverImage as any).fields.file.url}` : null
            };
        });

    // Formatting fields
    const category = fields.category && typeof fields.category === 'object' && 'fields' in fields.category ? (fields.category.fields as any).name : 'Uncategorized';
    const date = fields.date;
    const readTime = fields.readTime || '5 min read';

    let imageUrl = null;
    if (fields.coverImage && typeof fields.coverImage === 'object' && 'fields' in fields.coverImage) {
        const asset = fields.coverImage as any;
        if (asset.fields.file && asset.fields.file.url) {
            imageUrl = `https:${asset.fields.file.url}`;
        }
    }

    // Author handling
    let authorName = 'Unknown Author';
    let authorRole = 'Contributor';
    let authorBio = '';
    let authorSocials: any = {};
    let authorInitials = 'UA';

    if (fields.author && typeof fields.author === 'object' && 'fields' in fields.author) {
        const authorFields = (fields.author as any).fields;
        authorName = authorFields.name || 'Unknown Author';
        authorRole = authorFields.role || 'Contributor';
        authorBio = authorFields.bio || '';
        authorInitials = authorName.split(' ').map((n: string) => n[0]).join('');

        if (authorFields.twitter) authorSocials.twitter = authorFields.twitter;
        if (authorFields.linkedin) authorSocials.linkedin = authorFields.linkedin;
        if (authorFields.website) authorSocials.website = authorFields.website;
    }

    // Extract headings for TOC
    const slugger = new GithubSlugger();
    const headings = fields.content
        .split('\n')
        .filter((line: string) => line.match(/^#{2,3}\s/))
        .map((line: string) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (!match) return null;
            return {
                level: match[1].length,
                text: match[2],
                slug: slugger.slug(match[2]),
            };
        })
        .filter(Boolean) as { level: number; text: string; slug: string }[];

    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-100/30 pt-32 pb-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-primary hover:text-orange-600 font-medium mb-6 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                {category}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {fields.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            {fields.excerpt}
                        </p>

                        <div className="flex items-center justify-between border-t border-b border-border py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {authorInitials}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{authorName}</div>
                                    <div className="text-sm text-muted-foreground">{authorRole}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Image Placeholder */}
            <section className="w-full bg-background">
                <Container>
                    <div className="max-w-4xl mx-auto -mt-6 mb-12">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-orange-200 rounded-2xl relative overflow-hidden shadow-xl">
                            {imageUrl ? (
                                <img src={imageUrl} alt={fields.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-9xl opacity-20">🎬</div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Article Content */}
            <section className="w-full py-12 bg-background">
                <Container>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Table of Contents - Desktop */}
                            <div className="hidden lg:block lg:col-span-3">
                                <TableOfContents headings={headings} />
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-9">
                                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground">
                                    <Markdown rehypePlugins={[rehypeSlug]}>
                                        {fields.content}
                                    </Markdown>

                                    <AuthorBio
                                        name={authorName}
                                        role={authorRole}
                                        bio={authorBio}
                                        socials={authorSocials}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Posts */}
            <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
                <Container>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((relatedPost) => (
                            <Link key={relatedPost.slug} href={relatedPost.url} className="group">
                                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                                    <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 relative overflow-hidden">
                                        {relatedPost.image ? (
                                            <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-5xl opacity-20">📹</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs text-primary font-semibold">{relatedPost.category}</span>
                                        <h3 className="text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="w-full py-20 bg-background">
                <Container>
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Create Amazing Videos?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let our team of experts help you create video content that drives real results.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                                Get Started Today
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
