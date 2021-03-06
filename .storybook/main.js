module.exports = {
  stories: [
    "../src/lib/components/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../src/lib/headers/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../src/lib/styles/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../src/pages/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)",
    "../src/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  features: {
    interactionsDebugger: true,
  },
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: require("svelte-preprocess")({ postcss: true }),
  },
};
