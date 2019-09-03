var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var message = "Hello World";
console.log(message);
/*
  字符串
*/
// 多行字符串
var msg1 = "hello\nworld";
console.log(msg1);
// 模板字符串
var msg2 = "hello " + (function () { return 'world!'; })();
console.log(msg2);
// 模板字符串写html模板(结构清晰)
var msg3 = "\n  <div>\n    <span>" + msg2 + "</span>\n  </div>\n";
console.log(msg3);
/*
  自动拆分字符串
  模板字符串可以做为function的参数，普通文本作为第一个参数，${}作为后续参数
*/
function test(template, name, age) {
    console.log(template); // ["hello, my name is ", ", i am ", "", raw: Array(3)]
    console.log(name); // lisa
    console.log(age); // 18
}
var myName = 'lisa';
function getAge() {
    return 18;
}
test(__makeTemplateObject(["hello, my name is ", ", i am ", ""], ["hello, my name is ", ", i am ", ""]), myName, getAge());
