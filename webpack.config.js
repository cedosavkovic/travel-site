var path = require('path');
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: "App.js"
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
             modules: true
           }
         }
        ]
        }, 
      {
        test: /\.jsx$/,
        loader: "babel-loader", // Do not use "use" here
        options: {
          // ...
      }
    }
    ]
  }
};