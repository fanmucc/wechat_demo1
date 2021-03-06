//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    pageHeight: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
  onShow () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    };
    let navigathHeight = wx.getStorageSync('navigationHeight');
    let tabBarHeight = wx.getStorageSync('tabBarHeight');
    let winHeight = wx.getSystemInfoSync()['windowHeight'];
    this.setData({
      pageHeight: winHeight - Number(navigathHeight) - Number(tabBarHeight)
    })
    
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  searchClick () {
    // 搜索事件
    wx.navigateTo({
      url: '../search/search',
      success: function (res) {
        console.log(res, 'res')
      },
      fail: function (err) {
        console.log(err, 'err')
      },
      complete: function() {

      }
    })
  },
  addAccout () {
    // 添加账号
  },
  // 跳转到数据监测页
  routeMonitor () {
    wx.navigateTo({
      url: '../monitor/monitor',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  // 跳转到去水印界面
  remoteWatermark () {
    wx.navigateTo({
      url: '../watermark/watermark',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  // 弹出层
  showPopup() {
    console.log(111)
    this.setData({ show: true });
    wx.hideTabBar({
      success: function(res) {
        console.log('成功隐藏', 'res')
      },
      fail: function (err) {
        console.log(err, 'err')
      }
    })
  },

  onClose() {
    this.setData({ show: false });
  },
})
