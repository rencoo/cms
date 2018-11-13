<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img, index) in imgs" :key="index">
        <img :src="img.img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid, index) in grids" :key="index">
          <router-link :to="grid.router">
            <span :class="grid.className"></span>
            <div>{{grid.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [], // 接收轮播图数据
      item: 'getlunbo',
      grids: [
        {
          className: 'cms-news',
          title: '新闻资讯',
          router: {name: 'news.list'}
        },
        {
          className: 'cms-photo',
          title: '图文分享',
          router: {name: 'photo.list', params: {categoryId: 0}}
        },
        {
          className: 'cms-goods',
          title: '商品展示',
          router: {name: 'goods.list', params: {id: 1}}
        },
        {
          className: 'cms-news',
          title: '留言反馈',
          router: {name: 'news.list'}
        },
        {
          className: 'cms-news',
          title: '搜索资讯',
          router: {name: 'news.list'}
        },
        {
          className: 'cms-news',
          title: '联系我们',
          router: {name: 'news.list'}
        }
      ]
    }
  },
  created () {
    this.$axios.get(this.item)
      .then(res => {
        // res.data.message = [{img: '图片地址'}]
        console.log(res)
        this.imgs = res.data.message
      })
      .catch(err => {
        console.log('轮播图获取异常', err)
      })
  }
}
</script>
<style scoped>
  img {
    width: 375px;
  }
  .grid li span {
    display: inline-block; /*需要居中，需要宽高，因此是行内元素*/
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
  /* 九宫格图片 */
  .grid .cms-news {
    background-image: url(../../assets/img/shopcart.png);
  }
</style>
