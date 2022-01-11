module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', "react-hooks"],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-var': 'error',
    "semi": ['error', 'always'],
    'react/display-name': 0,
    "react/prop-types": 0,
    "react/jsx-no-target-blank": 0,
    'no-unused-vars': 'warn',
    "quotes": 0,
    "indent": 0,
    'arrow-parens': 0,
    'require-jsdoc': 0,
    'object-curly-spacing': 0,
    'operator-linebreak': 0,
    "valid-jsdoc": 0,
    "space-before-function-paren": 0,
    "max-len": 0,
    "no-prototype-builtins": 0,
    "no-case-declarations": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
};
