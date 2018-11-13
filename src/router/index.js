import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home/Home.vue'
import Home from '../components/Home/Home.vue'
import Search from '../components/Search/Search.vue'
import Shopcart from '../components/Shopcart/Shopcart.vue'
import Vip from '../components/Vip/Vip.vue'
import NewsList from '../components/News/NewsList.vue'
import NewsDetail from '../components/News/NewsDetail.vue'
import PhotoList from '../components/Photo/PhotoList.vue'
import PhotoDetail from '../components/Photo/PhotoDetail.vue'
import GoodsList from '../components/Goods/GoodsList.vue'
Vue.use(Router) // 注册全局组件 router-link router-view
// 挂载Vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性
// 所有的this其实就是Vue的子类对象(实例)

export default new Router({
  routes: [
    {
      // 首先进行重定向操作
      path: '/',
      // redirect: '/home'
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    // 新闻列表
    {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    },
    // 新闻详情
    {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    },
    // 图文列表
    {
      name: 'photo.list',
      path: '/photo/list/:categoryId',
      component: PhotoList
    },
    // 图文详情
    {
      name: 'photo.detail',
      path: '/photo/detail',
      component: PhotoDetail
    },
    // 商品列表
    {
      name: 'goods.list',
      path: '/goods/list',
      component: GoodsList
    }
  ]
})
