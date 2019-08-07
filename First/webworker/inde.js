var date = new Date().getTime();

do {
    var newDate = Date.now();
} while (newDate - date < 100);

//console.log("xxx");


//var btn = document.querySelector("button");
//var inp = document.querySelector("#inp");
onmessage= function (e) {
    console.log(e.data);
    console.log(typeof e.data);

}
/*
btn.onclick = function () {
    var isSu=false;
    var s = inp.value-0;
    if (Number.isInteger(s) && s > 1) {
        if (s == 2) {
            isSu =true;
        }

        for (var i = 2; i < s; i++) {
            if (s % i === 0) {
                isSu =false;
                break;
            }
        }
        if (s == i) {
            isSu =true;
        }
    } else {
        console.log("请输入一个大于1的整数");
    }

    if (isSu) {
        console.log("质数");
    }else{
        console.log("不是质数");
    }
};


*/
