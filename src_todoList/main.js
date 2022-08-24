import {createApp} from 'vue'
import App from './App.vue'

//vue-cli4创建项目时（4.5.0版本的脚手架），出现了一点小问题
//安装的vue-cli为v4以上的版本，其不包含全局的 Vue，Vue 被 createApp函数代替
//将原来Vue替换成createApp(App)
createApp(App).config.productionTip = false

createApp(App).mount('#app')

