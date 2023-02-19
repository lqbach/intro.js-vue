module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser' },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: { '@typescript-eslint/ban-ts-comment': 'off' },
}
