import { createClient, Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface AuthorSkeleton extends EntrySkeletonType {
    contentTypeId: 'author';
    fields: {
        name: EntryFieldTypes.Symbol;
        role: EntryFieldTypes.Symbol;
        bio: EntryFieldTypes.Text;
        avatar: EntryFieldTypes.AssetLink;
        twitter: EntryFieldTypes.Symbol;
        linkedin: EntryFieldTypes.Symbol;
        website: EntryFieldTypes.Symbol;
    };
}

export interface CategorySkeleton extends EntrySkeletonType {
    contentTypeId: 'category';
    fields: {
        name: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
    };
}

export interface BlogPostSkeleton extends EntrySkeletonType {
    contentTypeId: 'blogPost';
    fields: {
        title: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
        excerpt: EntryFieldTypes.Text;
        content: EntryFieldTypes.Text;
        coverImage: EntryFieldTypes.AssetLink;
        date: EntryFieldTypes.Date;
        readTime: EntryFieldTypes.Symbol;
        category: EntryFieldTypes.EntryLink<CategorySkeleton>;
        author: EntryFieldTypes.EntryLink<AuthorSkeleton>;
        featured: EntryFieldTypes.Boolean;
        parentArticle: EntryFieldTypes.EntryLink<BlogPostSkeleton>;
    };
}

export async function getBlogPosts() {
    const response = await client.getEntries<BlogPostSkeleton>({
        content_type: 'blogPost',
        order: ['-fields.date'],
        include: 2, // Include linked entries (parent article)
    });
    return response.items;
}

export async function getBlogPostBySlug(slug: string) {
    const response = await client.getEntries<BlogPostSkeleton>({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
        include: 2,
    });
    return response.items[0];
}

export async function getBlogPostByPath(slugPath: string[]) {
    // If single slug, just find by slug
    if (slugPath.length === 1) {
        return getBlogPostBySlug(slugPath[0]);
    }

    // If nested path (parent/child), find the child with matching parent
    const childSlug = slugPath[slugPath.length - 1];
    const parentSlug = slugPath[slugPath.length - 2];

    const response = await client.getEntries<BlogPostSkeleton>({
        content_type: 'blogPost',
        'fields.slug': childSlug,
        include: 2,
    });

    // Find the post where parent matches
    const post = response.items.find(item => {
        const parent = item.fields.parentArticle;
        if (parent && typeof parent === 'object' && 'fields' in parent) {
            return (parent.fields as any).slug === parentSlug;
        }
        return false;
    });

    return post || response.items[0];
}

export async function getFeaturedBlogPosts() {
    const response = await client.getEntries<BlogPostSkeleton>({
        content_type: 'blogPost',
        'fields.featured': true,
        order: ['-fields.date'],
        include: 2,
    });
    return response.items;
}

// Helper to construct full URL path for a blog post
export function getBlogPostUrl(post: Entry<BlogPostSkeleton, undefined, string>): string {
    const slug = post.fields.slug;
    const parent = post.fields.parentArticle;

    if (parent && typeof parent === 'object' && 'fields' in parent) {
        const parentSlug = (parent.fields as any).slug;
        return `/blog/${parentSlug}/${slug}`;
    }

    return `/blog/${slug}`;
}
