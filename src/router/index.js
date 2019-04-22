import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Users from '@/components/Users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path: '/welcome', name: 'welcome', component: Welcome},
        {path: '/users', name: 'users', component: Users}
      ]
    }
  ]
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!sessionStorage.getItem('token')) return next('/login')
  // 一定得调用next()方法,否则不会向下进行
  next()
})

export default router
