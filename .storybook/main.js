module.exports = {
    stories: ['../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-gatsby',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.

        config.module.rules[0].use[0].options.plugins.push(require.resolve('babel-plugin-remove-graphql-queries'))
        return config
    },
}