$(function () {
    var box = document.getElementsByClassName("box")[0];
    var small = box.firstElementChild || box.firstChild;
    var big = box.children[1];

    var mask = small.children[1];
    var smallImg = small.children[0];
    var bigImg = big.children[0];


    box.onmouseenter = function () {
        big.style.display = "block";
        mask.style.width = small.offsetWidth * big.offsetWidth / bigImg.offsetWidth + "px";
        mask.style.height = small.offsetWidth * big.offsetWidth / bigImg.offsetWidth + "px";
        mask.style.display = "block";
    };
    box.onmouseleave = function () {
        big.style.display = "none";
        mask.style.display = "none";
    };


    box.onmousemove = function (event) {
        var event = event || window.event;

        var pageX = event.pageX || event.clientX + scroll().left;
        var pageY = event.pageY || event.clientY + scroll().top;

        var moveX = pageX - box.offsetLeft - mask.offsetWidth / 2;
        var moveY = pageY - box.offsetTop - mask.offsetHeight / 2;


        if (moveX <= 0) {
            moveX = 0;
        }
        if (moveY <= 0) {
            moveY = 0;
        }

        if (moveX >= box.offsetWidth - mask.offsetWidth) {
            moveX = box.offsetWidth - mask.offsetWidth;
        }
        if (moveY >= box.offsetHeight - mask.offsetHeight) {
            moveY = box.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = moveX + "px";
        mask.style.top = moveY + "px";


        var bili=smallImg.offsetWidth/bigImg.offsetWidth;

        var bigMoveX=moveX/bili;
        var bigMoveY=moveY/bili;

        bigImg.style.marginLeft=-bigMoveX+"px";
        bigImg.style.marginTop=-bigMoveY+"px";

    }
});
