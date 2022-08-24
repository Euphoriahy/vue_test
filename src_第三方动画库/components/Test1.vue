<template>
<!-- 组件的结构 -->
  
  
  <div>    
     
        <button @click="isShow = !isShow">显示/隐藏</button>
    <transition class="animate__animated animate__bounce"
                enter-active-class="animate__bounce"
                leave-active-class="animate__backOutLeft">
        <h2  v-show="isShow" class="demo">你好啊</h2>
    </transition>

  </div>
</template>

<script>
import 'animate.css'
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Test',
    data(){
        return {
            isShow:false
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