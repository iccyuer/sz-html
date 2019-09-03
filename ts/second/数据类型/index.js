// 1.字符串类型
var myname = "wakak";
/*
  只会在typescript编辑器里面报错，但是可以正常编译执行的,
  为了减少开发人员在开发过程中犯错,规范行为
  位置:变量类型、参数类型、function返回类型
*/
// myname = 13
// 2.any，可以任意赋值
var alias = "op";
alias = 13;
// 3.number
var num = 12;
// 4.boolean
var bol = false;
// 5.Array(两种写法)
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ['1', '2'];
var arr4 = ['1', '2', '3'];
// 6.void(声明function不需要任何返回值)
function test() {
    return undefined;
}
// 7.方法的参数类型
function test1(name) {
    return undefined;
}
test1("");
// 8.自定义类型(class)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var per = new Person('lasa', 10);
per.name = 's';
per.age = 20;
console.log(per);
