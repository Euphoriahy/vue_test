<template>
  <div>
    <School ref="sch"></School>
    <button @click="cl">点我显示vc</button>
    <Student></Student>
  </div>
</template>

<script>
 //引入组件
 import School from './components/School.vue'
 import Student from './components/Student.vue'

 export default{
   name:'App',
   components:{
    School,
    Student
},
   methods: {
     cl(){
      console.log(this.$refs.sch)
     }
},
}
</script>

<style>

</style>