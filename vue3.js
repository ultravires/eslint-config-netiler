module.exports = {
  extends: ['plugin:vue/vue3-recommended', './vue.js'],
  rules: {
    /**
     * 不允许向 template 模板下添加多个根结点
     */
    'vue/no-multiple-template-root': 'off',
    /**
     * 禁止在 data 中使用已废弃的对象定义
     */
    'vue/no-deprecated-data-object-declaration': 'error',
    /**
     * 禁止使用已废弃的 destroyed 和 beforeDestroy 生命周期
     */
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    /**
     * 禁止使用已废弃的 $listeners
     */
    'vue/no-deprecated-dollar-listeners-api': 'error',
    /**
     * 禁止使用已废弃的 $scopedSlots
     */
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    /**
     * 禁止使用已废弃的 events 接口
     */
    'vue/no-deprecated-events-api': 'error',
    /**
     * 禁止使用已废弃的 filters 语法
     */
    'vue/no-deprecated-filter': 'error',
    /**
     * 禁止使用已废弃的 functional 模版
     */
    'vue/no-deprecated-functional-template': 'error',
    /**
     * 禁止使用已废弃的 is 属性
     */
    'vue/no-deprecated-html-element-is': 'error',
    /**
     * 禁止使用已废弃的 inline-template 属性
     */
    'vue/no-deprecated-inline-template': 'error',
    /**
     * 禁止使用已废弃的 this
     */
    'vue/no-deprecated-props-default-this': 'error',
    /**
     * 禁用已废弃的 scope 属性
     */
    'vue/no-deprecated-scope-attribute': 'error',
    /**
     * 使用 v-slot 替代已废弃的 slot
     */
    'vue/no-deprecated-slot-attribute': 'error',
    /**
     * 禁用已废弃的 slot-scope
     */
    'vue/no-deprecated-slot-scope-attribute': 'error',
    /**
     * 禁止在 v-bind 指令中使用已废弃的 .sync 修饰符
     */
    'vue/no-deprecated-v-bind-sync': 'error',
    /**
     * 禁用已废弃的 v-is 指令
     */
    'vue/no-deprecated-v-is': 'error',
    /**
     * 禁止使用已废弃的 .native 修饰符
     */
    'vue/no-deprecated-v-on-native-modifier': 'error',
    /**
     * 禁止使用已废弃的数字修饰符
     */
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    /**
     * 禁止使用已废弃的 Vue.config.keyCodes
     */
    'vue/no-deprecated-vue-config-keycodes': 'error',
  }
};
