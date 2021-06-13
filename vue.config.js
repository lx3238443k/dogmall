module.exports = {
    configureWebpack:{
        resolve:{
            alias: {
                'assets':'@/assets',
                'common':'@/components/common',
                'network':'@/network',
                'components':'@/components',
                'views':'@/views'
            }
        }
    }
}