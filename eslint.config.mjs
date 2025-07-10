// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here

  {
    files: ["**/*.ts", "**/*.js", "**/*.vue"],
    rules: {
      "no-console": "warn",
      "vue/no-multiple-template-root": "off",
      eqeqeq: "warn",
    },
  }
);
