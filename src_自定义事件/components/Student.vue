<template>
<!-- 组件的结构 -->

   <div class="demo">
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点我给App传学生名</button>
        <button @click="unbind">解绑qwe事件</button>
    </div>
</template>

<script>
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
        sendStudentName(){
            //触发Studen组件实例上的a事件
            this.$emit('qwe',this.studentName)
        },
        unbind(){
            //Vue3舍弃了$off
           // this.$off('qwe')
        }
    }
 }
 

</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color: orange;
    padding:5px;
    margin-top:10px
}
</style>