<template>
  <div id="app">
    <my-header ref="header"/>
    <div class="content" ref="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MyHeader from 'base/my-header/my-header'
export default {
  name: 'App',
  methods: {
    init () {
      let windowHeight = document.documentElement.clientHeight
      let headerHeight = this.$refs.header.$el.offsetHeight
      this.$refs.content.style.height = windowHeight - headerHeight
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    position relative
    font-size 13px
    font-family: Helvetica, sans-serif;
    color:#333;
    & > .content
      width 100%
      height 100%
      box-sizing border-box
      padding-top 3rem
      overflow hidden
</style>
