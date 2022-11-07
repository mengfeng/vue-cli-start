<!--
 * @Author: alan_mf
 * @Date: 2022-11-07 11:22:53
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-07 14:54:11
 * @FilePath: /vue-cli-start/src/pages/Food.vue
 * @Description: 
 * 
-->
<template>
    <p>food</p>
    <button @click="toHome">toHome</button>
    <router-link to="/home">toHome</router-link>
  </template>
  <script>
  import { useRouter } from 'vue-router'
  export default {
    setup () {
      const router = useRouter()
      const toHome = (() => {
        router.push({
          name: 'home'
        })
      })
      return {
        toHome
      }
    },
  }
  </script>
