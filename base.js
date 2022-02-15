module.exports = {
  parserOptions: {
    ecmaVersion: 8,
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
  rules: {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
    /**
     * 禁止使用 var
     */
    'no-var': 'error',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'error',
    /**
     * 禁止函数的循环复杂度超过 20
     * @description https://en.wikipedia.org/wiki/Cyclomatic_complexity
     */
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    eqeqeq: ['error', 'always'],
    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     */
    'func-name-matching': [
      'error',
      'always',
      {
        includeCommonJSModuleExports: false,
      },
    ],
    /**
     * setter 和 getter 必须写在一起
     */
    'grouped-accessor-pairs': 'error',
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': 'error',
    /**
     * 代码块嵌套的深度禁止超过 5 层
     */
    'max-depth': ['error', 5],
    /**
     * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
     */
    'max-nested-callbacks': ['error', 3],
    /**
     * 函数的参数禁止超过 5 个
     */
    'max-params': ['error', 5],
    /**
     * new 后面的类名必须首字母大写
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    /**
     * 禁止使用 caller 或 callee
     * @description caller 和 calle 是被废弃的语法
     */
    'no-caller': 'error',
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'error',
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': 'error',
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': 'error',
    /**
     * 禁止在比较表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': ['error', 'except-parens'],
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'error',
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'error',
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'error',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'error',
    /**
     * 禁止在 switch 语句中出现重复的 case
     */
    'no-duplicate-case': 'error',
    /**
     * 禁止重复导入模块
     */
    'no-duplicate-imports': 'error',
    /**
     * 禁止出现空代码块，允许 catch 为空代码块
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'error',
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     */
    'no-eq-null': 'error',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'error',
    /**
     * 禁止出现没必要的 bind
     */
    'no-extra-bind': 'error',
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'error',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'error',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'error',
    /**
     * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
     */
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!'],
      },
    ],
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'error',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'error',
    /**
     * 禁止在 if 代码块内出现函数声明
     */
    'no-inner-declarations': ['error', 'both'],
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': 'error',
    /**
     * 禁止在 class 以外的地方用 this
     */
    'no-invalid-this': 'error',
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性
     * 使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'error',
    /**
     * 禁止使用超出 js 精度范围的数字
     */
    'no-loss-of-precision': 'error',
    /**
     * 禁止使用 \ 来换行字符串，使用 "Hello" + "World"
     */
    'no-multi-str': 'error',
    /**
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': 'error',
    /**
     * 禁止对函数的参数重新赋值
     */
    'no-param-reassign': 'error',
    /**
     * 禁止使用 __proto__
     */
    'no-proto': 'error',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'error',
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': ['error', 'always'],
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'error',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'error',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'error',
    /**
     * 禁止使用保留字作为变量名
     */
    'no-shadow-restricted-names': 'error',
    /**
     * 禁止在数组中出现连续的逗号，[,,] => [undefined, undefined, undefined]
     */
    'no-sparse-arrays': 'error',
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': 'error',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'error',
    /**
     * 禁止使用未定义的变量
     */
    'no-undef': 'error',
    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': 'error',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'error',
    /**
     * 禁止在第一轮循环时就一定会退出循环的情况出现
     */
    'no-unreachable-loop': 'error',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     * @description finally 中的语句会在 try 之前执行
     */
    'no-unsafe-finally': 'error',
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 已定义的变量必须使用
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'error',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     * @description 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
     */
    'no-useless-catch': 'error',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'error',
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */
    'no-useless-rename': 'error',
    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     */
    'prefer-object-spread': 'error',
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     */
    'use-isnan': 'error',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'error',
  },
  root: true,
};
