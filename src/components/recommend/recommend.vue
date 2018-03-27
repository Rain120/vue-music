<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="recommendMusicLists">
      <div>
        <div class="sliders">
          <div class="slider-wrapper" v-if="banners.length">
            <slider>
              <div v-for="(banner, index) in banners" :key="index">
                <a :href="banner.url">
                  <img class="needsclick" :src="banner.pic" @load="loadImage" />
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="tabs">
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon icon-fm"></i>
            </div>
            <p class="description">私人FM</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon icon-date"></i>
              <p class="date">{{ (new Date()).getDate() }}</p>
            </div>
            <p class="description">每日推荐</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon icon-fm"></i>
            </div>
            <p class="description">歌单</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon icon-rank-list"></i>
            </div>
            <p class="description">排行榜</p>
          </div>
        </div>
        <div class="recommend-music common" v-if="recommendMusicList.length > 0">
          <div class="music-list-title title"  @click="showAllMusicList">推荐歌单<i class="icon icon-right"></i>
          </div>
          <div class="list-content">
            <ul>
              <li @click="showMusicListDetail(item)" v-for="(item, index) in recommendMusicList" :key="index">
                <img :src="item.picUrl">
                <p class="list-name">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommend-private common">
          <div class="private-title title">独家放送</div>
          <div class="private-content">
            <ul>
              <li @click="showPrivateDetail(item)" v-for="(item, index) in privateContent" :key="index">
                <img :src="item.sPicUrl">
                <p class="private-name">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import * as apiData from 'api/data'
import { CODE_OK } from 'common/js/config'
export default {
  data () {
    return {
      checkLoaded: false,
      banners: [],
      recommendMusicLists: [],
      recommendMusicList: [],
      privateContent: []
    }
  },
  created () {
    this._getBanner()
    this._getMusicList()
    this._getPrivateContent()
  },
  methods: {
    _getBanner () {
      apiData.getBanner().then(res => {
        if (res.data.code === CODE_OK) {
          this.banners = res.data.banners
        }
      })
    },
    _getMusicList () {
      apiData.getMusicList().then(res => {
        this.recommendMusicLists = res
        this.recommendMusicList = res.slice(0, 6)
      })
    },
    _getPrivateContent () {
      apiData.getPrivateContent().then(res => {
        if (res.data.code === CODE_OK) {
          this.privateContent = res.data.result
        }
      })
    },
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    },
    showAllMusicList () {
      console.log('all music list')
    },
    showMusicListDetail (item) {
      console.log('music detail')
    },
    showPrivateDetail (item) {
      console.log('private detail')
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
    position fixed
    top 5.5rem
    bottom 0
    width 100%
    .recommend-content
      height 100%
      overflow hidden
      .sliders
        .slider-wrapper
          position relative
          width 100%
          overflow hidden
    .tabs
      height 100px
      display flex
      .tab
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
    .common
      .title
        height 30px
        line-height 30px
        font-size 18px
        border-left 3px solid #d33a31
        text-indent 4px
        padding-left 5px
        margin-bottom 5px
        color #303131
        &.icon
          color #919293
    .recommend-music
      .list-content
        height 100%
        width 100%
        overflow hidden
        ul
          li
            width 33.333%
            float left
            height 200px
            box-sizing border-box
            padding 0 5px
            img
              height 137px
              width 100%
            .list-name
              height 40px
              line-height 20px
              padding 2px 0 0 3px
              font-size 14px
          li:nth-child(3n+1)
            padding-left 3px
            padding-right 0
          li:nth-child(3n)
            padding-left 0
            padding-right 3px
   .recommend-private
    .private-content
      height 100%
      width 100%
      overflow hidden
      ul
        display flex
        justify-content space-between
        flex-wrap wrap
        li
          width 50%
          height 200px
          box-sizing border-box
          img
            width 100%
            height 150px
          .private-name
            height 40px
            line-height 20px
            padding 2px 0 0 3px
            font-size 14px
        li:first-child
          padding 3px
        li:nth-child(2)
          padding 3px
        li:last-child
          padding 0 3px
          width 100%
          img
          width 100%
          height 180px
</style>
