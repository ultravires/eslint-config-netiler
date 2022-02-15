module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['../base/.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['vue'],
  root: true,
};
