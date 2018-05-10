<template>
  <div class="mv-list-show">
    <scroll class="mv-list-wrapper" ref="scroll" :data="mvList">
      <div class="mv-content">
        <ul>
          <li class="item" v-for="(mv, index) in mvList" :key="index">
            <img v-lazy="mv.cover" @load="loadImage">
            <div class="artist">
              <p class="mv-name">{{ mv.name }}</p>
              <p class="artist-name">{{ mv.artistName }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading-container" v-show="!mvList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
export default {
  data () {
    return {
      checkedLoaded: false
    }
  },
  props: {
    mvList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
  .mv-list-show
    position fixed
    top 5.5rem
    bottom 0
    width 100%
    .mv-list-wrapper
      padding 0 1px
      height 100%
      overflow hidden
      .mv-content
        .item
          height 185px
          width 100%
          img
            width 100%
            height 150px
          .artist
            height 30px
            margin-top 2px
            padding-left 5px
            .mv-name
              font-size 14px
            .artist-name
              font-size 12px
              margin-top 3px
              color #888
      .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
