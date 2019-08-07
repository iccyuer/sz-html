/**
 * Created by Admin on 2018/5/7.
 */
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
        ele.attachEvent("on"+eventName, fnName);
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
        ele.detachEvent("on"+eventName, fnName);
    } else if (ele.removeEventListener !== undefined) {
        ele.removeEventListener(eventName, fnName);
    }
}
