/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'scontent.fcgp3-1.fna.fbcdn.net',
                pathname: "**",
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
