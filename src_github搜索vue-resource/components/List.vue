<template>
<!-- 组件的结构 -->
   <div class="row">
     <!-- 展示用户列表 -->
      <div  v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    <!-- 展示欢迎词 -->
      <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
      <h1 v-show="info.isLoading">加载中.....</h1>
    <!-- 展示错误信息 -->
      <h1 v-show="info.errMsg">错误信息：{{info.errMsg}}</h1>
      
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'List',
    data(){
      return {
        info:{
          isFirst:true,
          isLoading:false,
          errMsg:'',
          users:[]
        }
      }
    },
    mounted(){
      //订阅发布模式三个参数，msgName事件名
      pubsub.subscribe('getUsers',(msgName,dataObj)=>{
        console.log('这是List组件收到的数据',dataObj)
        //ES6写法，将dataObj与info进行对比拼接
        this.info = {...this.info,...dataObj}
      }) 
    }
    
 }
 

</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color: orange;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>