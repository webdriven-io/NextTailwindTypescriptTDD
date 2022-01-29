/** @type {import("next").NextConfig} */

const path = require('path');

module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/en/post/:path*',
                destination: '/post/:path*',
            },
        ];
    },
    images: {
        domains: [],
        deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // formats: ['image/avif', 'image/webp'],
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
