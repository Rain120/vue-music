<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="recommendMusicLists">
      <div>
        <div class="sliders">
          <div class="slider-wrapper" v-if="banners.length > 0">
            <slider>
              <div v-for="(banner, index) in banners" :key="index">
                <a :href="banner.url">
                  <img class="needsclick" :src="banner.picUrl" @load="loadImage" />
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="tabs">
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon iconfont music-broadcast"></i>
            </div>
            <p class="description">私人FM</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon iconfont music-calendar"></i>
              <p class="date">{{ (new Date()).getDate() }}</p>
            </div>
            <p class="description">每日推荐</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon iconfont music-songs"></i>
            </div>
            <p class="description">歌单</p>
          </div>
          <div class="tab">
            <div class="icon-wrapper">
              <i class="icon iconfont music-rank"></i>
            </div>
            <p class="description">排行榜</p>
          </div>
        </div>
        <div class="recommend-music common" v-if="recommendMusicList.length > 0">
          <div class="title"  @click="showAllMusicList">推荐歌单<i class="icon iconfont music-arrow-right"></i></div>
          <div class="list-content">
            <ul>
              <li @click="showMusicListDetail(item)" v-for="(item, index) in recommendMusicList" :key="index">
                <img :src="item.picUrl">
                <div class="list-play-count">
                  <i class="icon icon-volume-medium"></i><span>{{ parseInt(item.playCount) > 10000 ? ((parseInt(item.playCount / 10000) + '万')) : (parseInt(item.playCount)) }}</span>
                </div>
                <p class="list-name">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommend-private common" v-if="privateContent.length > 0">
          <div class="title">独家放送<i class="icon iconfont music-arrow-right"></i></div>
          <div class="private-content">
            <ul>
              <li @click="showPrivateDetail(item)" v-for="(item, index) in privateContent" :key="index">
                <img v-lazy="item.sPicUrl">
                <p class="private-name">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommend-new-song common" v-if="recommendNewSong.length > 0">
          <div class="title"  @click="showAllNewSong">最新音乐<i class="icon iconfont music-arrow-right"></i></div>
          <div class="new-song-content">
            <ul>
              <li v-for="(song, index) in recommendNewSong" :key="index">
                <img v-lazy="song.album.picUrl">
                <p class="new-song-name">{{ song.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommend-mv common" v-if="recommendMV.length > 0">
          <div class="title">推荐MV<i class="icon iconfont music-arrow-right"></i></div>
          <div class="mv-content">
            <ul>
              <li @click="showMVDetail(item.id)" v-for="(item, index) in recommendMV" :key="index">
                <img v-lazy="item.picUrl">
                <div class="artist">
                  <p class="mv-name">{{ item.name }}</p>
                  <p class="artist-name">{{ item.artistName }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommend-dj-program common" v-if="recommendDjProgram.length > 0">
          <div class="title">主播电台<i class="icon iconfont music-arrow-right"></i></div>
          <div class="dj-program-content">
            <ul>
              <li v-for="(item, index) in recommendDjProgram" :key="index">
                <img v-lazy="item.picUrl">
                <p class="dj-program-name">{{ item.name }}</p>
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
      privateContent: [],
      recommendNewSong: [],
      recommendMV: [],
      recommendDjProgram: []
    }
  },
  created () {
    this._getBanner()
    this._getMusicList()
    this._getPrivateContent()
    this._getMV()
    this._getNewSong()
    this._getDjProgram()
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
    _getNewSong () {
      apiData.getNewSong().then(res => {
        if (res.data.code === CODE_OK) {
          res.data.result.slice(0, 6).forEach(item => {
            this.recommendNewSong.push(item.song)
          })
        }
      })
    },
    _getMV () {
      apiData.getMV().then(res => {
        if (res.data.code === CODE_OK) {
          this.recommendMV = res.data.result
        }
      })
    },
    _getDjProgram () {
      apiData.getDjProgram().then(res => {
        if (res.data.code === CODE_OK) {
          this.recommendDjProgram = res.data.result
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
    },
    showMVDetail (id) {
      console.log('showMVDetail')
    },
    showAllNewSong () {
      console.log('new songs')
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
            width 60px
            height 60px
            margin 7px auto
            border-radius 50%
            border 1.5px solid #d33a31
            position relative
            .date
              position absolute
              top 24px
              left 0px
              right 0
              bottom 0
              text-align center
              color #d33a31
              font-size 19px
            .icon
              font-size 30px
              line-height 60px
              color #d33a31
            .description
              color #303131
              font-size 14px
      .common
        .title
          height 30px
          line-height 30px
          font-size 18px
          // border-left 3px solid #d33a31
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
              position relative
              img
                height 137px
                width 100%
              .list-play-count
                text-align center
                color #fff
                position absolute
                top 5px
                right 5px
                &>span,&>i
                  font-size 13px
              .list-name
                height 40px
                line-height 20px
                padding 2px 0 0 3px
                font-size 14px
                // overflow hidden
                // text-overflow ellipsis
                // white-space nowrap
            li:nth-child(3n+1)
              padding-left 3px
              padding-right 0
            li:nth-child(3n)
              padding-left 0
              padding-right 3px
      .recommend-private
          margin-top 8px
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
      .recommend-new-song
        margin-top 8px
        .new-song-content
          height 100%
          width 100%
          overflow hidden
          ul
            li
              width 33.333%
              float left
              height 160px
              box-sizing border-box
              padding 0 5px
              img
                height 137px
                width 100%
              .new-song-name
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
      .recommend-mv
        margin-top 8px
        .mv-content
          width 100%
          height 100%
          overflow hidden
          ul
            li
              width 50%
              float left
              height 200px
              padding 3px
              box-sizing border-box
              img
                width 100%
                height 150px
              .artist
                line-height 12px
                padding-top 4px
                padding-left 6px
                font-size 14px
                .mv-name, .artist-name
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                .mv-name
                  padding 2px 0 3px 0
                  font-size 14px
                .artist-name
                  font-size 13px
                  padding-top 3px
                  color: #888
            li:nth-child(2n+1)
              padding-left 2px
            li:nth-child(2n)
              padding-right 3px
      .recommend-dj-program
        margin-top 8px
        .dj-program-content
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
              .dj-program-name
                height 40px
                line-height 20px
                padding 2px 0 0 3px
                font-size 14px
                // overflow hidden
                // text-overflow ellipsis
                // white-space nowrap
            li:nth-child(3n+1)
              padding-left 3px
              padding-right 0
            li:nth-child(3n)
              padding-left 0
              padding-right 3px
</style>
