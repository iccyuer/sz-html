// 1.变量默认值
var myname = "tutu";
// 2.function参数默认值(默认参数值需声明到最后)
function test(a, b, c) {
    if (c === void 0) { c = 'heeh'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('a', 'b', 'c');
test('a', 'b');
// 3.可选参数(用?标识可选参数,可选参数必须放到普通参数后面)
function test2(a, b, c, d) {
    if (c === void 0) { c = 'heeh'; }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
test2('a', 'b');
