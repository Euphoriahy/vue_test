import { from } from 'core-js/core/array'
import Vue from 'vue'
import App from './App.vue'
//引入混合
//import {mixin,mixin2} from './mixin'
Vue.config.productionTip = false
//全局引入混合
//Vue.mixin(mixin)
//Vue.minxin(minxin2)
new Vue({
  render: h => h(App),
}).$mount('#app')
