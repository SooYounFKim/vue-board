module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigine: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: '../vue-backend/public'
}