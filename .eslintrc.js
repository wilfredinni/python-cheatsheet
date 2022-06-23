module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'Parsing error: Unexpected token as': 'off',
    // 'no-unused-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
}
