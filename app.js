// app.js
import { MUSIC_IMG, MUSIC_URL, MUSIC_TITLE } from './utils/constanst';
App({
  onLaunch: function() {
    const playMan = wx.getBackgroundAudioManager();
    playMan.onError((e) => {
      console.error('onError', e)
    })
    playMan.title = MUSIC_TITLE
    playMan.coverImgUrl = MUSIC_IMG
    playMan.src = MUSIC_URL
  },
  onHide: function() {
    wx.getBackgroundAudioManager().pause();
  },
  onShow: function() {
    wx.getBackgroundAudioManager().play();
  },
  globalData: {
    userInfo: null,

    // 下面填写酒店相关信息
    lat: 30.0000,
    lon: 120.000000,
    addressName: "希尔顿大酒店",

    uid: 1,
    music_url: ''
  }
});