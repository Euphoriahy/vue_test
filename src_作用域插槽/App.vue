<template>
  <div class="container">
    
    <Category title="游戏"> 
      <!-- 作用域插槽使用template 来接收对象 未实现页面无法显示数据-->
      <template scope="{games}">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>  
        </ul>
      </template>
    </Category>
    
    <Category title="游戏"> 
      <template scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>  
        </ol>
      </template>
    </Category>

    <Category title="游戏"> 
      <template scope="{games}">
        <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>  
      </template>
    </Category>
  </div>
</template>

<script>
 //引入组件
 import Category from './components/Category.vue'

 export default{
   name:'App',
   
   components:{
    Category
}
}
</script>

<style>
 .container,.foot{
  display: flex;
  justify-content: space-around;
 }

 img{
  width:100%
 }

 video{
  width:100%
 }
</style>