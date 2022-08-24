<template>
<!-- 组件的结构 -->
  
  
  <div class="demo">    
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点我给App传学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name:'School',
    data(){
            return{
                schoolName:'北京大学',
                address:'北京'
            }
        },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.schoolName)
        }
    },
    props:['getSchoolName']
 }
 

</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color: skyblue;
    padding:5px
}
</style>