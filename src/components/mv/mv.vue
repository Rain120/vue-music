<template>
  <div class="mv-wrapper">
    <scroll class="scroll-wrapper" ref="scroll" :scrollX="true" :scrollY="false" :data="data">
      <div>
        <mv-tabs></mv-tabs>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </scroll>
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
    margin-top 3rem
</style>
