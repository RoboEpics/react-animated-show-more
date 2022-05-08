const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: {
      name: 'AnimatedShowMore',
      type: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
  },
  devServer: {
    contentBase: './build'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              "@babel/plugin-transform-react-jsx",
              "@babel/plugin-syntax-jsx",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    // 'react': 'commonjs react umd'
  }
};
