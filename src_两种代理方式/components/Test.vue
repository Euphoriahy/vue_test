<template>
<!-- 组件的结构 -->
  
  
  <div>    
    <button @click="showStudent">点我获取student信息</button>
    <button @click="showCar">点我获取car信息</button>
  </div>
</template>

<script>

import axios  from 'axios'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Test',
    methods:{
        showStudent(){
            axios.get('http://localhost:8080/api1/students').then(
                response =>{
                    console.log('请求成功了',response.data)
                },
                error =>{
                    console.log('请求失败了',error.message)
                }
            )
        },
        showCar(){
            axios.get('http://localhost:8080/api2/cars').then(
                response =>{
                    console.log('请求成功了',response.data)
                },
                error =>{
                    console.log('请求失败了',error.message)
                }
            )
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