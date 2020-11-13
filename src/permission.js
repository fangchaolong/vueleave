import Vue from 'vue'
import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
/*
  to: Route: 即将要进入的目标路由对象
  from: Route: 当前导航正要离开的路由
  next: Function: 定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
*/
  if (store.getters.routerbtn) {
    store.dispatch('addRouters', {}).then(data => {
      router.addRoutes(store.getters.addRouters)
      const redirect = decodeURIComponent(from.query.redirect || to.path)
      if (to.path === redirect) {
        // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        next({ ...to, replace: true })
      } else {
        // 跳转到目的路由
        next({ path: redirect })
      }
    }).catch(() => {
      next({path: '/404'})
    })
  } else {
    next()
  }
})
