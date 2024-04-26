import createNextIntlPlugin from 'next-intl/plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : ['sangw.in', 'localhost', 'picsum.photos'], // <== Domain name
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                hostname: "cloudflare-ipfs.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: 'http',
                hostname: "localhost",
                port: "",
                pathname: "**",
            },
            {
                protocol: 'https',
                hostname: "sverdlovina-next.vercel.app",
                port: "",
                pathname: "**",
            },
        ]
    },
    env: {
        NEXT_PUBLIC_MAPS_API_KEY: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    },
    locales: ["uk", "ru"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'uk',
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);