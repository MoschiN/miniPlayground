//获取应用实例
const app = getApp();
Component({
options:{
  addGlobalClass: true,
},
data:{
StatusBar: app.globalData.StatusBar,
CustomBar: app.globalData.CustomBar,
}
});