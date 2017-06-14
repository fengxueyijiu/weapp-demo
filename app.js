//app.js
App({
  onLaunch: function () {
    wx.login({
      success: (res) => {
        if(res.code){
          wx.getUserInfo({
            success: (res) => {
               wx.setStorageSync('user', res.userInfo)
            }
          })
        }else{
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})
