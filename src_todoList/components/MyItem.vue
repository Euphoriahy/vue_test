<template>
 <li>
   <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      
      <!-- 如下代码也能实现代码，但是不推荐，会违反规则 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
   </label>
   <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
 </li>
</template>

<script>
 export default{
    name:'MyItem',
    //声明接收todo对象,props会错误打成prpos导致页面无法获取todo
    props:['todo','checkTodo','deleteTodo'],
    mounted(){
      console.log(this.todo)
    },
    methods:{
      handleCheck(id){
        //通知App组件将对应的done值取反
        this.checkTodo(id)
        //console.log(this.todo)
      },
      handleDelete(id){
        if(confirm('确定删除吗')){
          //console.log(id)
          //通知App组件将对应的todo删除
          this.deleteTodo(id)
          //console.log(this.todo)
        }
      }
    }
 }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li:hover{
  background-color: rgb(199, 198, 198);
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}


li:hover button{
  display: block;
}


</style>
