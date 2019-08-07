$(function () {

    /*购物车浮动跟随浏览器*/
    Cart();
    function Cart() {
        $(".float-shopcart").css("display","none");
        $(document).on("scroll",function(){
            if ((document.documentElement.scrollTop > ($(".head-shopcart").offset().top)+$(".head-shopcart").height())) {
                $(".float-shopcart").css("display","block");
            }else{
                $(".float-shopcart").css("display","none");
            }
        });
    }

    /*移入购物车显示与隐藏*/
    cartShowAndHide();
    function cartShowAndHide(){
        $(".head-shopcart").on("mouseenter","a", function () {
            $(".head-list").css("display","block");
        });
        $(".head-shopcart").on("mouseleave","a", function () {
            $(".head-list").css("display","none");
        });
        $(".head-list").on("mouseenter", function () {
            $(this).css("display","block");
        });
        $(".head-list").on("mouseleave", function () {
            $(this).css("display","none");
        });

        //$(".float-list").css("display","block");
        $(".float-shopcart").on("mouseenter","a", function () {
            $(".float-list").css("display","block");
        });
        $(".float-shopcart").on("mouseleave","a", function () {
            $(".float-list").css("display","none");
        });
        $(".float-list").on("mouseenter", function () {
            $(this).css("display","block");
        });
        $(".float-list").on("mouseleave", function () {
            $(this).css("display","none");
        });

    }
    /*大的轮播图动画*/
    bigBanner();
    function bigBanner() {
        var $index = 0;

        /*透明度轮播*/
        function autoPlay() {
            $index++;
            if ($index > $(".bigbanner>ul>li").size() - 1) {
                $index = 0;
            }
            $(".bigbanner>ul>li").eq($index)
                //.find("img")
                /*思路：同时操控opacity和display，如果只操控opacity那么即便透明度为0了，
                 那么还是会盖住前面的li，鼠标不能移入到指定li，只能移入最后一个li*/
                .stop()
                .animate({opacity: 1}, 1000)
                .css("display", "block")
                //.end()
                .siblings("li")
                //.find("img")
                .stop()
                .animate({opacity: 0}, 1000, function () {
                    $(this).css("display", "none");
                });
            //.animate({opacity: 0},1000)
            //.css("display", "none");

            $(".bigbanner>.slide-index li").eq($index).attr("class", "focus-red").siblings("li").removeAttr("class");
        }

        var timer = setInterval(autoPlay, 3000);

        /*获取img的宽高以及left/top值*/
        var widthImg = $(".bigbanner>ul>li").eq(0).find("img").width();
        var heightImg = $(".bigbanner>ul>li").eq(0).find("img").height();

        var leftImg = $(".bigbanner>ul>li").eq(0).find("img").css("left");
        var topImg = $(".bigbanner>ul>li").eq(0).find("img").css("top");


        /*鼠标移入停止动画，并放大当前图片*/
        $(".bigbanner").on("mouseenter", "li", function () {
            clearInterval(timer);
            $(this).find("img")
                .stop()
                .animate({
                    width: widthImg * 1.1,
                    height: heightImg * 1.1,
                    //left:leftImg*0.5,
                    //top:topImg*0.5
                    marginLeft: -widthImg / 2 * 1.1,
                    marginTop: -heightImg / 2 * 1.1
                }, 1000);
        });
        /*鼠标离开停止动画，并缩小当前图片*/
        $(".bigbanner").on("mouseleave", "li", function () {
            timer = setInterval(autoPlay, 3000);
            $(this).find("img")
                .stop()
                .animate({
                    width: widthImg,
                    height: heightImg,
                    //left:leftImg*0.5,
                    //top:topImg*0.5
                    marginLeft: -widthImg / 2 * 1,
                    marginTop: -heightImg / 2 * 1
                }, 1000);
        });

        /*焦点图的移入移出*/
        $(".bigbanner>.slide-index").on("mouseenter", "li", function () {
            $index = $(this).index();
            $(".bigbanner>ul>li").eq($index)
                //.find("img")
                .stop()
                .animate({opacity: 1}, 1000)
                .css("display", "block")
                //.end()
                .siblings("li")
                //.find("img")
                .stop()
                .animate({opacity: 0}, 1000, function () {
                    $(this).css("display", "none");
                });
            $(".bigbanner>.slide-index li").eq($index).attr("class", "focus-red").siblings("li").removeAttr("class");
            $
        })
    }

    /*slide左侧广告的切换*/
    $(".tuiian > i").on("click", function () {
        if ($(this).hasClass("showing")) {
            $(this).attr("class", "");
            $(".tuiian>span").html("佳的美正牌2010");
            $(".tuiian").attr("style", "");
            $(".tuiian>i").html("＋");
        } else {
            $(this).attr("class", "showing");
            $(".tuiian").css({
                position: "absolute",
                top: 0,
                width: 200,
                height: 204,
                background: "url('../images/20180601110325191.png') no-repeat"
            });
            $(".tuiian>i").html("-");
            $(".tuiian>span").html("");
        }
    });

    /*slide左侧tab栏切换*/
    $(".left-tab>ol").on("mouseenter", "li", function () {
        $(".left-tab>ul>li").eq($(this).index()).children("ul").attr("class", "active").end().siblings("li").children("ul").attr("class", "hidden");
    });

    /*透明轮播图下面的slide切换(人气抢购/整箱特惠/名庄特卖/精品闪购/白酒/陈年老酒)*/
    $(".main_tab").on("mouseenter", "li", function () {
        $(".slide-tab").stop().animate({marginTop: -$(this).index() * 280}, 400);
    });


    /*wine葡萄酒手风琴*/
    $(".channel-wine-content>.list-right").on("mouseenter", "li", function () {
        if ($(this).index() === 0 || $(this).index() === 1) return;
        $(this).attr("class", "on").siblings("li").each(function () {
            if (!($(this).index() === 0 || $(this).index() === 1))
                $(this).attr("class", "item");
        });

    });


    /*品牌汇手风琴*/
    accordion_banner();
    function accordion_banner() {
        var $index = 0;

        function autoPlay() {
            $(".accordion>ul>li").eq($index).stop().animate({left: $index * 150}, 600).siblings("li").each(function () {
                //console.log($(this));
                if ($(this).index() <= $index) {
                    $(this).stop().animate({left: $(this).index() * 150}, 600)
                } else if ($(this).index() > $index) {
                    $(this).stop().animate({left: ($(this).index()) * 150 + 300}, 600)
                }
                //if($(this).index()===($(".accordion>ul>li").size() - 1)){
                //    $(this).css({width:150,overflow:"hidden"});
                //}else{
                //    $(this).css({width:150,overflow:""});
                //}
            });
            $index++;
            if ($index > $(".accordion>ul>li").size() - 1) {
                $index = 0;
            }
        }

        var timer = setInterval(autoPlay, 2000);

        $(".accordion").on("mouseenter", function () {
            clearInterval(timer);
        });

        $(".accordion").on("mouseleave", function () {
            timer = setInterval(autoPlay, 2000);
        })

        $(".accordion").on("mouseenter", "li", function () {
            $index = $(this).index();
            $(".accordion>ul>li").eq($index).stop().animate({left: $index * 150}, 600).siblings("li").each(function () {
                //console.log($(this));
                if ($(this).index() <= $index) {
                    $(this).stop().animate({left: $(this).index() * 150}, 600)
                } else if ($(this).index() > $index) {
                    $(this).stop().animate({left: ($(this).index()) * 150 + 300}, 600)
                }
            });
        })
    }

    /*品牌汇手风琴下方横向列表*/
    slideBrand();
    function slideBrand() {
        $(".brandlogo>ul").on("mouseenter", "li", function () {
            $(this).find("img").stop().animate({marginLeft: -90}, 600);
        });

        $(".brandlogo>ul").on("mouseleave", "li", function () {
            $(this).find("img").stop().animate({marginLeft: 0}, 600);
        });
    }


    /*进口葡萄酒轮播图*/
    $(".channel-wine>.channel-wine-content>.channel-wine-banner>.slide").lunbo("focusred", true);


    /*接口访问--猜你喜欢*/
    mayLike();
    function mayLike() {
        $.ajax({
            url: "http://localhost/phpserver/maylikejson.php",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var $newLi = $("<li></li>");
                    var content = `<a href="" title="` + data[i].name + `">
                        <img src="` + data[i].img + `" alt="` + data[i].name + `">
                    </a>
                    <dl>
                        <dt>
                            <a href="" class="title">` + data[i].name + `</a>
                        </dt>
                        <dd title="` + data[i].enName + `">Malvasia DELL'EMILIA BRUT</dd>
                        <dd>` + data[i].type + `</dd>
                        <dd>` + data[i].location + `</dd>
                        <dd>` + data[i].hot + `</dd>
                        <dd class="price">￥ ` + data[i].price + `</dd>
                    </dl>`;
                    $newLi.html(content);
                    $(".like-main>ul").append($newLi);
                }

            }
        })

    }


    /*登录后获取用户名(手机号)*/
    loginName();
    function loginName() {
        var cook = document.cookie;
        //console.log(cook);
        var arr = cook.split(",");
        //console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            //console.log(arr[i].split("=")[0]);
            if (arr[i].split("=")[0] === "loginname") {
                var phone = arr[i].split("=")[1];
                var text = phone.slice(0, 3) + "****" + phone.slice(7);
                $(".userinfos").html("<span style='display:inline-block;line-height: 30px'>" + text + "</span><span>,欢迎您</span>")
            }
        }

    }


});
