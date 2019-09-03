var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
  类
*/
var Person = /** @class */ (function () {
    /*
      构造函数(new实例化时调用)
      如果参数之前加了访问控制符，则代表声明这个属性,且无需进行赋值操作
    */
    function Person(name, age) {
        this.age = age;
        // 属性
        this.name = 'tutu';
        this.name = name;
    }
    // 方法
    Person.prototype.desc = function () {
        console.log('name:', this.name, 'age:', this.age);
    };
    /*
      访问控制符
      public 默认，任意地方都可以访问
      private 私有，只能在class内部访问
      protected  本类及子类可以访问
    */
    Person.prototype.go = function () {
        console.log('gogogo');
    };
    Person.prototype.eat = function () {
        console.log('eat');
    };
    return Person;
}());
/*
  extends继承父类
  super调用父类的构造函数和方法
*/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(code, name, age) {
        var _this = 
        // super调用父类构造函数
        _super.call(this, name, age) || this;
        _this.age = age;
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log('work');
    };
    return Employee;
}(Person));
var emp = new Employee(1008611, 'xialli', 33);
console.log(emp);
emp.work();
var per = new Person('wakaka', 20);
// per.go() // go方法为私有方法，不可访问
per.desc();
