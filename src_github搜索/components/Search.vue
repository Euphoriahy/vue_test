<template>
<!-- 组件的结构 -->
<section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
</section>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Search',
    data(){
        return{
            keyWord:''
            }

    },
    methods:{
    searchUsers(){
        //模板字符串需要前面加$，并且用``来引用链接，ES6
        //github后端已经使用cors方式解决跨域访问方式，无需自己配置代理

        //请求前更新List数据
        pubsub.publish('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            response =>{
                console.log('请求成功了',response.data.items)
                //获取请求后更新List数据
                pubsub.publish('getUsers',{isFirst:false,isLoading:false,errMsg:'',users:response.data.items})

            },
            error =>{
                console.log('请求失败了',error.message)
                //获取请求失败后显示错误信息
                pubsub.publish('getUsers',{isFirst:false,isLoading:false,errMsg:error.message,users:[]})
            }
        )
    }
    }
   
 }
 

</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color: orange;
}

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}


</style>