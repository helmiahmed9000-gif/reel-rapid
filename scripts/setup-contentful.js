const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
    console.error('Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN in .env.local');
    process.exit(1);
}

const client = contentful.createClient({
    accessToken: MANAGEMENT_TOKEN,
});

async function run() {
    try {
        const space = await client.getSpace(SPACE_ID);
        const environment = await space.getEnvironment('master');

        console.log('Connected to space:', space.name);

        // 1. Create Author Content Type
        let authorType;
        try {
            authorType = await environment.getContentType('author');
            console.log('Author content type already exists, updating...');
        } catch (e) {
            console.log('Creating Author content type...');
            authorType = await environment.createContentTypeWithId('author', {
                name: 'Author',
                displayField: 'name',
                fields: [
                    {
                        id: 'name',
                        name: 'Name',
                        type: 'Symbol',
                        required: true,
                    },
                    {
                        id: 'role',
                        name: 'Role',
                        type: 'Symbol',
                        required: false,
                    },
                    {
                        id: 'bio',
                        name: 'Bio',
                        type: 'Text',
                        required: false,
                    },
                    {
                        id: 'avatar',
                        name: 'Avatar',
                        type: 'Link',
                        linkType: 'Asset',
                        required: false,
                    },
                    {
                        id: 'twitter',
                        name: 'Twitter URL',
                        type: 'Symbol',
                        required: false,
                    },
                    {
                        id: 'linkedin',
                        name: 'LinkedIn URL',
                        type: 'Symbol',
                        required: false,
                    },
                    {
                        id: 'website',
                        name: 'Website URL',
                        type: 'Symbol',
                        required: false,
                    },
                ],
            });
        }

        // Update fields if needed or just publish
        await authorType.publish();
        console.log('Author content type published.');

        // 2. Create Category Content Type
        let categoryType;
        try {
            categoryType = await environment.getContentType('category');
            console.log('Category content type already exists, updating...');
        } catch (e) {
            console.log('Creating Category content type...');
            categoryType = await environment.createContentTypeWithId('category', {
                name: 'Category',
                displayField: 'name',
                fields: [
                    {
                        id: 'name',
                        name: 'Name',
                        type: 'Symbol',
                        required: true,
                    },
                    {
                        id: 'slug',
                        name: 'Slug',
                        type: 'Symbol',
                        required: true,
                        validations: [{ unique: true }],
                    },
                ],
            });
        }
        await categoryType.publish();
        console.log('Category content type published.');

        // 3. Create Blog Post Content Type
        let blogPostType;
        try {
            blogPostType = await environment.getContentType('blogPost');
            console.log('Blog Post content type already exists, updating...');
        } catch (e) {
            console.log('Creating Blog Post content type...');
            blogPostType = await environment.createContentTypeWithId('blogPost', {
                name: 'Blog Post',
                displayField: 'title',
                fields: [
                    {
                        id: 'title',
                        name: 'Title',
                        type: 'Symbol',
                        required: true,
                    },
                    {
                        id: 'slug',
                        name: 'Slug',
                        type: 'Symbol',
                        required: true,
                        validations: [{ unique: true }],
                    },
                    {
                        id: 'excerpt',
                        name: 'Excerpt',
                        type: 'Text', // Long text
                        required: true,
                    },
                    {
                        id: 'content',
                        name: 'Content',
                        type: 'Text', // Markdown content
                        required: true,
                    },
                    {
                        id: 'coverImage',
                        name: 'Cover Image',
                        type: 'Link',
                        linkType: 'Asset',
                        required: false,
                    },
                    {
                        id: 'date',
                        name: 'Date',
                        type: 'Date',
                        required: true,
                    },
                    {
                        id: 'readTime',
                        name: 'Read Time',
                        type: 'Symbol', // e.g. "5 min read"
                        required: false,
                    },
                    {
                        id: 'category',
                        name: 'Category',
                        type: 'Link',
                        linkType: 'Entry',
                        required: true,
                        validations: [
                            {
                                linkContentType: ['category']
                            }
                        ]
                    },
                    {
                        id: 'author',
                        name: 'Author',
                        type: 'Link',
                        linkType: 'Entry',
                        required: true,
                        validations: [
                            {
                                linkContentType: ['author']
                            }
                        ]
                    },
                    {
                        id: 'featured',
                        name: 'Featured',
                        type: 'Boolean',
                        required: false,
                    },
                ],
            });
        }
        await blogPostType.publish();
        console.log('Blog Post content type published.');

        console.log('All content types created and published successfully!');

    } catch (error) {
        console.error('Error creating content types:', error);
    }
}

run();
