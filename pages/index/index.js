Page({
  data: {
    courses: []
  },
  onLoad: function(){
    var that = this
    console.log(that)
    wx.request({
      url: 'https://raw.githubusercontent.com/happypeter/weapp-demo/master/doc/index.json', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({ courses: res.data.published })
      },
      fail: function () {
        console.log('fail')
      }
    })
  }
})
