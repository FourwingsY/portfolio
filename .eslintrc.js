module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // this forces exported functions to explicit return type
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // no unused variables with some exceptions
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", ignoreRestSiblings: true, varsIgnorePattern: "^_" },
    ],
  },
  overrides: [
    // disable for .tsx files, but enbale for .ts files
    {
      rules: { "@typescript-eslint/explicit-module-boundary-types": ["error"] },
      files: ["*.ts"],
    },
  ],
}
