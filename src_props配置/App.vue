<template>
  <div>
    <Student studentName="李四" :age="18" sex="女"/>
  </div>
</template>

<script>
 //引入组件
 import Student from './components/Student.vue'

 export default{
   name:'App',
   components:{
    Student
},
  
}
</script>

<style>

</style>