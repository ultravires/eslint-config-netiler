# eslint-config-netiler

ESLint (http://eslint.org) rules (all rules included) by netiler team.

## Usage

1. `npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @netiler/eslint-config-netiler`
2. create a file named `.eslintrc.js` in your project:

```cjs
module.exports = {
  extends: ['@netiler/netiler']
};
```

### For Vue2

```cjs
module.exports = {
  extends: ['@netiler/netiler', '@netiler/netiler/vue']
};
```

### For Vue3

```cjs
module.exports = {
  extends: ['@netiler/netiler', '@netiler/netiler/vue3']
};
```
