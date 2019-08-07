"use strict";
/*
 常量：值不可以被更改的数据存数容器
 变量：值可以被更改的数据存数容器
 */

var a = 10;
a = 20;
console.log(a); //20

const b = 10;
//b=20;//报错，Assignment to constant variable.(分配给一个常量.也就是常量不可以被修改)
console.log(b);

//const一般用在配置文件中的常量声明
const host = "localhost";
const port = 10099;


//用const声明的常量同样限制在{}中使用
{
    const c=10;
}
console.log(c); //c is not defined
