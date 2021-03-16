module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": 0,
    "max-len": ["error", { code: 120 }],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
