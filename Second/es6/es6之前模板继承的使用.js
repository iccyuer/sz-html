function Person(name, age) {
    "use strict";
    //构造函数绑定公共属性
    this.name = name;
    this.age = age;
}
//原型绑定公共方法
Person.prototype.setName = function (name) {
    this.name = name;
};
Person.prototype.setAge = function (age) {
    this.age = age;
};

//构造函数绑定静态属性和方法
Person.country = "china";
Person.getClassName = function () {
    "use strict";
    return this.name;
};

var per=new Person("mio",16);
console.log(per.name); //mio
per.setAge(18);
console.log(per.age); //18

console.log(Person.country); //china
console.log(Person.getClassName()); //Person

/*
之前学的7中继承都是对象继承(给一个具体的对象继承一些属性和方法)
这里讨论的是类(模板)继承
es6之前的模板继承怎么做的？一项一项单独的继承过来
包括：公共属性/方法(实例成员)、静态属性/方法(静态成员)
 */


function Student(name,age,info){
    "use strict";
    //借用构造函数继承公共属性
    Person.call(this,name,age);
    this.info=info;
}

//原型替换继承公共方法(Student作为构造函数，构造函数本身的原型替换，Student的对象默认调用)
Student.prototype=Person.prototype;

//原型替换继承静态属性和方法(Student作为Function构造函数的对象，Student对象的构造函数(也就是Function)的原型替换)
Student.__proto__=Person;


var stu=new Student("mis",13,"a pupil");
console.log(stu.name); //mis
stu.setAge(14);
console.log(stu.age); //14

console.log(Student.country); //china
console.log(Student.getClassName()); //Student
