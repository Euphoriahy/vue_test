<template>
<!-- 组件的结构 -->

   <div>
            <h2>学生姓名：{{studentName}}</h2>
            <h2>学生年龄：{{age}}</h2>
            <button @click="showSchoolName">点我获取学校名称</button>
    </div>
</template>

<script>
import { getCurrentInstance } from "vue"

// 组件交互相关的代码（数据、方法等）
export default{
    name:'Student',
    data(){
            return{
                studentName:'张三',
                age:20
            }
       
        },
    methods:{
        showSchoolName(){
           const {proxy} = getCurrentInstance()
           return proxy.$bus.on('getSchoolName',e=>console.log('getSchoolName',e))
        }
    }
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>