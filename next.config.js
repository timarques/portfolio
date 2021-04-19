module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['url-loader'],
            issuer: {
                test: /\.(js|ts|)x?$/
            }
        })
        return config
    }
}