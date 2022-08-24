<template>
<!-- 组件的结构 -->
  
  
  <div>    
     
        <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" >
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
            isShow:true
        }
    }
   
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}

.hello-enter-active{
    animation: qwe 1s linear;
}

.hello-leave-active{
    animation: qwe 1s linear reverse;
}

@keyframes qwe {
    from{
        transform: translate(-100%);
    }
    to{
        transform: translate(100px);
    }
}
</style>