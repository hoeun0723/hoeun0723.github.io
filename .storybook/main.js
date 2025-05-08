const path = require('path');

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
          plugins: [],
        },
      },
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.resolve.mainFields = ['browser', 'module', 'main'];

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
