/*
  接口
  用来建立莫衷代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
*/
// interface IPerson {
//   name: string
//   age: number
// }
// class Person {
//   // 接口作为一个方法参数的类型声明时，调用时会检查声明得属性
//   constructor(public config: IPerson) {
//   }
// }
// var p = new Person({
//   name: 'wakak',
//   age: 20
// })
var Op = /** @class */ (function () {
    function Op(name) {
        this.name = name;
    }
    return Op;
}());
function test(a) {
    console.log(a);
}
test(new Op('sdsa'));
