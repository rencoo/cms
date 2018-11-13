<template>
   <div class="cms-s-header">
       <div @click="goback"><h1>&lt;</h1></div>
       <h1 class="page-title">{{title}}</h1>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'nav-bar',
  data () {
    return {}
  },
  props: ['title'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.cms-s-header{
  height: 40px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 40px;
}
.cms-s-header div {
  position: absolute;
  left: 0;
}
.cms-s-header h1 {
  display: inline-block;
}
</style>
