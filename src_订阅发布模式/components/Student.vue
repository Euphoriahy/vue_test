<template>
<!-- 组件的结构 -->

   <div>
            <h2>学生姓名：{{studentName}}</h2>
            <h2>学生年龄：{{age}}</h2>
            <button @click="sendStudentName">把学生名传给学校组件</button>
    </div>
</template>

<script>

import pubsub from 'pubsub-js'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Student',
    data(){
            return{
                studentName:'张三',
                age:20
            }
       
        },
    methods: {
        sendStudentName(){
            pubsub.publish('hello',this.studentName)
        }
    },
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>