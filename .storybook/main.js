const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-gatsby',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!(gatsby)\/)/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-gatsby'),'@babel/preset-typescript'],
          plugins: [require.resolve('babel-plugin-remove-graphql-queries')],
        },
      },
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
