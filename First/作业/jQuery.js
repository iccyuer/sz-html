/**
 * Created by Admin on 2018/5/2.
 */

function randomColor() {
    var r = parseInt(Math.random() * 255);
    var g = parseInt(Math.random() * 255);
    var b = parseInt(Math.random() * 255);
    //return `rgb(${r},${g},${b})`;
    return "rgb(" + r + "," + g + "," + b + ")";
}

//获取上一个兄弟元素节点
function getPreviousSibling(element) {
    return element.previousElementSibling || element.previousSibling;
}
function getPreviousSiblingc() {
    return this.previousElementSibling || this.previousSibling;
}

//function Object() {
//}
//Object.prototype = {
//    getPreviousSibling:getPreviousSiblings
//};


//获取下一个兄弟元素节点
function getNextSibing(element) {
    return element.nextElementSibling || element.nextSibling;
}

//获取第一个元素节点对象
function getFirstElement(parentNode) {
    return parentNode.firstElementChild || parentNode.firstChild;
}

//获取最后一个元素节点对象
function getLastElement(parentNode) {
    return parentNode.lastElementChild || parentNode.lastChild;
}

//获取兄弟节点对象
function getAllSibling(element) {
    var arr = [];
    var allChildrenNode = element.parentNode.children;
    for (var i = 0; i < allChildrenNode.length; i++) {
        if (allChildrenNode[i] !== element) {
            arr.push(allChildrenNode[i]);
        }
    }
    return arr;
}


//淘宝placeholder的封装
function taoBaoPlaceHolder(tao, taoLable, text) {
    var tao = document.getElementById(tao);
    var taoLable = document.getElementById(taoLable);
    taoLable.innerHTML = text;
    tao.oninput = function () {
        taoLable.style.display = "none";
        if (this.value.length === 0) {
            taoLable.style.display = "inline-block";
        }
    }
}

//京东placeholder的封装
function jdPlaceHolder(jd, jdLable, text) {
    var jd = document.getElementById(jd);
    var jdLable = document.getElementById(jdLable);
    jdLable.innerHTML = text;
    jd.onfocus = function () {
        if (this.value.length === 0) {
            jdLable.style.display = "none";
        }
    };
    jd.onblur = function () {
        if (this.value.length === 0) {
            jdLable.style.display = "inline-block";
        }
    }
}

//淘宝placeholder的类封装
//var taoLabelList = document.getElementsByClassName("taoLabel");
//for (var i = 0; i < taoLabelList.length; i++) {
//    //var tao=getPreviousSibling(taoLabelList[i]);
//    //taoLabelList[i].innerHTML=text;
//    getPreviousSibling(taoLabelList[i]).index = i;
//    getPreviousSibling(taoLabelList[i]).oninput = function () {
//        taoLabelList[this.index].style.display = "none";
//        if (this.value.length === 0) {
//            taoLabelList[this.index].style.display = "inline-block";
//        }
//    }
//}


//jQuery方式样式
function css(ele, JSONStyle) {
    var jsonStr = JSON.stringify(JSONStyle);
    jsonStr = jsonStr.replace(/,/g, ";");
    jsonStr = jsonStr.replace(/"/g, "");
    jsonStr = jsonStr.slice(1, jsonStr.length - 1);

    ele.style.cssText = jsonStr;
}

//对象绑定方式，事件层叠覆盖封装
function addEventListenre(ele, eventName, fn) {
    var oldEvent = ele["on" + eventName];
    ele["on" + eventName] = function () {
        if (oldEvent !== null) {
            oldEvent();
            fn();
        } else {
            fn();
        }

    }
}

//绑定事件的封装
function addEvent(ele, eventName, fnName) {
    if (ele.attachEvent !== undefined) {
        ele.attachEvent("on" + eventName, fnName);
    } else if (ele.addEventListener !== undefined) {
        ele.addEventListener(eventName, fnName);
    } else {
        //此种情况基本不会出现
        addEventListenre(ele, eventName, fnName);
    }
}

//移除事件的封装
function removeEvent(ele, eventName, fnName) {
    if (ele["on" + eventName] !== null) {
        ele["on" + eventName] = null;
    } else if (ele.detachEvent !== undefined) {
        ele.detachEvent("on" + eventName, fnName);
    } else if (ele.removeEventListener !== undefined) {
        ele.removeEventListener(eventName, fnName);
    }
}

//匀速框架的封装
function animate_speed_x(ele, endX) {
    clearInterval(ele.timer);
    //var num=0;
    var speed = endX - ele.offsetLeft > 0 ? 10 : -10;
    ele.timer = setInterval(function () {
        //console.log(speed + " " + ++num);
        ele.style.left = ele.offsetLeft + speed + "px";
        //console.log(ele.style.left);
        //console.log(ele.offsetLeft);
        if (Math.abs(ele.offsetLeft - endX) <= Math.abs(speed)) {
            clearInterval(ele.timer);
            ele.style.left = endX + "px";
        }
    }, 30);
}

//缓动框架的x封装
function slowAnimate_x(ele, endX) {
    clearInterval(ele.timer);
    //var num = 0;
    ele.timer = setInterval(function () {
        var step = (endX - ele.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //console.log(step + " " + ++num);
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(ele.offsetLeft - endX) <= Math.abs(step)) {
            clearInterval(ele.timer);
            ele.style.left = endX + "px";
        }
    }, 30);
}

//缓动框架的y封装
function slowAnimate_y(ele, endY) {
    clearInterval(ele.timer);
    console.log("endY:  " + endY);
    console.log("ele.offsetTop:  " + ele.offsetTop);
    ele.timer = setInterval(function () {
        var step = (endY - ele.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(Math.abs(ele.offsetTop - endY) + "     " + Math.abs(step));
        if (Math.abs(ele.offsetTop - endY) <= Math.abs(step)) {
            clearInterval(ele.timer);
            ele.style.top = endY + "px";
        }
    }, 25)
}

//被卷去左侧，头部的封装
function scroll() {
    if (window.pageYOffset !== undefined) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }
}

//event对象的pageX和pageY的兼容封装
function getPageX(event) {
    return event.clientX + scroll().left;
}
function getPageY(event) {
    return event.clientY + scroll().top;
}

