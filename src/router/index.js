import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config'

Vue.use(Router)

// 这是为了解决用户重复点击一个路由一直重复加载这个路由
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
