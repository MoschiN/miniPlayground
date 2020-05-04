//获取应用实例
const app = getApp();
Component({
options:{
  addGlobalClass: true,
},
data:{
StatusBar: app.globalData.StatusBar,
CustomBar: app.globalData.CustomBar,
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
}
});