/*
  扩展运算符(spread)和剩余运算符(rest)
*/
// 接收不固定参数(剩余运算符(rest))
function func1(...args) {
   args.forEach(function (arg) {
     console.log(arg)
   })
}

func1(1, 2, 3)
func1('a', 'b', 'c')

// 传入不固定参数(扩展运算符(spread))
var arg2 = [1, 2, 4]
func1(...arg2)
