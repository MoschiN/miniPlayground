//获取应用实例
const app = getApp();
Component({
  // properties:{
  //   questionResult: '',
  // },
  options: {
    addGlobalClass: true,
  },
  properties:{

  },
  lifetimes:{
    created:function(){
      console.log('生命周期')
      const db = wx.cloud.database()
      db.collection('question_List').get({
        success: function (res) {
          // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
          // console.log(JSON.stringify(res.data[0].answer_List[0]) + '问答的列表')
          console.log(JSON.stringify(checkBox[0]) + '本地数据')
          
          this.setData({
            questionResult: checkBox[0].detail
             })
        }, fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    }
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    checkBox: [{
      value: 0,
      detail: '男',
      checked: false
    },
    {
      value: 1,
      detail: '女',
      checked: false
    }],
    checkBox1: [{
      value: 10,
      detail: '体育',
      checked: false
    },
    {
      value: 11,
      detail: '地理',
      checked: false
    },
    {
      value: 12,
      detail: '化学',
      checked: false
    },
    {
      value: 13,
      detail: '生物',
      checked: false
    },
    {
      value: 14,
      detail: '语文',
      checked: false
    }],
  },
  methods: {
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    languageChange: function (e) {
      this.setData({
        languageChanger: e.detail.value
      });
    },
    ChooseCheckbox(e) {
      let items = this.data.checkBox;
      let values = e.currentTarget.dataset.target.value;
      console.log("测试中VALUE" + values)
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break
        }
      }
      this.setData({
        checkBox: items
      })
    },
    ChooseCheckbox1(e) {
      let items = this.data.checkBox1;
      let values = e.currentTarget.dataset.target.value;
      console.log("测试中VALUE" + values)
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break
        }
      }
      this.setData({
        checkBox1: items
      })
    }
  }
});