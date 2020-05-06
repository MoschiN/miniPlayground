// pages/Main/home_main.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit(e) {
      let plugin = requirePlugin('routePlan');
  let key = 'FHLBZ-RBN3I-R2HG4-5QL4P-MOWCO-6ABDG';  //使用在腾讯位置服务申请的key
  let referer = 'ColorUI-template-Question';   //调用插件的app的名称
  let endPoint = JSON.stringify({  //终点
    'name': '吉野家(北京西站北口店)',
    'latitude': 39.89631551,
    'longitude': 116.323459711
  });
  wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
  });
  }
})