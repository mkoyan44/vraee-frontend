/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Keep admin routes as-is
            {
                source: '/admin_hftasd32cdv/:path*',
                destination: '/admin_hftasd32cdv/:path*',
            },
            {
                source: '/api/:path*',
                destination: '/api/:path*',
            },
        ];
    },
};

export default nextConfig;
