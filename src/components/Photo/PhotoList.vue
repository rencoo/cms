<template>
  <div>
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-header">
      <ul>
        <li v-for="c in categorys" :key="c.id">
          <a @click="loadImgsByCategoryId(c.id)">{{c.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 下方的图片 -->
    <div class="photo-list">
      <ul>
        <li v-for="img in imgs" :key="img.id">
          <router-link :to="{name: 'photo.detail', query:{id: img.id}}">
            <img v-lazy="img.img_url" alt="">
            <p>
              <span>{{img.title}}</span>
              <br>
              <span>{{img.zhaiyao}}</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      imgs: [], // 这是图片数据
      categorys: [] // 这是分类信息
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // 路由复用，但参数改变触发； query || params
    // console.log(to)
    this.loadImgById(to.params.categoryId)
    next()
  },
  created () {
    // 1.获取路由参数 categoryId；
    let categoryId = this.$route.params.categoryId
    this.loadImgById(categoryId)
    // 2.获取分类信息
    this.$axios.get('/getimgcategory')
      .then(res => {
        this.categorys = res.data.message
        // 向数组的第一个元素添加一个全部
        this.categorys.unshift({
          id: 0,
          title: '全部'
        })
      })
      .catch(err => {
        console.log('分类信息获取失败', err)
      })
  },
  methods: {
    loadImgsByCategoryId (categoryId) {
      this.$router.push({
        name: 'photo.list',
        params: {
          categoryId: categoryId
        }
      })
    },
    // 通过id获取数据
    loadImgById (id) {
      // 2.通过url拼接参数发送请求
      // 3.获取数据做渲染
      this.$axios.get('getimages/' + id)
        .then(res => {
          this.imgs = res.data.message
          // 判断是否imgs.length = 0
          if (this.imgs.length === 0) {
            this.$toast({
              message: '没有图片',
              iconClass: 'icon iconfont icon-bug'
            })
          }
        })
        .catch(err => {
          console.log('图片列表获取失败', err)
        })
    }
  }
}
</script>
<style scoped>
img{
  height: 200px;
  width: 375px;
}
/* mint-ui 图片懒加载样式 */
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
