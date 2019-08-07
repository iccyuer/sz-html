//$(function () {
    $.fn.lunbo = function (current,isFocus,isLeftAndRight,switchClass) {
        var that=this;

        var ul=that.find("ul");
        var ol=that.find("ol");
        var selectBtn=that.find("."+switchClass);

        ul.children("li").eq(0).clone().appendTo(ul);

        var moveWidth=ul.children("li").eq(0).width();


        that.on("mouseover", function () {
            if (isLeftAndRight)selectBtn.show(0);
            clearInterval(timer);
        });

        that.on("mouseout", function () {
            if (isLeftAndRight)selectBtn.hide(0);
            timer=setInterval(autoPlay,2000);
        });

        var timer=setInterval(autoPlay,2000);

        if (isLeftAndRight){
            selectBtn.children("span").eq(0).on("click", function () {
                left();
            });
            selectBtn.children("span").eq(1).on("click", function () {
                autoPlay();
            })
        }

        var index=0;
        if(isFocus){
            var roundIndex=0;
            ol.on("mouseover","li", function () {
                var pos=$(this).index();
                $(this).addClass(current).siblings().removeClass(current);
                ul.animate({left:-pos*moveWidth},400);
                index=roundIndex=pos;
            });
        }

        function autoPlay(){
            index++;
            if (index > ul.children("li").length-1) {
                ul.animate({left:0},0);
                index=1;
            }
            ul.animate({left:-index*moveWidth},400);

            if(!isFocus) return;
            roundIndex++;
            if (roundIndex > ol.children("li").length-1) {
                roundIndex=0;
            }
            ol.children("li").eq(roundIndex).addClass(current).siblings().removeClass(current);
        }

        function left(){
            index--;
            if(index<0){
                ul.animate({left:-(ul.children("li").length-1)*moveWidth},0);
                index=ul.children("li").length-2;
            }
            ul.animate({left:-index*moveWidth});

            if(!isFocus) return;
            roundIndex--;
            if (roundIndex < 0) {
                roundIndex=ol.children("li").length-1;
            }
            ol.children("li").eq(roundIndex).addClass(current).siblings().removeClass(current);

        }
    };
//});
