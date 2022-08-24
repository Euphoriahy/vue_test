<template>
<!-- 组件的结构 -->
  
  
  <div>    
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue"

// 组件交互相关的代码（数据、方法等）
export default{
    name:'School',
    data(){
            return{
                schoolName:'北京大学',
                address:'北京'
            }
        },
    mounted(){
        const {proxy} = getCurrentInstance()
        proxy.$bus.emit('getSchoolName',this.schoolName)
    }
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>