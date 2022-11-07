/*
 * @Author: alan_mf
 * @Date: 2022-11-07 15:18:52
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-07 15:37:18
 * @FilePath: /vue-cli-start/.eslintrc.js
 * @Description: 
 * 
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       //在rules中添加自定义规则
       //关闭组件命名规则
       "vue/multi-word-component-names":"off",
    }
}
