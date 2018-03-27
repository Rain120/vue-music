<template>
  <div class="home">
    <div class="title">
      <div class="titleWrap ripple">
        <router-link tag="div" to="/home/recommend" class="titleItem">发现</router-link>
      </div>
      <div class="titleWrap ripple">
        <router-link tag="div" to="/home/my-music" class="titleItem">我的</router-link>
      </div>
      <div class="titleWrap ripple">
        <router-link tag="div" to="/home/broadcast" class="titleItem">电台</router-link>
      </div>
    </div>
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
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
    width 100%
    height 100%
    background #f2f4f5
    .title
      width 100%
      height 2.5rem
      padding-top .5rem
      box-sizing border-box
      display flex
      .router-link-active
        color #d33a31
        border-bottom 2px solid #d33a31
        box-sizing border-box
      .titleWrap
        width 100%
        height 100%
        color #333333
        .titleItem
          width 100%
          height 100%
          line-height 100%
          font-size 18px
          text-align center
          vertical-align middle
    .slide-left-enter
      transform: translate(100%)
    .slide-left-enter-active
      transition: all .3s
    .slide-left-leave-active
      transform: translate(-100%)
      transition: all  .3s
    .slide-right-enter
      transform: translate(-100%)
    .slide-right-enter-active
      transition: all .3s
    .slide-right-leave-active
      transform: translate(100%)
      transition: all  .3s
</style>
