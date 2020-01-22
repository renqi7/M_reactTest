const smark=require('webpack-merge')
const webpack=require('webpack')
const baseWebpackConfig=require('./webpack.base')

module.exports=smark(baseWebpackConfig,{
    module:{
        rules:[

        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          }),
    ]
})