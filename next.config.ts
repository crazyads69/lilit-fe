import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.node$/,
            use: "file-loader",
        });

        // Optimize images
        config.module.rules.push({
            test: /\.(gif|png|jpe?g|webp)$/i,
            use: [
                {
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg: {
                            progressive: true,
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.9],
                            speed: 4,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75,
                        },
                    },
                },
            ],
        });

        if (!isServer) {
            // Optimize client-side bundle
            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            };
        }

        return config;
    },

    // Enhanced image configuration
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/**",
            },
            // Add more patterns for other image sources if needed, e.g.:
            // {
            //   protocol: 'https',
            //   hostname: 'example.com',
            //   port: '',
            //   pathname: '/images/**',
            // }
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Build configuration
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: false,
    },
    output: "standalone",

    // Fixed experimental features for Turbopack compatibility
    experimental: {
        turbo: {
            resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
        },
        optimizeCss: true,
        scrollRestoration: true,
    },

    // Enhanced security headers
    headers: async () => [
        {
            source: "/(.*)",
            headers: [
                {
                    key: "X-XSS-Protection",
                    value: "1; mode=block",
                },
                {
                    key: "X-Frame-Options",
                    value: "SAMEORIGIN",
                },
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "Referrer-Policy",
                    value: "strict-origin-when-cross-origin",
                },
                {
                    key: "Permissions-Policy",
                    value: "camera=(), microphone=(), geolocation=()",
                },
                {
                    key: "Content-Security-Policy",
                    value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
                },
            ],
        },
    ],

    // Performance optimization
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
        styledComponents: true,
    },

    // Environment configuration
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },

    // Internationalization
    i18n: {
        locales: ["vi"],
        defaultLocale: "vi",
    },

    redirects: async () => {
        return [
            // Add your redirects here if needed
        ];
    },

    rewrites: async () => {
        return [
            // Add your rewrites here if needed
        ];
    },

    // Build optimization
    poweredByHeader: false,
    generateEtags: true,
    compress: true,
};

export default nextConfig;
