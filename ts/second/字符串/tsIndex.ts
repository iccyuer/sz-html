var message: string = "Hello World" 
console.log(message)
/*
  字符串
*/

// 多行字符串
var msg1: string = `hello
world`
console.log(msg1)

// 模板字符串
var msg2: string = `hello ${(() => { return 'world!' })()}`
console.log(msg2)

// 模板字符串写html模板(结构清晰)
var msg3: string = `
  <div>
    <span>${msg2}</span>
  </div>
`
console.log(msg3)

/*
  自动拆分字符串
  模板字符串可以做为function的参数，普通文本作为第一个参数，${}作为后续参数
*/
function test(template: any, name: string, age: number): void {
  console.log(template) // ["hello, my name is ", ", i am ", "", raw: Array(3)]
  console.log(name) // lisa
  console.log(age) // 18
}

var myName = 'lisa';

function getAge(): number {
  return 18
}

test`hello, my name is ${myName}, i am ${getAge()}`