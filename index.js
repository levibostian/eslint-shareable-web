module.exports = {
  "plugins": [
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "semi": "off",
    "no-process-env": "error",
    "no-await-in-loop": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
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
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public",
        "overrides": {
          "parameterProperties": "off",
          "properties": "explicit"
        }
      }
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": false
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": false
      }
    ],
    "@typescript-eslint/ban-types": "off",
    "jest/prefer-called-with": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/no-truthy-falsy": "error",
    "jest/valid-title": "error"
  },
  "overrides": [
    {
      "files": ["*.spec.ts"],
      "rules": {
        "@typescript-eslint/camelcase": "off",
      }
    }
  ]
};