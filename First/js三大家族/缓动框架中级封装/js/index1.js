window.onload = function () {
    var arr = [
        {   //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            zIndex: 2
        },
        {  // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 80,
            zIndex: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            zIndex: 4
        },
        {  // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 80,
            zIndex: 3
        },
        {   //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            zIndex: 2
        }
    ];


    var wrap = document.getElementsByClassName("wrap")[0];
    var slide = document.getElementsByClassName("slide")[0];
    var arrow = document.getElementsByClassName("arrow")[0];
    var ul = slide.children[0];
    var liArr = ul.children;

    setStyle();
    var boo = false;
    wrap.onmouseover = function () {
        animate_Slow(arrow, {
            opacity: 100
        });

    };
    wrap.onmouseout = function () {
        animate_Slow(arrow, {
            opacity: 0
        });
    };


    arrow.children[0].onclick = function () {
        console.log("ff");
        if (boo) {
            console.log("li");
            arr.push(arr.shift());
            setStyle();
            boo = false;
        }

    }
    arrow.children[1].onclick = function () {
        if (boo) {
            arr.unshift(arr.pop());
            setStyle();
            boo = false;
        }
    }

    function setStyle() {
        for (var i = 0; i < arr.length; i++) {
            animate_Slow(liArr[i], arr[i], function () {
                boo = true;
            })
        }
    }

}
