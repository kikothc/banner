var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve('build'),
        filename:'bundle.js'
    },
    devServer:{
      port:8080,
        contentBase:'./build',
        inline:true

    },
    module:{
      loaders:[
          {
              test:/.\jsx?$/,
              loader:'babel-loader',
              query:{
                  presets:["react","es2015"]
              },
              exclude:/node_moudules/
          },
          {
              test:/\.css$/,
              loader:'style-loader!css-loader'
          },
          {
              test:/\.jpg$/,
              loader:'url-loader'
          }
      ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

}