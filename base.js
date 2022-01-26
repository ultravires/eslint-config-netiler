module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
    'no-var': 'error'
  },
  root: true
};
