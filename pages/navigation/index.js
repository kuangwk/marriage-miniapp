// pages/dirction.js
const app = getApp();

import { LAT, LON, HOTEL, ADDRESS, HE_TEL, SHE_TEL, TIME, DATE, SHARE_TITLE, SHARE_IMG, HE_LETTER, SHE_LETTER }from '../../utils/constants';

Page({

  /**
   * Page initial data
   */
  data: {
    latitude: LAT,
    longitude: LON,
    heTel: HE_TEL,
    sheTel: SHE_TEL,
    he: HE_LETTER,
    she: SHE_LETTER,
    time: TIME,
    date: DATE,
    markers: [{
      id: 1,
      latitude: LAT,
      longitude: LON,
      iconPath: "/images/location.png",
      width: 50,
      height: 50,
      callout: {
        content: HOTEL,
        // color: '#ccc',
        fontSize: 14,
        // borderWidth: 1,
        borderRadius: 10,
        // borderColor: '#333',
        // bgColor: '#fff',
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }],
  },

  callhe: function(event) {
    wx.makePhoneCall({
      phoneNumber: this.data.heTel
    })
  },
  callshe: function(event) {
    wx.makePhoneCall({
      phoneNumber: this.data.sheTel
    })
  },

  onMarkerTap() {
    wx.openLocation({
      latitude: LAT,
      longitude: LON,
      scale: 18,
      name: HOTEL,
      address: ADDRESS,
      success(res) {
        console.log(res)
      }
    }, )
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
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
  }
})