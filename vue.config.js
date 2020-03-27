const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
                'styles': '@/assets/styles'
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080'
            }
        }
    }
}