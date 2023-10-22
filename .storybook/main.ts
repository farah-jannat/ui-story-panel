const path = require("path");

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },

    webpackFinal: async (config, { configType }) => {
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            "@src": path.resolve(__dirname, "../src/"),
        };
        return config;
    },
};
export default config;
