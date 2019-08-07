'use strict';
function asyncFunc(a, b, time) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== "number" || a === undefined) {
            reject("变量错误！" + a);
        }
        setTimeout(function () {
            resolve(a + b)
        }, time !== undefined ? time : 200)
    })
}

//这样写太繁琐
asyncFunc(1, 2).then(function (result) {
        console.log(result);
        return asyncFunc(2, 3);
    })
    .then(function (result) {
        console.log(result);
        return asyncFunc(3, 4);
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });

//推荐使用all，race
//all:参数是数组，数组里面的每个值是promise对象，最终成功回调的结果放到一个数组里。
//结果的顺序和放入的顺序直接相关，和异步任务的执行时长没有关系，是等到所有异步任务都执行完成后返回整个数组结果。
//一旦其中之一异步任务报错，则整体直接报错，不再输出结果。(按照数组顺序取最先报错的那个异步任务)
var pro = Promise.all([asyncFunc(1, 2, 200), asyncFunc(2, 3, 1000), asyncFunc(3, 4, 50)]);
pro.then(function (result) {
        console.log(result); //[ 3, 5, 7 ]
    })
    .catch(function (err) {
        console.log(err);
    });


//race:参数是数组，数组里面的每个值是promise对象，执行结果是最先异步任务执行完成的那个成功回调的结果(只返回一个结果)
//一旦其中之一异步任务报错，则整体报错，不再输出结果。(按照数组顺序取最先报错的那个异步任务)
var promise = Promise.race([asyncFunc(1, 2, 200), asyncFunc(2, 3, 1000), asyncFunc(3, 4, 50)]);
promise.then(function (result) {
        console.log(result); //7
    })
    .catch(function (err) {
        console.log(err);
    });
