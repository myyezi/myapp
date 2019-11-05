import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home.vue'
import Book from './views/Book.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import GoodsDetail from './views/GoodsDetail.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Error from './views/Error.vue'
import CartList from './views/CartList.vue'
import fenlei from './views/fenlei.vue'
import Address from './views/Address.vue'



const router = new Router({
  mode:'hash',

  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
			path: '/goodsDetail/:goodsId', // 配置路由参数，它是一个形参
			name: 'goodsDetail',
			component: GoodsDetail
    },
    {
			path: '/login',
			name: 'login',
			component: Login
    },
    {
			path: '/register',
			name: 'register',
			component: Register
    },
    {
			path: '/cartList',
			name: 'cartList',
			component: CartList
    },		
    {
			path: '/fenlei',
			name: 'fenlei',
			component: fenlei
    },	
    {
			path: '/address',
			name: 'address',
			component: Address
		},	
    {
			path: '*',
			name: 'error',
			component: Error // 内容
		}
  ]
})

// 全局的路由钩子
router.beforeEach((to, from, next) => {
	// console.log('打算','从',from,'跳转到了',to)

	// 必须执行next，否则路由就不会发生跳转
	next()
})
router.afterEach((to, from) => {
	// console.log('已经','从',from,'跳转到了',to)
})

// 导出整个路由实例
export default router
