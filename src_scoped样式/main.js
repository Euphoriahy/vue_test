import {createApp} from 'vue'
import App from './App.vue'

createApp(App).config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

createApp(App).mount('#app')