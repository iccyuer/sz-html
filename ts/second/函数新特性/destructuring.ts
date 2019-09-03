/*
  析构表达式
  通过表达式将对象或数组拆解成任意数量的变量
*/
// 1.Object
function getStock() {
  return {
    code: 'IBM',
    price: {
      price1: 200,
      price2: 300
    }
  }
}

var stock: any = getStock()
// es5
var code: string = stock.code
var price: number = stock.price.price1
console.log(code, price)
// es6(:后面的是析构变量的别名，或者子属性析构)
var { code: codex, price: { price2: pricex } } = stock
console.log(codex, pricex)

// 2.Array
var array = [1, 2, 3, 4]
var [ num1, num2 ] = array
var [, , num3, num4] = array // 按位取值
var [, ...others] = array // 通过rest取一个小数组
console.log(num1, num2, num3, num4, others)

// 3.方法的参数
function a(b) {
  var o = {
    name: 'haha',
    age: 20
  }
  b(o)
}
a(({ name, age }) =>{
  console.log(name, age)
})