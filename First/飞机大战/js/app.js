/**
 * Created by huise on 2018/4/19.
 */

//此处 用全局变量宽高 保存canvas的宽高
var WIDTH = 480;
var HEIGHT = 580;
//全局变量位置
var bullet_speed = 7;                                  //设置子弹移动的速度 值越大 子弹飞的越快



/*
* 分析 刚才玩的游戏 经过了哪些状态？
* */
/*
* 准备状态
* 读取状态
* 游戏进行状态
* 暂停状态
* 游戏结束状态
* */
/* 用数字表示当前的状态*/
var plane_READY = 1;
var plane_LOADING = 2;
var plane_PLAY = 3;
var plane_PAUSE= 4;
var plane_GAMEOVER= 5;
var current_plane = 0;          //当前的飞机状态




var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

var bg_img = new Image();
bg_img.src= "img/background.png";
var logo = new Image();
logo.src = "img/start.png";
//ctx.drawImage(bg_img ,x ,y)
//ctx.drawImage(bg_img ,x ,y)
/*
* 面向对象的写法
* */
var sky;
bg_img.onload = function(){
    current_plane = plane_READY;
    sky = new Sky(bg_img);
}
function Sky(img){
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = -img.height;
    /*背景图片的绘制*/
    this.draw = function(){
        ctx.drawImage(img,this.x1,this.y1);
        ctx.drawImage(img,this.x2,this.y2);
    }
    /*背景图片的移动*/
    this.move = function(){
        this.y1+=10;                // 设置背景图片移动的速度
        this.y2+=10;
        if(this.y1>=img.height){
            this.y1 = -img.height;
        }
        if(this.y2>=img.height){
            this.y2 = -img.height;
        }
    }
}
/*准备阶段结束*/
/*读取阶段*/
var loadingImage = [];
/*loadingImage[0] = new Image();
loadingImage[0].src = "img/game_loading1.png";
loadingImage[1] = new Image();
loadingImage[1].src = "img/game_loading2.png";
loadingImage[2] = new Image();
loadingImage[2].src = "img/game_loading3.png";
loadingImage[3] = new Image();
loadingImage[3].src = "img/game_loading4.png";*/
for(var i=0;i<4;i++){
    loadingImage[i] = new Image();
    loadingImage[i].src = "img/game_loading"+(i+1)+".png";
}

function Loading(imgs){
    this.x = 0;
    this.index = 0;
    this.y = HEIGHT-imgs[this.index].height;

    this.draw = function(){

        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    /*声明一个变量*/
    this.count = 0;
    this.move = function(){
        /* 如果变量执行5次 再让换一次图片   相当于 定时器执行5次 再换图片的下标*/
        this.count++;
        if(this.count%5 ==0){
            this.index++;
            if(this.index>=3){
                current_plane = plane_PLAY;
            }
        }


    }
}

var loading;
canvas.onclick = function(){
    if(current_plane == plane_READY){
        current_plane = plane_LOADING;
    }
    loading = new Loading(loadingImage);

}
/*加载阶段结束*/
/*游戏进行阶段*/
/*第一个 绘制英雄飞机*/
var hero_img = [];
hero_img[0] = new Image();
hero_img[0].src = "img/hero1.png";
hero_img[1] = new Image();
hero_img[1].src = "img/hero2.png";


function Hero(imgs){
    this.index = 0;
    this.width = 99;
    this.height = 124

    this.x = (WIDTH-this.width)/2;
    this.y = HEIGHT-this.height;
    this.draw = function(){
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.count = 0;
    this.move = function(){
        if(this.index == 0){
            this.index = 1;
        }else if(this.index == 1){
            this.index = 0;
        }
        this.count++;
        if(this.count%5 == 0){
            this.fire();
        }


    }
    this.fire = function(){
        bulletList.list.push(
            new Bullet(bullet_img)
        )
    }
}
var hero = new Hero(hero_img);
canvas.onmousemove = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if(current_plane == plane_PLAY){
        hero.x = x-hero.width/2;
        hero.y = y-hero.height/2;
    }
}

/*发射子弹的方法*/
var bullet_img = new Image();
bullet_img.src = "img/bullet.png";
function Bullet(img){

    this.width = 9;
    this.height = 21;
    this.x = hero.x + (hero.width-this.width)/2;
    this.y = hero.y-this.height;
    this.draw = function(){
        ctx.drawImage(img,this.x,this.y);
    }
    this.delete = false;
    this.move = function(){
        this.y -= bullet_speed;
        //-this.height
        if(this.y<= 200){
            this.delete = true;
        }
    }
}
/*var bullet = new Bullet(bullet_img);*/
function BulletList(){
    this.list = [];
    this.draw = function(){
        for(var i=0;i<this.list.length;i++){
            this.list[i].draw();
        }
    }
    this.move = function(){
        for(var i=0;i<this.list.length;i++){
            this.list[i].move();
            if(this.list[i].delete){
                this.list.splice(i,1);
                i--;
            }
        }
    }


}
var bulletList = new BulletList();









var timer = setInterval(function(){
        sky.draw();
        sky.move();
        switch (current_plane){
            case plane_READY :
                ctx.drawImage(logo,(WIDTH-logo.width)/2,(HEIGHT-logo.height)/2);
                break;
            case plane_LOADING :
                loading.draw();
                loading.move();
                break;
            case plane_PLAY :
                hero.draw();
                hero.move();
                /*试一下一颗子弹是否可以正常飞行*/
              /*  bullet.draw();
                bullet.move();*/
                bulletList.draw();
                bulletList.move();
                break;
            case plane_PAUSE :

                break;
            case plane_GAMEOVER :

                break;
        }
},410)
