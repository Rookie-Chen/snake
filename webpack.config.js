

// 引入node自带的包
const path = require('path');

// 插件： 
const HTMLWebpackPlugin = require('html-webpack-plugin'); // 自动生成html并引入对应的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空dist

module.exports = {
  // 入口文件
  entry: './src/index.ts',
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      // 设置 webpack 自己本身 编译过后的js不使用 ()=>
      arrowFunction: false,
      // 设置 webpack 自己本身 编译过后的js不使用 const
      const: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            // 设置babel
            options: {
              presets:[
                [
                  "@babel/preset-env",
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定core.js的版本
                    "corejs": "3",
                    // 按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          // 引入postcss ，兼容处理
          {
            loader: "postcss-loader",
            options:{
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader" // 编译less
        ]
      }
    ]
  },
  // 配置插件
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    // 编译的时候会删除之前生成的dist里面的文件
    new CleanWebpackPlugin(),
  ],
  // 模式 开发/生产
  mode: 'production', 
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  }
}