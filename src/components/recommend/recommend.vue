<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll">
      <div>
        <div class="slider-wrapper" v-if="banners.length">
          <slider>
            <div v-for="(banner, index) in banners" :key="index">
              <img :src="banner.pic" />
            </div>
          </slider>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="icon-wrapper">
            <i class="icon icon-fm"></i>
          </div>
          <p class="description">私人FM</p>
        </div>
        <div class="card">
          <div class="icon-wrapper">
            <i class="icon icon-date"></i>
            <p class="date">{{ day }}</p>
          </div>
          <p class="description">每日推荐</p>
        </div>
        <div class="card">
          <div class="icon-wrapper">
            <i class="icon icon-fm"></i>
          </div>
          <p class="description">歌单</p>
        </div>
        <div class="card">
          <div class="icon-wrapper">
            <i class="icon icon-rank-list"></i>
          </div>
          <p class="description">排行榜</p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import { getBanner } from 'api/data'
import { CODE_OK } from 'common/js/config'
export default {
  data () {
    return {
      banners: [],
      day: ''
    }
  },
  created () {
    this._getBanner()
    this.getDate()
  },
  methods: {
    _getBanner () {
      getBanner().then(res => {
        if (res.data.code === CODE_OK) {
          this.banners = res.data.banners
        }
      })
    },
    getDate () {
      this.day = (new Date()).getDate()
    }
  },
  components: {
    Slider,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    width 100%
    height 100%
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
    .cards
      height 100px
      display flex
      .card
        width 25%
        text-align center
        .icon-wrapper
          width 50px
          height 50px
          margin 10px auto
          border-radius 50%
          border 1px solid #d33a31
          position relative
          .date
            position absolute
            top 23px
            left 2px
            right 0
            bottom 0
            text-align center
            color #d33a31
            font-size 12px
          .icon
            font-size 34px
            line-height 50px
            color #d33a31
          .description
            color #303131
            font-size 14px
</style>
