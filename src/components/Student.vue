<template>
<!-- 组件的结构 -->

   <div>
            <h2 @click="showName">学生姓名：{{name}}</h2>
            <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Student',
    data(){
            return{
                name:'张三',
                sex:'男'
            }
       
        },
    methods: {
        showName(){
            alert(this.)
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