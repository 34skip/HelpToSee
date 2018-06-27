//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://ozfrvjgew.bkt.clouddn.com/sad23.jpg',
      'http://ozfrvjgew.bkt.clouddn.com/321.jpg'
    ],
    arr: [1,1,1,1,1],
    userInfo: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    console.log(app)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        // hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          // hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            // hasUserInfo: true
          })
        }
      })
    }
  },
  godetails: function () {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }

})