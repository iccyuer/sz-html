<template>
        <li :style='{background:bgColor}' @mouseenter="handelEnter(true)" @mouseleave="handelEnter(false)">
            <input type="checkbox" v-model='todo.complete'><span>{{todo.title}}</span>  
            <button v-show="isShow" @click='deleteTodo'>删除</button>
        </li>
</template>

<script>
export default {
  props:{
    todo:Object,
    index:Number,
  },
  data(){
    return{
      isShow:false,
      bgColor:"white"
    }
  },
  methods:{
    handelEnter(isEnter){
      if(isEnter){
        this.bgColor = '#ccc';
        this.isShow = true;
      }else{
        this.bgColor = 'white';
        this.isShow = false;
      }
    },
    deleteTodo(index){
      // const {todo , index, todoDelete} = this;
      // if(window.confirm("确定要删除此信息吗?")){
      //   todoDelete(index)
      // }
      this.$store.dispatch('deleteTodo',index)
    }
  }
}
</script>

<style>

</style>
