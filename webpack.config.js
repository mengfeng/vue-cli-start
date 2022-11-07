/*
 * @Author: alan_mf
 * @Date: 2022-11-07 08:52:48
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-07 10:39:35
 * @FilePath: /vue-cli-start/webpack.config.js
 * @Description: 
 * 
 */
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.s[ca]ss$/,use:['style-loader','css-loader','sass-loader']},
            {
                test:/\.m?js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    }
                }
            },
            //老语法
            // {test:/\.(png|jpe?g|svg|gif|webp)$/,use:{loader:'file-loader',options:{esModule:'false'}}}
            {test:/\.(png|jpe?g|svg|gif|webp)$/,type:'asset/resource'},
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ]

}