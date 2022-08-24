//该文件用于创建store
 //引入Vue核心库
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
//准备actions-用于相应组件中的动作
const actions = {
    jia:function(){
        console.log('加被调用了')
    }
}
//准备mutatios-用于操作数据(state)
const mutations = {}
//准备state-用于存储数据
const state = {
    sum : 0
}

//创建Store
export default new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state
    //简写形式
    actions,
    mutations,
    state
})

//


