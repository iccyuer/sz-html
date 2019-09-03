/*
  控制函数的执行过程，手工暂停和恢复代码执行
  *
  yield关键字
  next().value 为yield关键字后面表达式的值
  next().done 用来判定迭代器是否完成
*/
function*  test() {
  console.log('start')
  yield 2
  console.log('end')
}
var func = test()
console.log(func.next().value) // 2
console.log(func.next().done) // true
// func.next()
