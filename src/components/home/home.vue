<template>
  <div class="home">
    <div class="tabs">
      <router-link tag="div" to="/home/recommend" class="tab-item">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" to="/home/my-friend" class="tab-item">
        <span class="tab-link">朋友</span>
      </router-link>
      <router-link tag="div" to="/home/broadcast" class="tab-item">
        <span class="tab-link">电台</span>
      </router-link>
    </div>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    name () {
      if (this.transitionName === 'slide-right') {
        return 'slide-left'
      } else {
        return 'slide-right'
      }
    }
  },
  watch: {
    $route (to, from) {
      let fromIndex = from.meta.tab
      let toIndex = to.meta.tab
      let diff = parseInt(fromIndex) - parseInt(toIndex)
      this.transitionName = diff > 0 ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    .tabs
      margin-top 3rem
      height 2.5rem
      line-height 2.5rem
      box-sizing border-box
      display flex
      .tab-item
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
          color #333333
        &.router-link-active
          color #d33a31
          border-bottom 2px solid #d33a31
          box-sizing border-box
    .slide-left-enter
      transform translate(100%)
    .slide-left-enter-active
      transition all .3s
    .slide-left-leave-active
      transform translate(-100%)
      transition all .3s
    .slide-right-enter
      transform translate(-100%)
    .slide-right-enter-active
      transition all .3s
    .slide-right-leave-active
      transform translate(100%)
      transition all  .3s
</style>
