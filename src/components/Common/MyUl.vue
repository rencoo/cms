<template>
   <ul class="clearfix">
       <slot></slot>
   </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'my-ul',
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped>
    /* 九宫格 */
    ul { /* 作用域是组件内，因此只写ul即可 */
        list-style: none;
        overflow: hidden;
    }
    ul .clearfix:after{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>
