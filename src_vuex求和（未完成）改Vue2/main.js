import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false



const vc = new Vue({
    el:'#app',
    render: h => h(App),
    store
})

console.log(vc)

