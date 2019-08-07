function getStyle(ele, attrName) {
    if (window.getComputedStyle) {
       return window.getComputedStyle(ele)[attrName];
    } else {
       return ele.currentStyle[attrName];
    }
}

function animate_SlowZ(ele, json, callback) {
    clearInterval(ele.timer);

    ele.timer = setInterval(function () {

        var boo=true;
        for (var k in json) {
            var nowState;
            if (k === "opacity") {
                nowState = parseFloat(getStyle(ele, k)) * 100 || 100;
            }
            else {
                nowState = parseInt(getStyle(ele, k)) || 0;
            }

            var step = (json[k] - nowState) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            nowState=nowState+step;
            if (k === "opacity") {
                ele.style[k]=nowState/100;
                ele.style.filter="alpha(opacity="+nowState+")";
            }else if(k==="z-index"||k==="zIndex"){
                ele.style[k]=json[k];
            }else{
                ele.style[k]=nowState+"px";
            }

            if (Math.abs(json[k] - nowState) > Math.abs(step)) {
                boo=false;
            }
        }
        if (boo) {
            clearInterval(ele.timer);
            for(var k in json){
                if(k==="opacity"){
                    ele.style[k]=json[k]/100;
                    ele.style.filter="alpha(opacity="+json[k]+")";
                }else if(k==="z=index"||k==="zIndex"){
                    ele.style[k]=json[k];
                }else{
                    ele.style[k]=json[k]+"px";
                }
            }
            if (typeof callback === "function") {
                callback();
            }
        }

    }, 20);
}

function getStyle1(ele,attrName){
    if(window.getComputedStyle){
        return window.getcomputedStyle(ele)[attrName];
    }else{
        return ele.currentStyle[attrName];
    }

}
