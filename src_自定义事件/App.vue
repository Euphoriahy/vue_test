<template>
  <div  class="app">
    <h2>{{msg}} 学生姓名是：{{studentName}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据  @/v-on-->
    <!-- @click.native绑定原生事件 -->
    <Student v-on:qwe="getStudentName" @click.native="show"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据  ref-->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
 //引入组件
 import School from './components/School.vue'
 import Student from './components/Student.vue'

 export default{
   name:'App',
   data(){
    return {
      msg:'你好啊',
      studentName:''
      }
   },
   components:{
    School,
    Student
  },
   methods:{
    getSchoolName(name){
      console.log('App收到了学校名',name)
    },
    getStudentName(name){
      console.log('App收到了学生名',name)
      this.studentName = name
    },
    show(){
      alert('123')
    }
   },
  //  mounted(){
  //   console.log(this.$refs.student)
  //   //vue3删除了$on方法
  //   this.$refs.student.$on('qwe',this.getStudentName)
  //   //this.$refs.student.$on('qwe',this.getStudentName)
  //  }
}
</script>

<style>
 .app{
   background-color:gray
  }
</style>