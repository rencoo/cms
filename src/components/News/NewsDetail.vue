<template>
  <div>
    <nav-bar title="新闻详情"/>
    <div class="tmp1">
      <div class="news-title">
        <p>{{newsDetail.title}}</p>
        <div>
          <span>{{newsDetail.click}}次点击</span>
          <span>分类：民生经济</span>
          <span>添加时间：{{newsDetail.add_time | convertTime('YYYY-MM-DD')}}</span>
        </div>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      newsDetail: {}// 新闻详情
    }
  },
  created () {
    // 获取路由查询字符串参数id
    let id = this.$route.query.id
    this.$axios.get('getnew/' + id)
      .then(res => {
        this.newsDetail = res.data.message[0]
      })
      .catch(err => {
        console.log('获取新闻详情失败', err)
      })
  }
}
</script>

<style scoped>
  /* 不成功，Vue中css处理时间早于v-html，时间节点不对 */
  /* 类似于以前DOM尚未onload(window.onload事件)，就不可能对DOM进行操作一样 */
  /* nextTick以后才有的元素 */
  /* .news-content img {
    width: 100%;
  } */
</style>
