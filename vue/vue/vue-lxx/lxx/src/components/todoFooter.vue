<template>
<div>
    <label class="todo-footer">
        <input type="checkbox" v-model="isAllcheck"/>
    </label>
    <span>
        <span>已完成{{computled}}</span>/全部{{totalCount}}
    </span>
    <button v-show='computled' @click='isdeleteComplete'>删除所有</button>
</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import todoItemVue from './todoItem.vue';
export default {
    // props:{
    //     todos:Array,
    //     isdeleteComplete:Function,
    //     isSelectComplete:Function
    // },
    computed:{
        ...mapGetters(['totalCount','computled']),
    //    completeSize(){
    //        return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
    //    },
       isAllcheck:{
           get(){
              //  分析：已完成的和全部的是否相等 相当就全选 或者全不选
               return  this.$store.getters.isAllcheck
            },
           set(value){
            //    this.isSelectComplete(value)
            this.$store.dispatch('selectAllTodos',value)
           }
       }
    },
    methods:{
        ...mapActions(['isdeleteComplete'])
    }
}
</script>

<style>

</style>
