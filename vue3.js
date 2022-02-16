module.exports = {
  extends: ['./vue.js'],
  rules: {
    /**
     * 不允许向 template 模板下添加多个根结点
     */
    'vue/no-multiple-template-root': 'off',
  },
};
