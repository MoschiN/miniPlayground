Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    totalPersons: 10,   //总人数
    respondents: 8,      //实际答题人数
    averageDuration: 0.5,  //平均答题时间
    loading: true,
  },
  //  attached() {
  // //统计算法
  //    console.log("success")
  //    let that = this;
  //    wx.showLoading({
  //      title: '数据加载中',
  //      mask: true,
  //    })
  //   }
})