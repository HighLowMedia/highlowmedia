/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    output: 'export',
    // Optional: Change the output directory `out` -> `docs` (for Github pages)
    distDir: 'docs',
};

export default nextConfig;
