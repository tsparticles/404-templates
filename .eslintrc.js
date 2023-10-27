module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    tsParticles: "readonly",
    $: "readonly",
    loadFirePreset: "readonly",
    loadFireworksPreset: "readonly",
    loadPolygonPath: "readonly",
    dataLayer: "readonly",
  },
  extends: ["standard", "eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["html", "prettier", "import", "n", "promise"],
  settings: {
    "html/html-extensions": [".html", ".we"], // consider .html and .we files as HTML
    "html/report-bad-indent": "error",
  },
  rules: {},
};
