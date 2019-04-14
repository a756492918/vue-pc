import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Main from '@/components/main/main'
import user from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      redirect: '/home/Main',
      component: Home,
      children: [
        {
          path: 'Main',
          name: 'Main',
          component: Main,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    }

  ]
})
