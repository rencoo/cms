<template>
   <li>
       <slot></slot>
   </li>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'my-li',
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped>
    .grid li {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 125px;
        height: 100px;
    }
</style>
