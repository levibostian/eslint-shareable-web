module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": false
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-function": "off"
  }
};