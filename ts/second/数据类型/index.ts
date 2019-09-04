/*
  只会在typescript编辑器里面报错，但是可以正常编译执行的,
  为了减少开发人员在开发过程中犯错,规范行为
  位置:变量类型、参数类型、function返回类型
*/
// 1.字符串类型
var myname: string = "wakak"

// myname = 13

// 2.any，可以任意赋值
var alias: any = "op"
alias = 13

// 3.number
var num: number = 12

// 4.boolean
var bol: boolean = false

// 5.Array(两种写法)
var arr: Array<number> = [1, 2, 3]
var arr2: number[] = [1, 2, 3]

var arr3: Array<string> = ['1', '2']
var arr4: string[] = ['1', '2', '3']

// 6.void(声明function不需要任何返回值)
function test(): void {
  return undefined
}

// 7.方法的参数类型
function test1(name: string): void {
  return undefined
}

test1("")

// 8.自定义类型(class)
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

var per: Person = new Person('lasa', 10)
per.name = 's'
per.age = 20
console.log(per)
