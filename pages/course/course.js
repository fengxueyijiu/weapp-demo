// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    link:'',
    detail:[]

  },
  onLoad:function(options){
    let that = this
    wx.request({
      url: `https://raw.githubusercontent.com/happypeter/weapp-demo/master/doc/${options.link}.json`,
      success: function(res) {
        that.setData({detail: res.data, link: options.link})
        console.log(res.data)
      },
      fail: function() {
        console.log('fail')
      }
    })
  }
})
