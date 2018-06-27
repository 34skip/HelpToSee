// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
      mid: '0',
      title: '金蝉脱壳',
      score: '7.6',
      mtype: '动作 / 惊悚',
      director: '米凯尔·哈弗斯特罗姆',
      star: '西尔维斯特·史泰龙 / 阿诺·施瓦辛格 / 吉姆·卡维泽...',
      img: '../../assets/image/movie1.png'
    }, {
        mid: '1',
        title: '后来的我们',
        score: '5.9',
        mtype: '剧情 / 爱情',
        director: '刘若英',
        star: '井柏然 / 周冬雨 / 田壮壮 / 曲哲明 / 刘启恒...',
        img: '../../assets/image/movie2.png'
      }, {
      mid: '3',
      title: '你好布拉德',
      score: '7.6',
      mtype: '剧情 / 喜剧 / 音乐',
      director: '麦克·怀特',
      star: '本·斯蒂勒 / 奥斯汀·艾布拉姆斯 / 珍娜·费舍 / 麦克·辛 / 杰梅奈·克莱门特 ...',
      img: '../../assets/image/movie4.png'
    }, {
      mid: '4',
      title: '华盛顿邮报',
      score: '8.2',
      mtype: '剧情 / 惊悚 / 传记 / 历史',
      director: '丽兹·汉娜 / 乔希·辛格',
      star: '梅丽尔·斯特里普 / 汤姆·汉克斯 / 莎拉·保罗森 / 鲍勃·奥登科克 / 崔西·莱茨  ...',
      img: '../../assets/image/movie5.png'
      }, {
        mid: '5',
        title: '变脸',
        score: '8.4',
        mtype: '动作 / 科幻 / 惊悚 / 犯罪',
        director: '麦克·韦柏 / 迈克尔·科拉里',
        star: '约翰·特拉沃尔塔 / 尼古拉斯·凯奇 / 琼·艾伦 / 亚历桑德罗·尼沃拉 / 吉娜·格申  ...',
        img: '../../assets/image/movie6.png'
    }, {
      mid: '6',
      title: '最佳出价',
      score: '8.3',
      mtype: '剧情 / 爱情 / 悬疑',
      director: '朱塞佩·托纳多雷',
      star: '杰弗里·拉什 / 吉姆·斯特吉斯 / 西尔维娅·侯克斯 / 唐纳德·萨瑟兰 / 菲利普·杰克森  ...',
      img: '../../assets/image/movie7.png'
      }, {
        mid: '7',
        title: '间谍同盟',
        score: '7.0',
        mtype: '剧情 / 动作 / 爱情 / 战争',
        director: '罗伯特·泽米吉斯',
        star: '布拉德·皮特 / 玛丽昂·歌迪亚 / 马修·古迪 / 丽兹·卡潘 / 夏洛特·霍普 ...',
        img: '../../assets/image/movie8.png'
    }, {
      mid: '8',
      title: '爱在日落黄昏时',
      score: '8.7',
      mtype: '剧情 / 爱情',
      director: '理查德·林克莱特',
      star: '伊桑·霍克 / 朱莉·德尔佩 / 弗农·多布切夫...',
      img: '../../assets/image/movie9.png'
      }, {
        mid: '9',
        title: '大佛普拉斯',
        score: '8.6',
        mtype: '剧情 / 喜剧',
        director: '黄信尧',
        star: ' 庄益增 / 陈竹昇 / 戴立忍 / 张少怀 / 陈以文...',
        img: '../../assets/image/movie11.png'
      }],
  },

  godetils: function () {
    wx.navigateTo({
      url: '../movieDetails/movieDetails'
    })
  },
  draw: function () {
    var n = Math.floor(Math.random() * this.data.arr.length + 1) - 1;
    console.log(n);  
    wx.showModal({
      content: '当当当~您选中的是"' + this.data.arr[n].title + '"',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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