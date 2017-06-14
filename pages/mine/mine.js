// pages/mine/mine.js
Page({
  data: {
     userInfo: {}
  },
  onLoad: function (options) {
    const value = wx.getStorageSync('user')
    console.log(value)
    this.setData({ userInfo: value })
  }
})
