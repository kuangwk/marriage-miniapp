// app.js
import { MUSIC_IMG, MUSIC_URL, MUSIC_TITLE } from './utils/constants';
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
    uid: 1,
    music_url: ''
  }
});