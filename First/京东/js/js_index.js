/**
 * Created by Admin on 2018/4/25.
 */
var gwc = document.querySelector(".gwc");
var gwc_qd = document.querySelector(".gwc_qd");

gwc.onmouseover = function () {
    gwc_qd.style.display = "block";
    gwc.style.borderBottom = "none";
    gwc.style.backgroundColor = "white";
    gwc.style.height = "30px";
}
gwc.onmouseout = function () {
    gwc_qd.style.display = "none";
    gwc.style.borderBottom = "2px solid #999";
    gwc.style.backgroundColor = "white";
    gwc.style.height = "28px";
}
gwc_qd.onmouseover = function () {
    gwc_qd.style.display = "block";
    gwc.style.borderBottom = "none";
    gwc.style.backgroundColor = "white";
    gwc.style.height = "30px";
}
gwc_qd.onmouseout = function () {
    gwc_qd.style.display = "none";
    gwc.style.borderBottom = "none";
    gwc.style.backgroundColor = "white";
    gwc.style.height = "30px";
}

var banner_list = document.querySelector(".banner_list>ul>li:first-child");
var hidden = document.querySelector(".banner_list>div")
banner_list.onmouseover = function () {
    hidden.style.display = "block";
    banner_list.style.background="white";
    banner_list.style.position="relative";
    banner_list.style.zIndex="999";
}
hidden.onmouseover = function () {
    hidden.style.display = "block";
    banner_list.style.background="white";
    banner_list.style.position="relative";
    banner_list.style.zIndex="999";
}
banner_list.onmouseout = function () {
    hidden.style.display = "none";
    banner_list.style.background="transparent";
    banner_list.style.position="relative";
    banner_list.style.zIndex="0";
}
hidden.onmouseout = function () {
    hidden.style.display = "none";
    banner_list.style.background="transparent";
    banner_list.style.position="relative";
    banner_list.style.zIndex="0";

}


