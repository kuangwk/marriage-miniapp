// pages/invitation/index.js
const app = getApp()

import { DATE, LUNAR, ADDRESS, HOTEL, SHARE_IMG, SHARE_TITLE } from '../../utils/constanst';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    userInfo: {
    },
    mainInfo: {
      he: '邝伟科',
      she: '赖晓燕',
      date: DATE,
      lunar: LUNAR,
      address: ADDRESS,
      hotel: HOTEL,
      cover: 'https://kwk-1256068649.cos.ap-guangzhou.myqcloud.com/WechatIMG145.jpeg',
    },
    isPlayingMusic: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //创建动画
    var animation = wx.createAnimation({

      duration: 3000,
      timingFunction: "ease",
      delay: 600,
      transformOrigin: "50% 50%",

    })


    animation.scale(1).step(); //边旋转边放大


    //导出动画数据传递给组件的animation属性。
    this.setData({
      animationData: animation.export(),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    //console.log(that.data);
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
  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.getBackgroundAudioManager().pause();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.getBackgroundAudioManager().play();
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})