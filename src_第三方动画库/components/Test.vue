<template>
<!-- 组件的结构 -->
  
  
  <div>    
     
        <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
        <h2  v-show="isShow" class="demo">你好啊</h2>
    </transition>

  </div>
</template>

<script>
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

.hello-enter-active,.hello-leave-active{
 transition:1s linear
}
.hello-enter,.hello-leave-to{
 transform:translateX(-100%)
}

.hello-enter-to,.hello-leave{

 transform:translateX(0)
}




</style>