// 接收多个组件通知触发mutations调用间接状态更新的方法对象
import {ADD_TODO, DELETE_TODO,SELECT_ALL_TODOS,IS_DELETE_COMPLETE,RECEIVE_TODOS} from './mutations-types'
import storageUtil from './utils/storageUtil'
export default{

    addTodo({commit},todo){
        //提交mutations的请求
        commit(ADD_TODO,{todo})
    },
    deleteTodo({commit},index){
        //提交mutations的请求
        commit(DELETE_TODO,{index})
    },
    selectAllTodos({commit},check){
        commit(SELECT_ALL_TODOS,{check})
    },
    isdeleteComplete({commit}){
        commit(IS_DELETE_COMPLETE)
    },
    //异步获取todos并更新状态
    reqTodos({commit}){
        setTimeout(() => {
            // 读取数据
            const todos = storageUtil.readTodos()
            //提交mutations
            commit(RECEIVE_TODOS,todos)
        },1000)
    }
}