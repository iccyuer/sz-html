//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    errInfo:'>..<',
    isShowError:false,
    isHiddenLoading:true,
    weatherData:new Object(),
    weatherDaily:[]

  },
  //主动通过下拉触发下拉刷新
  onPullDownRefresh(){
    console.log('下拉触发');
    this.setData({
      isHiddenLoading: false
    })
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    this.getLocation();
    
  },

  onLoad: function () {
    this.setData({
      isHiddenLoading: false
    })
    this.getLocation();
  },

  refresh(){
    var that=this;
    this.setData({
      isHiddenLoading: false
    })
    // this.getLocation();
    //通过代码触发下拉刷新
    wx.startPullDownRefresh({success:()=>{
      console.log('点击触发');
      console.log('success');
      // that.getLocation();
    },fail:()=>{
      console.log('fail');
    },complete:()=>{
      console.log('complete');
    }})
  },

  //获取定位
  getLocation(){
    console.log('我要定位了');
    var that=this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude,longitude)
        that.getWeather(res);
        // wx.stopPullDownRefresh();
        // wx.hideNavigationBarLoading();
        // that.setData({
        //   isHiddenLoading: true
        // })
      },
      fail:function(){

      }
    })
  },
  //获取天气
  getWeather(location){
    var that=this;
    wx.request({
      url: 'https://api.jisuapi.com/weather/query',
      data:{
        appkey:'b6bc9c47ef56079b',
        location: location.latitude + ',' + location.longitude
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
        that.setData({
          isHiddenLoading: true
        })
        console.log(res);
        console.log(res.data.result.temp);
        var weatherData=new Object();
        weatherData.temp=res.data.result.temp;
        weatherData.temphigh=res.data.result.temphigh;
        weatherData.templow=res.data.result.templow;
        weatherData.week=res.data.result.week;
        weatherData.city=res.data.result.city;
        weatherData.weather = res.data.result.weather;
        weatherData.weatherIcon = that.getWeatherIcon(res.data.result.weather,'white');
        weatherData.weatherBg = that.getWeatherBg(res.data.result.weather);

        var daily=res.data.result.daily;
        var weatherDaily=[];
        for(var item of daily){
          var value={
            week:item.week,
            weather:item.day.weather,
            weatherIcon: that.getWeatherIcon(item.day.weather,'white'),
            templow:item.night.templow,
            temphigh:item.day.temphigh
          }
          weatherDaily.push(value);
        }
        console.log(weatherData);
        console.log(weatherDaily);
        that.setData({
          weatherData, weatherDaily
        })

      },
      fail:function(){

      }
    })
  },

  getWeatherIcon(weather,type){
    var typeIcon = {
      "多云": "duoyun.png",
      "霾": "mai.png",
      "晴": "qing.png",
      "雾": "wu.png",
      "雷阵雨": "leizhenyu.png",
      "大雪": "daxue.png",
      "大雨": "dayu.png",
      "暴雪": "baoxue.png",
      "暴雨": "baoyu.png",
      "冰雹": "bingbao.png",
      "小雪": "xiaoxue.png",
      "小雨": "xiaoyu.png",
      "阴": "yin.png",
      "雨夹雪": "yujiaxue.png",
      "阵雨": "zhenyu.png",
      "中雨": "zhongyu.png"
    };
    var img = typeIcon[weather];
    if(type==='white'){
      var icon='../../image/white/'+img;
    }else if(type==='black'){
      var icon = '../../image/white/' + img;
    }
    return icon;

  },
  getWeatherBg(weather){
    var background = {
      "大雨": "dayu.gif",
      "小雨": "rain.jpg",
      "多云": "cloudy.jpg",
      "阴天": "overcast.jpg",
      "雷阵雨": "thunder.jpg",
      "晴": "sunny.jpg"
    };
    var img = background[weather];
    var bg = "../../image/background/" + img;
    return bg;
  }
})
