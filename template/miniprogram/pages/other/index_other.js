const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  lifetimes: {

    attached: function () {
      this.mapCtx = wx.createMapContext('myMap')
      this.mapCtx.moveToLocation()//将当前位置移动到地图中心
      // 在组件实例进入页面节点树时执行
      console.log('在组件实例进入页面节点树时执行')
      var that = this
      wx.getLocation({

        type: 'gcj02', //工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标   wgs84
        success(res) {
          that.locLat = res.latitude
          that.locLng = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          console.log('位置信息' + that.locLat + that.locLng)
        }
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
  },
  /**
  * 组件的属性列表
  */
  properties: {

  },

  data: {
    locLat: '',
    locLng: '',
    a: 5
  },
  methods: {

  }
});