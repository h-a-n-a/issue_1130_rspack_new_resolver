const { VueLoaderPlugin } = require('vue-loader');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: './src/main.js',
  },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
      },
    ],
  },
  experiments: {
    rspackFuture: {
      newResolver: true,
    },
  },
};
module.exports = config;
