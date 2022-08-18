<template>
 <ul class="todo-main">
   <!-- 若:todo前不打冒号，则传值为'todoObj'字符串，冒号传递对象 -->
   <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
 </ul>
</template>

<script>
import MyItem from './MyItem.vue';
 export default{
    name:'MyList',
    components:{
      MyItem
    },
    props:['todos']
    
 }
</script>

<style scoped>


/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>
