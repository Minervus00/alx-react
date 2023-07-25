const path = require('path');

module.exports = {
  entry: {
    main: path.relative(__dirname, '../js/dashboard_main.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  performance: {
		maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
	},
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            }
          },
        ]
      },
    ]
  }
};
