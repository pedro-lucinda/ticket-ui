import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'next/navigation': require.resolve('../__mocks__/next-navigation.storybook.mock.ts'),
    }

    // Initialize config.module.rules array if undefined
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Add a rule to handle image files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '../public/[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

export default config;
