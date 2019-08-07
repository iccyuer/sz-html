<template>
  <div id="app">
    <section class="container">
        <todoHeader/>
        <todoList/>
        <todoFooter/>
    </section>
  </div>
</template>

<script>
import todoList from './components/todoList'
import todoHeader from './components/todoHeader'
import todoFooter from './components/todoFooter'
import storageUtils from './utils/storageUtil'
export default {

  mounted(){
    this.$store.dispatch('repTodos')
  },
  components:{
    todoList,
    todoHeader,
    todoFooter
  },
  data(){
    return{
      //从localStorage读取todos  深度监视 因为todos为数组  得到json格式的字符串
      // todos: JSON.parse(window.localStorage.getItem('todos_key') || "[]")
      // [ 
      //   {title:"吃饭",complete:true},
      //   {title:"睡觉",complete:false},
      //   {title:"lol",complete:false}
      // ]
    }
  },
  // methods:{
  //   toHead(todo){
  //     this.todos.unshift(todo)
  //   },
  //   todoDelete(index){
  //     this.todos.splice(index,1)
  //   },
  //   //删除所有选中的 过滤留下为false的 
  //   isdeleteComplete(){
  //     this.todos = this.todos.filter(todo => !todo.complete)
  //   },
  //   //全选 全不选
  //   isSelectComplete(check){
  //     this.todos.forEach(todo => todo.complete = check)
  //   }
  // },
  // watch:{ //监视
  //   todos:{
  //     deep:true, //深度复制
  //     handler:function(value){
  //       //将todos最新的值的json数据，保存到localStorge
  //       window.localStorage.setItem("todos_key",JSON.stringify(value))
  //     }
  //   }
  // }

}
</script>

<style>
.container{
  border: 1px solid #ccc;
  width: 600px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
