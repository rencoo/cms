<template>
  <mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange" ref="loadmore">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      topStatus: '',
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    handleTopChange (status) {
      this.topStatus = status
      console.log(status)
    },
    loadTop () {
      console.log('函数调用被触发了')
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      console.log('上拉函数调用了')
      // this.$refs.loadmore.onBottomLoaded()
      // loadmore 在初始化时会自动检测它的高度是否能够撑满其容器，
      // 如果不能则会调用 bottom-method，直到撑满容器为止。 (假如数据不够，会无限请求，卡死)
      // 如果不希望使用这一机制，可以将 auto-fill 设为 false。
    }
  }
}
</script>

<style scoped>
</style>
