const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-gatsby',
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
          presets: [require.resolve('babel-preset-gatsby')],
          plugins: [require.resolve('babel-plugin-remove-graphql-queries')],
        },
      },
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.resolve.mainFields = ['browser', 'module', 'main'];

    return config;
  },
};
