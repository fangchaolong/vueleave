import { PageView } from '@/Layouts'

/*
  动态路由
*/
export const asyncRouterMap = [
  {
    path: '/',
    name: 'main',
    component: PageView,
    redirect: '/404',
    children: [
      {
        path: '/',
        name: 'index',
        hidden: true,
        component: () => import('@/pages/index')
      },
      {
        path: '/tuozhuai',
        name: 'tuozhuai',
        meta: {
          title: '拖拽组件'
        },
        component: () => import('@/pages/tuozhuai/index')
      },
      {
        path: '/yuansu',
        name: 'yuansu',
        meta: {
          title: '元素周期表'
        },
        component: () => import('@/pages/yuansu/index')
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          title: '我的'
        },
        component: () => import('@/pages/my/index')
      },
      {
        path: '*',
        redirect: '/404',
        hidden: true
      }
    ]
  }
]
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/exception/404')
  }
]
