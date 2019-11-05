import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './assets/js/axios'


Vue.config.productionTip = false

// 按需引入mint-ui的UI组件
import {Toast,Button,Swipe,SwipeItem,Loadmore,Popup,Cell} from 'mint-ui'
// 注册这些组件
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Popup.name, Popup)
Vue.component(Cell.name, Cell);

// 把Toast注入到根实例，这样每个vue组件都能通过this获取到这里的Toast
Vue.prototype.$Toast = Toast
// 把axios注入到根实例，这样每个vue组件都能通过this获取到这里的axios
Vue.prototype.$axios = axios

// 配置公共的请求路径
//const commonUrl =  `http://${process.env.NODE_ENV == 'development' ? 'localhost' : '47.93.14.99'}:3100`
const commonUrl = (process.env.NODE_ENV == 'development') ? 'http://192.168.58.224:3100' : 'http://47.93.14.99:3100' 
// 把公共的请求路径注入到根实例
Vue.prototype.$commonUrl = commonUrl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
