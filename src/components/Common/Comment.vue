<template>
  <div class="">
    <ul>
      <li>
        <div>
          <span>提交评论</span>
          <span><a href="">返回</a></span>
        </div>
      </li>
      <li>
        <textarea v-model="newComment"></textarea>
      </li>
      <li>
        <mt-button @click="sendMsg" type="primary" size="large">发表评论</mt-button>
      </li>
      <li>
        <div>
          <span>评论列表</span>
          <span>44条评论</span>
        </div>
      </li>
    </ul>
    <ul>
      <li v-for="(msg, index) in msgs" :key="index">
        {{msg.user_name}}: {{msg.content}} {{msg.add_time | relativeTime}}
      </li>
    </ul>
    <mt-button size="large" type="danger" plain @click="loadMore(page)">加载更多</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'comment',
  data () {
    return {
      page: 1, // 组件内加载的页面
      msgs: [], // 消息数据
      newComment: '' // 新的消息
    }
  },
  props: ['cid'], // comment 对应的id
  created () {
    // 使用这个组件的时候，是否有页码；没有就是第一页(用户到底要看第几页的评论);评论有好几页
    this.page = this.$route.query.page || '1'
    this.loadMore()
  },
  methods: {
    // 根据页码发请求
    // firstLoad () {
    //   this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
    //     .then(res => {
    //       if (res.data.message.length === 0) {
    //         this.$toast('没有数据')
    //       }
    //       this.msgs = res.data.message
    //       this.page++ // 页码自增
    //     })
    //     .catch(err => {
    //       console.log('评论数据获取失败', err)
    //     })
    // },
    // 点击按钮的调用
    // 该函数传参，表示页面点击按钮，这个时候数据是追加；否则不传参数，
    // 就是赋值，一般来讲是针对第一次或者第n页数据的时候
    loadMore (page) {
      this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then(res => {
          if (res.data.message.length === 0) {
            this.$toast('没有数据')
          }
          if (page) {
            this.msgs = this.msgs.concat(res.data.message)
          } else {
            this.msgs = res.data.message
          }
          this.page++ // 页码自增
        })
        .catch(err => {
          console.log('评论数据获取失败', err)
        })
    },
    // 发表评论
    sendMsg () {
      // 发表前判断是否为空
      if (this.newComment.trim() === '') {
        return this.$toast('评论信息不能为空')
      }
      // 获取评论信息 this.newComment
      // axios十分智能，如果你传给它的是key=value的形式，那它会自动给你加上x-www-form-urlencoded
      // 描述我的信息就是键值对(Content-Type头部信息就会被设置为x-www...)
      // 如果你给的是对象，那么Content-Type头部信息就自动会变为Application/JSON
      // 这里API没有告诉我们可以传JSON，所以我们就只能传字符串了
      this.$axios.post('postcomment/' + this.cid, 'content=' + this.newComment)
        .then(res => {
          // 发表之后，清空评论框
          this.newCommnet = ''
          // 加载第一页的数据，就是最新的数据
          this.loadMore()
        })
        .catch(err => {
          console.log('发表评论失败', err)
        })
    }
  }
}
</script>
<style scoped>
</style>
