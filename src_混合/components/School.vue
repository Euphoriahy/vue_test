<template>
<!-- 组件的结构 -->
  
  
  <div>    
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入混合
import {mixin} from '../mixin'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'School',
    data(){
            return{
                name:'北京大学',
                address:'北京'
            }
        },
    //使用mixin
    mixins:[mixin]
    
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>