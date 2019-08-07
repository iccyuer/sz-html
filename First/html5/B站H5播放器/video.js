/**
 * Created by Admin on 2018/5/9.
 */

var playerVideoWrap = document.getElementsByClassName("player-video-wrap")[0];
var playerVideo = document.getElementsByClassName("player-video")[0];
var video = playerVideo.firstElementChild || playerVideo.firstChild;

var videoProgressSlider = document.getElementsByClassName("video-progress-slider")[0];

var videoTime = document.getElementsByClassName("video-time")[0];


/*time的初始化*/
window.onload = function () {
    var totalTime = video.duration-0;
    console.log(video.duration);
    console.log(totalTime);
    videoTime.children[2].innerHTML = formate(totalTime);
};

function formate(time) {
    console.log(time);
    var min = parseInt(time / 60);
    min=min>=10?min:"0"+min;
    var second = parseInt(time % 60);
    second=second>=10?second:"0"+second;
    return min + ":" + second;
}

/*点击wrap开始暂停*/
playerVideoWrap.onclick = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

/*更新进度条*/
video.ontimeupdate = function () {
    console.log(video.currentTime);
    var pb = video.currentTime / video.duration;
    videoProgressSlider.style.left = pb * 100 + "%";

    videoTime.children[0].innerHTML = formate(video.currentTime);

}
