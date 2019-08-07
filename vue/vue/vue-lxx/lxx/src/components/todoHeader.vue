<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入" class="input-wid" v-model="title" @keyup.enter='addItem'>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        addItem(){
            //检查合法性
            const title = this.title.trim();
            //判断
            if(!title){
                alert("请输入--");
                return
            }
            //放在一个对象里面
            const todo = {
                title:title,
                complete:false
            }
            //添加到todos
            this.$store.dispatch('addTodo',todo)
            //q清除输入
            this.title = ''
        }
    }
}
</script>

<style>
    .input-wid{
        width: 96%;
        line-height: 35px;
    }
</style>
