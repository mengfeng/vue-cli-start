/*
 * @Author: alan_mf
 * @Date: 2022-11-07 11:13:53
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-07 12:18:39
 * @FilePath: /vue-cli-start/src/route/index.js
 * @Description: 
 * 
 */
import { createRouter, createWebHashHistory } from "vue-router"
//注册
import home from '../pages/Home.vue'
import food from '../pages/Food.vue'
import banner from '../pages/Banner.vue'

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/food",
    name: "food",
    component: food
  },
  {
    path: "/banner",
    name: "banner",
    component: banner
  }
]
//导出
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })

  export default router;