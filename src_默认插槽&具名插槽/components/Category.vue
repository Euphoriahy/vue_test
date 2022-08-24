<template>
<!-- 组件的结构 -->
  <div class="category">    
     <h3>{{title}}分类</h3>
       <slot slot="center"></slot>
       <slot name="footer"></slot>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Category',
    props:['title']
   
 }
 

</script>

<style>
/* 组件的样式 */
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;

}
 h3{
    text-align: center;
    background-color: orange;
 }
.demo{
    background-color: orange;
}
</style>