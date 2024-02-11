const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                pathname: '**',
            },
        ],
    },
}
module.exports = nextConfig
