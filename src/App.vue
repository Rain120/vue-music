<template>
  <div id="app">
    <my-header ref="header"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MyHeader from 'components/my-header/my-header'
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
</style>
