function asyncFunc(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            "use strict";
            if (typeof a !== "number" || a === undefined) {
                reject(new Error("a is not a number!"));
            } else {
                resolve(a + b);
            }
        }, 1000)
    })
}
/*
 定义promise语法规则：
 new一个promise对象，在Promise的构造函数里面传一个回调函数，参数为resolve和reject
 函数主体部分写异步操作，成功的回调用resolve()调用，失败的回调用reject()调用。
 resolve()里面传的参数就是成功回调的结果(只支持传一个参数)
 reject()里面一般new Error()，返回报错信息，或者返回一个错误的json对象，如：{msg:"a is not a number",code:10099}

 使用promise语法：
 拿到这个promise对象，then方法里面的回调函数就是成功的回调，对应resolve，
 catch方法里面的回调函数就是失败的回调，对应reject，
 promise语法支持链式编程。
 */

//Tip:下面这种形式看起来还是金字塔回调，promise中多重回调不是这么用的！！
asyncFunc(1, 2).then(function (result) {
    console.log(result);
    asyncFunc(result, 4).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    })
}).catch(function (err) {
    console.error(err);
});

//如何用？利用promise链式编程的特点，在需要的回调中改变peomise对象继续.then()
asyncFunc(1, 2).then(function (result) {
        console.log(result);
        return asyncFunc(2, 3);
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.error(err);
    });
