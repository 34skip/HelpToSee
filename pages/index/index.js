//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    tempFilePaths: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gohome: function() {
    wx.navigateTo({
      url: '../movie/movie'
    })
  },
  gocut: function () {
    // wx.navigateTo({
    //   url: '../wx-cropper-master/wx-cropper'
    // })
    var self = this
    wx.chooseImage({
      count: 7, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths
        console.log(res.tempFilePaths)
        self.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  showimg: function () {
    wx.previewImage({
      // current: this.data.tempFilePaths[0], // 当前显示图片的http链接
      urls: this.data.tempFilePaths // 需要预览的图片http链接列表
    })
  },
  onLoad: function () {
    console.log(app)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
// for (let compKey in compObj) {
//   if (compKey == 'data') {
//     // 合并页面中的data
//     let data = compObj[compKey];
//     for (let dataKey in data) {
//       pageObj.data[dataKey] = data[dataKey];
//     }
//   } else {
//     // 合并页面中的方法
//     pageObj[compKey] = compObj[compKey];
//   }
// }
// Page(pageObj);
