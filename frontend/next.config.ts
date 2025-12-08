/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Сначала проверяем маршруты, которые НЕ должны переписываться
            {
                source: '/admin_hftasd32cdv/:path*',
                destination: '/admin_hftasd32cdv/:path*', // Оставляем как есть
            },
            {
                source: '/api/:path*',
                destination: '/api/:path*', // Оставляем как есть
            },
            {
                source: '/',
                destination: '/client',
            },
            // Все остальные пути переписываем в client без префикса
            {
                source: '/:path((?!admin_hftasd32cdv).*)',
                destination: '/client/:path',
            },
        ];
    },
};

export default nextConfig;