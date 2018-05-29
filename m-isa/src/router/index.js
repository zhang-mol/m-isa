import Vue from 'vue'
import Router from 'vue-router'

// 引入子路由模块
import home from '../components/home/home.vue'
import classify from '../components/classify/classify'
import find from '../components/find/find.vue'
import shopCart from '../components/shopCart/shopCart.vue'
import my from '../components/my/my.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/shopCart',
    component: shopCart
  },
  {
    path: '/my',
    component: my
  }
]
export default new Router({
  // 链接激活时的class
  linkActiveClass: 'active',
  routes
})
