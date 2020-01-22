const path=require('path')
const webpack = require('webpack')

//压缩js
const UglifyjsPlugin=require('uglifyjs-webpack-plugin')

//将html和构建关联,构建时会创建一个html,引用构建出的js
const HtmlWebpackPlugin=require('html-webpack-plugin')
// 打包将css 文件单独分离出来
const ExtractTextPlugin=require('extract-text-webpack-plugin')
//复制文件
const CopyWebpackPlugin=require('copy-webpack-plugin')

// webpack-merge  配置多环境

//webpack-dev-middleware

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'build.js'
    },
    optimization: {
        splitChunks: {
          chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
        },
      },
    // 配置webpack-dev-server
    devServer:{
        hot:true,//熱更新
        port:'8888',
         // // url请求代理
        proxy:{
            '/api':{
                target: "http://localhost:3000", // 将 URL 中带有 /api 的请求代理到本地的 3000 端口的服务上
                pathRewrite: { '^/api': '' }, // 把 URL 中 path 部分的 `api` 移除掉
            }
        },
    },
   
    module:{
        rules:[
            {
                test:/\.jsx?/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            }
        ]
    },
    resolve:{
        modules:[
            "node_modules",path.resolve(__dirname,'src')
        ],
         // 删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
        extensions:[".js",'jsx','.css']
    },
    plugins:[
        new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement 的插件
        // webpack内置插件，配置全局常量
        new webpack.DefinePlugin({
            VERSION:JSON.stringify('1.0.1')
        }),
        new UglifyjsPlugin(),
        new HtmlWebpackPlugin({//传递写好的html入口文件
            filename:'index.html',//配饰输入文件名及路径
            template:'src/index.html'//配置文件模板
        }),
        new ExtractTextPlugin('[name].css'),//配置文件名
        // 复制文件  配置来源，配置目标路径
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to:'static'
        }
        ])
    ]
}