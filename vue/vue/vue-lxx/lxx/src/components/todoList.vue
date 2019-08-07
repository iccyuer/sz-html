<template>
    <ul class="todo-list">
        <todoItem v-for="(todo,index) in todos" 
        :key='index' :index='index' :todo='todo'/>
    </ul>
</template>

<script>
import {mapState} from 'vuex'
import todoItem from './todoItem'
export default {
    computed:{
        ...mapState(['todos'])
    },
    components:{
        todoItem
    }
}
</script>

<style>
.todo-list {
    width: 94%;
}
ul li{
    list-style-type:none;
    border: 1px solid #ccc;
    margin-left: -40px;
    line-height: 40px;
}
ul li:nth-child(2),li:nth-child(1){
     border-bottom:0;
}
</style>
