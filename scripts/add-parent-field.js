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

        // Get the existing Blog Post content type
        const blogPostType = await environment.getContentType('blogPost');
        console.log('Retrieved Blog Post content type');

        // Check if parentArticle field already exists
        const hasParentField = blogPostType.fields.some(f => f.id === 'parentArticle');

        if (!hasParentField) {
            // Add the parentArticle field
            blogPostType.fields.push({
                id: 'parentArticle',
                name: 'Parent Article',
                type: 'Link',
                linkType: 'Entry',
                required: false,
                validations: [
                    {
                        linkContentType: ['blogPost']
                    }
                ]
            });

            // Update the content type
            const updatedType = await blogPostType.update();
            console.log('Added parentArticle field');

            // Publish the updated content type
            await updatedType.publish();
            console.log('Blog Post content type published with parentArticle field!');
        } else {
            console.log('parentArticle field already exists');
        }

        console.log('Done!');

    } catch (error) {
        console.error('Error updating content type:', error);
    }
}

run();
