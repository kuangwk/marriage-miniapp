//index.js
//获取应用实例
const app = getApp();
const uid = app.globalData.uid;
var server = app.globalData.server + "/album";
var appid = app.globalData.appid;
var mainData;
import { PHOTOS, SHARE_TITLE, SHARE_IMG } from '../../utils/constants';

Page({
  data: {
    userInfo: {},
    slideList: PHOTOS,
  },
  onLoad: function() {

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  onShareAppMessage: function() {
    return {
      title: SHARE_TITLE,
      imageUrl: SHARE_IMG,
      path: 'pages/index/index',
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  previewImage: function(e) {
    var imgsurl = this.data.slideList
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imgsurl // 需要预览的图片http链接列表
    })
  },
})