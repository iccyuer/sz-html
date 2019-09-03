"use strict";
exports.__esModule = true;
/*
  泛型
  参数化的类型，一般用来限制集合的内容
  用<>括起来
*/
var nums = [1, 2, 3];
var class_ts_1 = require("./class.ts");
var workers = [];
workers[0] = new class_ts_1.Person('op', 1);
workers[0] = new class_ts_1.Employee(1008611, 'xialli', 33);
console.log(workers);
