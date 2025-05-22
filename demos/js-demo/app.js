// app.js
import ffcClient from './ffc-wechat-miniprogram-sdk/index';

App({
  onLaunch() {
    const option = {
      api: "https://feat.test.com/",
      secret: "", // replace with your won secret
      user: {
        id: 'anonymous',
        userName: 'anonymous',
        email: ''
      }
    };

    // initialization client
    ffcClient.init(option);
  },
  globalData: {
    userInfo: null
  }
})
