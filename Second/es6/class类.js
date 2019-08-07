'use strict';
class Person {
    //constructor构造方法绑定并初始化公共属性
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //公共方法
    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    //静态方法
    static getClassName() {
        return this.name;
    }

    //es6中class没有明确规定静态属性如何定义，如果需要在class外部Person.country="china"定义
}
Person.country = "china";

var per = new Person("lso", 16);

console.log(per.name); //lso
per.setAge(18);
console.log(per.age); //18

console.log(Person.getClassName()); //Person
console.log(Person.country); //china


//继承(一个extends关键字的事)
class Student extends Person {
}

var stu = new Student("mis", 13, "a pupil");
console.log(stu.name); //mis
stu.setAge(14);
console.log(stu.age); //14

console.log(Student.country); //china
console.log(Student.getClassName()); //Student


//子类在继承的基础上拓展自己的成员
class Teacher extends Person {
    //覆写构造方法，如果什么不覆写，那么相当于系统给了这么个构造方法
    /* constructor(name,age) {
     super(name,age)
     }*/
    //覆写构造方法，在调用父类构造方法的基础上，绑定并初始化自己特有的属性
    constructor(name, age,info) {
        super(name, age)
        this.info=info;
    }
    //子类特有的公共方法直接定义即可,若是出现同名方法冲突，则覆盖父类的
    setName(name){
        this.name=name+"wakaka";
    }

    //子类特有的静态方法直接定义，若是出现同名则覆盖父类的
    static getClassName() {
        return this.name+"!";
    }

}

var tea = new Teacher("cli", 28,"i am a teacher");
console.log(tea.name); //cli
tea.setName("cml");
console.log(tea.name); //cmlwakaka
console.log(Teacher.getClassName()); //Teacher!
