"use strict"; //使用严格模式  在es6中 使用严格模式 进行es6的语法检查

//1.在es6中 用let声明的变量 只能在当前大括号的块级作用域里面使用
{
    var a = 10;
    let b = 20;
}
console.log(a); //10
//console.log(b); //报错，b is not defined

//2.变量泄漏问题(解决全局污染问题)
for (var i = 0; i < 3; i++) {
}
console.log(i); //3

for (let j = 0; j < 3; j++) {
}

//console.log(j); //报错，j is not defined  从这里我们可以看出let j=0;这句代码其实是放到{}里面执行的

//3.let的变量没有提升效果
{
    var a = 10;
    var a = 20;
    console.log(a); //20
    let b = 10;
    //let b=20; //报错，Identifier 'b' has already been declared(标识符“b”已被声明，let声明的变量不可以重新声明)
    //为什么用var声明的变量可以重新声明呢？因为用var声明的变量存在变量的提升，相当于声明了1次，然后重新赋值。
    console.log(b);
}

{
    console.log(a); //undefined
    var a = 10;
    console.log(b); //报错，b is not defined(b变量没有被提升)
    let b = 20;
}

//4.使用for循环对数组/json初始化时变量i泄漏问题
//es6之前，使用自调用函数对变量进行for循环初始化，防止for循环的i泄漏
var arr = [];
(function () {
    for (var i = 0; i < 3; i++) {
        arr.push(i + 2);
    }
})();

//es6之后，不必再借用自调用函数限制for循环了，直接使用let声明即可。
var att = [];
for (let i = 0; i < 3; i++) {
    att.push(i + 2);
}


//5.异步函数问题
//等到延时器执行时，变量for循环已经执行完，变量i已经是3.
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 200)
}
//es6之前，使用自调用函数+闭包解决
for (var i = 0; i < 3; i++) {
    setTimeout(function (i) {
        return function () {
            console.log(i);
        }
    }(i), 200)
}
//es6之后，直接使用let声明，每次循环中的i不会被泄露出去，始终限制在当前循环的作用域中，原理同闭包。
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 200)
}
