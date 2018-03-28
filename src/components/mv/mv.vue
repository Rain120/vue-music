<template>
  <div class="mv-wrapper">
    <mv-tabs class="tabs"></mv-tabs>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import MvTabs from 'components/mv-tabs/mv-tabs'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {
    MvTabs,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  .mv-wrapper
    position fixed
    top 5.5rem
    bottom 0
    width 100%
    .tabs
      height 2.5rem
</style>
