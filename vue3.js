module.exports = {
  extends: ['plugin:vue/vue3-recommended', './vue.js'],
  rules: {
    /**
     * 不允许向 template 模板下添加多个根结点
     */
    'vue/no-multiple-template-root': 'off',
    /**
     * 标签属性过长需要换行
     */
    "vue/max-attributes-per-line": 'off'
  }
};
