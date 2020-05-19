//获取应用实例
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
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