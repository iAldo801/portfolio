// @ts-check

export default (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com',
                    port: ''
                },
                {
                    protocol: 'https',
                    hostname: 'i.scdn.co',
                    port: ''
                },
                {
                    protocol: 'https',
                    hostname: 'cdn.discordapp.com',
                    port: ''
                }
            ]
        },
    }
    return nextConfig
}