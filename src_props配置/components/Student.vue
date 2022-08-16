<template>
<!-- 组件的结构 -->

   <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="changeAge">点我修改年龄</button>
   </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Student',
    data(){
            return{
                msg:'我是一个学生',
                // studentName:'张三',
                // sex:'男',
                myAge:this.age
            }
       
        },
    methods: {
        changeAge(){
            this.myAge++
        }
    },
   // props:['studentName','age','sex'] //简单接收
      props:{
        studentName:String,
        age:Number,
        sex:String
      } //限制类型

   // props:{
        // 	name:{
        // 	type:String, //类型
        // 	required:true, //必要性
        // 	default:'老王' //默认值
        // 	}
        // }   
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>