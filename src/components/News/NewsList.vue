<template>
<div>
  <nav-bar title="新闻列表"></nav-bar>
  <ul>
     <li v-for="news in newsList" :key="news.id">
       <router-link :to="{name: 'news.detail', query: {id: news.id}}">
         <img :src="news.img_url" alt="">
         <div class="text">
           <span>{{news.title}}</span>
           <div>
             <span>点击数：{{news.click}}</span>
             <span>发表时间：{{news.add_time | convertTime('YYYY-MM-DD')}}</span>
           </div>
         </div>
       </router-link>
     </li>
   </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      newsList: [], // 新闻列表
      item: 'getnewslist' // 请求类别
    }
  },
  // created适合操作数据
  created () {
    this.$axios.get(this.item)
      .then(res => {
        this.newsList = res.data.message
      })
      .catch(err => {
        console.log('新闻列表获取异常', err)
      })
  }
}
</script>

<style scoped>
ul{
  font-size: 14px;
}
li{
  padding: 5px;
  border-bottom: 1px solid grey;
}
img{
  float: left;
  height: 50px;
  width: 50px;
}
.text {
  clear: both;
}
</style>
