/*
 jQuery封装无缝轮播
 要注意一个前提: 不针对css封装 只针对我们当前项目的布局封装

 封装:
 我们要利用jQuery封装 那就不是封装一个全局方法那么简单
 应该封装一个



 需要的参数:
 1.小圆点切换显示的 class名字
 2.是否有焦点图
 3.是否有左右滑动
 4.左右滑动的class名字 用来控制显示与隐藏



 */
//jQuery插件的封装
$.fn.lunbo = function (showSquareClass, isFocus, isLeftAndRight,switchClass) {
    //接收当前调用轮播图的对象 以防止后面this发生切换
    var that=this;
    var ul=that.find("ul");
    //把第一个li拼接到最后一张
    ul.append(ul.children("li").eq(0).clone());
    //获取每次移动的宽度
    var moveWidth=ul.children("li").eq(0).width();
    //鼠标移入移出清除定时器
    that.mouseenter(function () {
        clearInterval(timer);
        //如果有左右切换
        if(isLeftAndRight){
            that.find("."+switchClass).show();
        }
    });
    that.mouseleave(function () {
        timer=setInterval(autoPlay,2000);
        //如果有左右切换
        if(isLeftAndRight){
            that.find("."+switchClass).hide();
        }
    });
    //控制图片移动的索引
    var index=0;

    //控制小圆点的索引
    var square=0;
    //启动定时器
    var timer=setInterval(autoPlay,2000);
    function autoPlay(){
        index++;
//            针对最大索引值判断
        if(index>ul.children("li").length-1){
//                瞬间移动到第一张图片
            ul.animate({left:0},0);
            index=1;
        }
        //每次移动ul
        ul.animate({left:-index*moveWidth},400);
        
        //先判断有没有焦点图功能
        if(isFocus){

            square++;
           
            if(square>that.find("ol>li").length-1){
                square=0;
            }
            console.log(that.find("ol>li").eq(square));
            //当前小圆点添加class  其他兄弟小圆点移除class
            that.find("ol>li").eq(square).attr("class",showSquareClass).siblings("li").removeAttr("class");
        }
    }
    if(isFocus){
        //        焦点图的实现:
        that.find("ol>li").mouseenter(function () {
            //这里面的this是js对象
//            alert($(this).index())
            //当前小圆点添加class  其他兄弟小圆点移除class
            that.find("ol>li").eq($(this).index()).attr("class",showSquareClass).siblings("li").removeAttr("class");
            //图片移动的索引要和焦点图保持一致
            square=index=$(this).index();
            //移动ul
            //每次移动ul
            ul.animate({left:-index*moveWidth},400);

        });
    }
    //左右滑动图实现
    if(isLeftAndRight){
        //左边按钮
        that.find("."+switchClass).children("span").eq(0).click(function () {
            index--;
//            针对最小索引值判断
            if(index<0){
//                瞬间移动到第一张图片
                ul.animate({left:-(ul.find("li").length-1)*moveWidth},0);
                index=ul.find("li").length-2;
            }
            //每次移动ul
            ul.animate({left:-index*moveWidth},400);
            //先判断有没有焦点图功能
            if(isFocus){
                square--;
                if(square<0){
                    square=that.find("ol>li").length-1;
                }

                //当前小圆点添加class  其他兄弟小圆点移除class
                that.find("ol>li").eq(square).attr("class",showSquareClass).siblings("li").removeAttr("class");
            }

        });
        //右边按钮
        that.find("."+switchClass).children("span").eq(1).click(function () {
            autoPlay();
        });

    }



}
