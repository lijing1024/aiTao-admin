import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/Home'
import Welcome from '@/components/home/Welcome'
import Users from '@/components/users/Users'
import Rights from '@/components/permisson/Rights'
import Roles from '@/components/permisson/Roles'
import Categories from '@/components/goods/Categories'
import Params from '@/components/goods/Params'
import Goods from '@/components/goods/Goods'
import GoodsAdd from '@/components/goods/GoodsAdd'
import Orders from '@/components/orders/Orders'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // home组件即对应index界面,故跟路径需重定向至/home
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path: '/welcome', name: 'welcome', component: Welcome},
        {path: '/users', name: 'users', component: Users},
        {path: '/rights', name: 'rights', component: Rights},
        {path: '/roles', name: 'roles', component: Roles},
        {path: '/categories', name: 'categories', component: Categories},
        {path: '/params', name: 'params', component: Params},
        {path: '/goods', name: 'goods', component: Goods},
        {path: '/goods/add', name: 'goodsadd', component: GoodsAdd},
        {path: '/orders', name: 'orders', component: Orders}
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
