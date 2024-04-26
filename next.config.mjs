import createNextIntlPlugin from 'next-intl/plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: `${process.env.NEXT_PUBLIC_URL}`,
            },            {
                protocol: "http",
                hostname: `localhost`,
            },
        ],
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