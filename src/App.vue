<template>
  <div>
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view class="temp"></router-view>
    <mt-tabbar  fixed v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default { // 导出对象，其实就是你的组件配置
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    // selected (newV, oldV) { // 深度监视是对象；这里是简单监视
    //   // console.log(newV)
    //   this.$router.push({
    //     name: newV// name即我们在index.js里配置的路由的name(替代了原本使用的路径)
    //     // 而newV是我们点击后的selected产生的值，刚好与路由name相互匹配
    //   })
    // }
  },
  methods: {
    changeHash () {
      // 该调用早于子组件赋值给父组件的selected
      // console.log(this.selected)
      // Vue倾向于做完所有判断后再渲染(优化性能))
      // 完成渲染后再调用(默认changeHash在渲染，需要渲染后再changeHash)
      this.$nextTick(function () {
        console.log(this.selected)
        this.$router.push({
          name: this.selected
        })
      })
    }
    // nextTick 让Vue把该干的活干完，我后续用Vue去异步执行
  }
}
</script>
<style>
</style>
