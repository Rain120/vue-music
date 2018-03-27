<template>
  <div class="my-header">
    <div class="menu">
      <i class="icon-menu ripple" @click="showSidebar"></i>
    </div>
    <sidebar ref="sidebar"/>
    <div class="option">
      <router-link tag="div" to="/mv" class="optionItem ripple">
        <i class="icon-music"></i>
      </router-link>
      <router-link tag="div" to="/home" class="optionItem ripple">
        <i class="icon-wangyi"></i>
      </router-link>
      <router-link tag="div" to="/friends" class="optionItem ripple">
        <i class="icon-community"></i>
      </router-link>
    </div>
    <div></div>
    <div class="search">
      <i class="icon-search ripple" @click="search"></i>
    </div>
  </div>
</template>

<script>
import Sidebar from 'src/components/sidebar/sidebar'
export default {
  methods: {
    search () {
      console.log('search')
    },
    showSidebar () {
      this.$refs.sidebar.open()
    }
  },
  components: {
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped rel="stylesheet/stylus">
  .my-header
    i
      color #ffffff
      font-size 26px
    display grid
    grid-template-columns 14% 15% 40% 10% 16%
    width 100%
    height 3rem
    background #d33a31
    text-align center
    position absolute
    top 0
    right 0
    .menu, .search
      margin auto
    .option
      height 3rem
      color #e58983
      display flex
      justify-content center
      align-items center
      .optionItem
        flex 1
        vertical-align middle
</style>
