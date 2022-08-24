<template>
<!-- 组件的结构 -->

   <div>
            <h2>学生姓名：{{studentName}}</h2>
            <button v-show="!isEdit" @click="handleEdit(isEdit)">点我显示编辑框</button>
            <input v-show="isEdit" ref="editName" :value="studentName"/>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name:'Student',
    data(){
            return{
                studentName:'张三',
                age:20,
                isEdit:false
            }
       
        },
    methods:{
        handleEdit(isEdit){
            this.isEdit = ! isEdit
            this.$nextTick(function(){
                //Vue3中没有$refs的用法
					this.$refs.editName.focus()
				})
        }
    }
 }
 

</script>

<style>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>