<template>
<!-- 组件的结构 -->
  
  
  <div>    
        <h1>你好啊！{{name}}</h1>
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'School',
    data(){
            return{
                schoolName:'北京大学',
                address:'北京',
                name:''
            }
        },
    methods:{
        demo(msgName,data){
            console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
            this.name = data
        }
    },
    mounted(){
    //    this.pubId = pubsub.subscribe('hello',(msgName,data) =>{
    //         console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
            
    //     })
         this.pubId = pubsub.subscribe('hello',this.demo)
     },
    beforeDestroy() {
        pubsub.unsubcribe(this.pubId)
    },
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>