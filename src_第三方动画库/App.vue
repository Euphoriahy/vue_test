<template>
  <div>
    <Test></Test>
    <Test1></Test1>
  </div>
</template>

<script>
 //引入组件
 import Test from './components/Test.vue'
 import Test1 from './components/Test1.vue'

 export default{
   name:'App',
   components:{
    Test,
    Test1
}
}
</script>

<style>

</style>