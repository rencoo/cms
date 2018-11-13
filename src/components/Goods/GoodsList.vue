<template>
  <div style="height: 960px">
    <nav-bar title="商品展示"></nav-bar>
    <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore">
      <ul>
        <li v-for="goods in goodsList" :key="goods.id">
          <a href="#">
            <img :src="goods.img_url">
            <div v-text="goods.title"></div>
            <div>
              <span>￥{{goods.sell_price}}</span>
              <s>￥{{goods.market_price}}</s>
            </div>
            <div>
              <div>
                热卖中
              </div>
              <div>
                剩件{{goods.stock_quantity}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
// 网络图片 img src 随便玩
// 本地静态资源图片 告知webpack 帮助移动到未来的dist目录
// import ImgSrc from '../xxx.jpg'
// <img :src="ImgSrc"/>
export default {
  name: '',
  data () {
    return {
      goodsList: [] // 接收商品列表数据
    }
  },
  created () {
    let page = this.$route.query.id || '1'
    this.$axios.get('getgoods?pageindex=' + page)
      .then(res => {
        this.goodsList = res.data.message
      })
      .catch(err => {
        console.log(err, '商品列表获取失败')
      })
  },
  methods: {
    loadBottom () {
      console.log('上拉加载调用')
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<style scoped>
</style>
