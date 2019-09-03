// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnValue:'click me!',
    longitude:'113',
    latitude:'39'
  },

  hehe(){
    console.log('asa');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getLocation({
    type: 'wgs84',
    success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude
      console.log(latitude,longitude);
      that.longitude=longitude;
      that.latitude=latitude;
      var speed = res.speed
      var accuracy = res.accuracy
      },
      fail:function(){
        console.log('error>..<')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})