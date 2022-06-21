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
    'no-unused-vars': 'off',
  },
}
