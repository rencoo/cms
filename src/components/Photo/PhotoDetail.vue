<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>
    <div>
      <p>{{info.title}}</p>
      <span>发起日期: {{info.add_time | convertTime('YYYY-MM-DD')}}</span>
      <span>{{info.click}}次浏览</span>
      <span>分类: 民生经济</span>
    </div>
    <!-- <ul>
      <li v-for="(img, index) in imgs" :key="index">
        <img :src="img.src" alt="">
      </li>
    </ul> -->
    <vue-preview :slides="imgs"></vue-preview>
    <div>
      <p v-html="info.content"></p>
    </div>
    <!-- 使用评论组件 -->
    <comment :cid="$route.query.id"></comment>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      info: {}, // 图文详情数据
      imgs: [] // 缩略图
    }
  },
  created () {
    let id = this.$route.query.id
    // 获取详情
    this.$axios.get('getimageInfo/' + id)
      .then(res => {
        // 数据结构是一个数组，为了方便直接取0
        this.info = res.data.message[0]
      })
      .catch(err => {
        console.log('图文详情模块获取失败', err)
      })
    // 获取缩略图
    this.$axios.get('getthumimages/:' + id)
      .then(res => {
        console.log(res)
        this.imgs = res.data.message
        this.imgs.forEach(img => {
          img.msrc = img.src
          img.w = 600
          img.h = 400
        })
      })
      .catch(err => {
        console.log('缩略图获取失败', err)
      })
  }
}
</script>

<style scoped>
</style>
