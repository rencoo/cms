// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置MintUI  引入js
import MintUI from 'mint-ui'
// 引入 css；这样写会自动去node_modules目录下找mint-ui的文件夹
import 'mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/global.css'
// 引入toast图标的css
import './assets/ttf/iconfont.css'
// 引入自己的 ul 和 li 组件
import MyUl from './components/Common/MyUl' // 不需要写后缀.vue
import MyLi from './components/Common/MyLi'
import NavBar from './components/Common/NavBar'
// 定义moment全局日期过滤器
import Moment from 'moment'
// 图片预览插件 vue-preview 行为模式
import VuePreview from 'vue-preview'
import Comment from './components/Common/Comment'
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Vue.component(Comment.name, Comment)

// 定义moment全局日期过滤器
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})
// 相对时间
Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})
// 设置中文显示
Moment.locale('zh-cn')
// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios
// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function (config) { // config相当于defaults，能直接拿到Axios.defaults的配置
  MintUI.Indicator.open({
    text: '玩命加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})
// 配置响应拦截器，关闭loading图标
Axios.interceptors.response.use(function (res) {
  // res.config 类似上面config
  MintUI.Indicator.close()
  return res
})

Vue.config.productionTip = false
// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)
Vue.use(VuePreview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // ES6语法key value同名可以只写一个
  template: '<App/>'
})
