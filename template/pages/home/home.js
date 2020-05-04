//获取应用实例
const app = getApp();
Component({
options:{
  addGlobalClass: true,
},
data:{
StatusBar: app.globalData.StatusBar,
CustomBar: app.globalData.CustomBar,
checkBox:[{
  value:0,
  detail: '男',
  checked: false
},
  {
    value: 1,
    detail: '女',
    checked: false
  }],
  checkBox1: [{
    value: 0,
    detail: '体育',
    checked: false
  },
  {
    value: 1,
    detail: '地理',
    checked: false
  },
    {
      value: 2,
      detail: '化学',
      checked: false
    },
    {
      value: 3,
      detail: '生物',
      checked: false
    },
    {
      value: 4,
      detail: '语文',
      checked: false
    }],
},
methods:{
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
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
     this.setData({
       checkBox: items
    })
  }
}
});