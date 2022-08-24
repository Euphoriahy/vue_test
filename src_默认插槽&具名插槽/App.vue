<template>
  <div class="container">
    <Category title="美食" >
     <img  slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
     <a slot="footer" href="www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏"> 
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>  
      </ul>
      <div slot="footer" class="foot">
          <a  href="www.baidu.com">单机游戏</a>
          <a  href="www.baidu.com">更多游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>  
      <a slot="footer" href="www.baidu.com">经典</a>
    </Category>
  </div>
</template>

<script>
 //引入组件
 import Category from './components/Category.vue'

 export default{
   name:'App',
   data(){
            return{
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']

            }
        },
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