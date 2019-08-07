'use strict';

class User {
    constructor(name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }

    checkName() {
        var name = this.name;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (name !== undefined && /^\w{6,15}$/.test(name)) {
                    resolve("用户名可用");
                } else {
                    reject("用户名不可用");
                }
            }, 200)
        })
    }

    checkPwd() {
        var pwd = this.pwd;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (pwd !== undefined && /^\w{6,15}$/.test(pwd)) {
                    resolve("密码可用");
                } else {
                    reject("密码不可用");
                }
            }, 200)
        })
    }
}

var user = new User("missyou", 1234);
user.checkName().then(function (result) {
        console.log(result);
        return user.checkPwd();
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });
