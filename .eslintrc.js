/*
 * @Author: your name
 * @Date: 2021-09-01 10:07:09
 * @LastEditTime: 2021-09-01 10:09:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['off', 'windows'],
  },
};
