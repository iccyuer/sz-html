/*
  泛型
  参数化的类型，一般用来限制集合的内容
  用<>括起来
*/
var nums: Array<number> = [1, 2, 3]
import { Person, Employee } from './class.ts'

var workers: Array<Person> = []

workers[0] = new Person('op', 1)
workers[0] = new Employee(1008611, 'xialli', 33)

console.log(workers)
