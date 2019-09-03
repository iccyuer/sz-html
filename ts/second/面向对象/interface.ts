/*
  接口
  用来建立莫衷代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
*/
interface IPerson {
  name: string
  age: number
}

class Person {
  // 1.接口作为一个方法参数的类型声明时，调用时会检查声明的属性
  constructor(public config: IPerson) {

  }
}

// 调用时，属性必须和接口声明的属性一致
var p = new Person({
  name: 'wakak',
  age: 30
})

/* ************** */
interface Animal {
  name: string
  eat()
}

class Sheep implements Animal {
  // 实现一个接口，必须实现接口声明的属性和方法
  name: string = 'sheep'
  eat() {
    console.log('i eat grass')
  }
}

class Triger implements Animal {
  // 实现一个接口，必须实现接口声明的属性和方法
  name: string = 'triger'
  eat() {
    console.log('i eat meat')
  }
}