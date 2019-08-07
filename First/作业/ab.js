/*function slowSpeed(ele, endX) {
    clearInterval(ele.timer);
    var speed = endX - ele.offsetLeft > 0 ? 10 : -10;
    ele.timer = setInterval(()=> {
        ele.style.left = ele.offsetLeft + speed + "px";
        if (Math.abs(endX-ele.offsetLeft)<Math.abs(speed)){
            clearInterval(ele.timer);
            ele.style.left = endX + "px";
        }
    },10);
}*/
