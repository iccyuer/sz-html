/*
  类
*/
class Person {
  // 属性
  name: string = 'tutu'

  /*
    构造函数(new实例化时调用)
    如果参数之前加了访问控制符，则代表声明这个属性,且无需进行赋值操作
  */
  constructor(name?: string, public age?: number) {
    this.name = name
  }

  // 方法
  desc() {
    console.log('name:', this.name, 'age:', this.age)
  }
  /*
    访问控制符
    public 默认，任意地方都可以访问
    private 私有，只能在class内部访问
    protected  本类及子类可以访问
  */
  private go() {
    console.log('gogogo')
  }

  protected eat() {
    console.log('eat')
  }

}

/*
  extends继承父类
  super调用父类的构造函数和方法
*/
class Employee extends Person{
  code: number

  constructor(code, name?: string, public age?: number){
    // super调用父类构造函数
    super(name, age)
    this.code = code
  }

  work() {
    // super调用父类方法
    super.eat()
    this.doWork()
  }

  private doWork() {
    console.log('work')
  }
}

var emp = new Employee(1008611, 'xialli', 33)
console.log(emp)
emp.work()

var per = new Person('wakaka',20)
// per.go() // go方法为私有方法，不可访问
per.desc()

export default {
  Person,
  Employee
}