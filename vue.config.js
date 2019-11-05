module.exports = {
    publicPath: process.env.NODE_ENV == 'development' ? '/' : '',
    devServer: {
        proxy: {
            /*
                当你的请求路径是/xiaobu/api/goods/list
                实际的请求路径是target + '/xiaobu/api/goods/list'
                然后使用pathRewrite将/xiaobu/api转换为空
                所以最后的请求路径就是target + '/goods/list'
            */
            '/wangye/api': {
                target: 'http://localhost:3100',
                changeOrigin: true,
                pathRewrite: {
                    '^/wangye/api': ''
                }
            }
            // 其他代理接口
        }
    }
}