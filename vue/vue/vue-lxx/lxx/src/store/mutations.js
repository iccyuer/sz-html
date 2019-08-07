// 接收多个由action触发直接状态更新的方法对象

import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,IS_DELETE_COMPLETE,RECEIVE_TODOS} from './mutations-types'

export default {
    //如果是字符串 或者 小写的导致的 不匹配用下面的中括号
    [ADD_TODO](state,{todo}){
        state.todos.unshift(todo)
    },
    [DELETE_TODO] (state,{index}){
        state.todos.splice(index,1)
    },
    [SELECT_ALL_TODOS] (state,{check}){
        state.todos.forEach(todo => todo.complete = check)
    },
    [IS_DELETE_COMPLETE] (state){
        state.todos = state.todos.filter(todo => !todo.colplate)
    },
    [RECEIVE_TODOS] (state,todos){
        state.todos = todos
    }
}
