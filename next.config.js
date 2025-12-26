/** @type {import('next').NextConfig} */
const nextConfig = {
    // Explicitly set the root directory
    experimental: {
        turbo: {
            root: __dirname,
        },
    },
};

module.exports = nextConfig;
