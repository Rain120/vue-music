<template>
  <scroll class="suggest"
    ref="suggest"
    :data="songs"
    :pullup="pullup"
    :listenScroll="listenScroll"
    @scrollToEnd="searchMore"
    v-show="!searchShow">
    <div>
      <div class="suggest-content">
        <div class="search-suggest" v-show="!searchShow && query && songs.length > 0">
          <p class="title" v-show="showSinger && showList && suggest.artists">{{this.suggestString}}</p>
          <div class="search-suggest-item" v-if="suggest.artists && showSinger">
            <img :src="suggest.artists[0].img1v1Url" width="50" height="50">
            <span>歌手：{{suggest.artists[0].name}}</span>
          </div>
          <div class="search-suggest-item" v-if="suggest.playlists && showList">
            <img :src="suggest.playlists[0].coverImgUrl" width="50" height="50">
            <div class="text">
              <p>歌单：{{suggest.playlists[0].name}}</p>
              <p class="singer">{{suggest.albums[0].artist.name}}</p>
            </div>
          </div>
        </div>
        <ul class="result-list">
          <li class="result-item" @click="selectSong(song)" v-for="(song, index) in songs" :key="index">
            <div class="name">
              <p class="song">{{song.name}}</p>
              <p class="singer">{{song.singer}}</p>
            </div>
          </li>
          <loading v-show="haveMore && query"></loading>
        </ul>
        <div v-show="!haveMore && !songs.length && query" class="no-result-wrapper">{{this.noResult}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import * as apiData from 'api/data'
import * as songClass from 'common/js/song'
import { CODE_OK } from 'common/js/config'

export default {
  props: {
    query: {
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    },
    showList: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      pullup: true,
      listenScroll: true,
      noResult: '抱歉，暂无搜索结果',
      suggestString: '你可能感兴趣',
      beforeScroll: true,
      singer: {},
      songs: [],
      suggest: {},
      searchShow: true,
      page: 0,
      update: true,
      haveMore: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.suggest.refresh()
    })
  },
  methods: {
    selectSong (song) {
      console.log(song)
    },
    search () {
      // console.log(this.$refs.suggest)
      this.searchShow = false
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      apiData.getSearchSongs(this.query, this.page).then(res => {
        if (res.data.code === CODE_OK) {
          if (!res.data.result.songs) {
            this.hasMore = false
            return
          }

          let list = res.data.result.songs
          this.songs = this._normalizeSongs(list)
          this._checkMore(res.data.result)
          this.$emit('refresh')
        }
      })

      this.page += 30

      apiData.getSearchSuggest(this.query).then(res => {
        this.suggest = res.data.result
      })
    },
    searchMore () {
      if (!this.hasMore) {
        return
      }

      if (!this.songs.length) {
        return
      }

      apiData.getSearchSongs(this.query, this.page).then(res => {
        if (res.data.code === CODE_OK) {
          let list = res.data.result.songs

          if (!res.data.result.songs) {
            this.hasMore = false
            return
          }

          this.songs = this.songs.concat(this._normalizeSongs(list))
          this._checkMore(res.data.result)
          this.$emit('refresh')
          this.page += 30
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach(item => {
        ret.push(songClass.createSearchSong(item))
      })
      return ret
    },
    _checkMore (data) {
      if (!this.songs.length || this.songs.length >= data.songCount) {
        this.hasMore = false
      }
    }
  },
  watch: {
    query (val) {
      if (val === '') {
        this.suggest = {}
        this.songs = []
        this.hasMore = false
        return
      }
      this.suggest = {}
      this.songs = []
      this.hasMore = true
      this.page = 0
      this.searchShow = true
      this.search()
    }
  },
  components: {
    Loading,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  .suggest
    height 100%
    overflow hidden
    .suggest-content
      position relative
      width 100%
      top 0
      bottom 0
      .search-suggest
        .title
          padding 0 0 10px 20px
          color #000
          font-size 14px
        .search-suggest-item
          display flex
          align-items center
          padding 8px 20px
          border-bottom 1px solid rgb(228, 228, 228)
          font-size 18px
          img
            flex 0 0 50px
            padding-right 15px
          .text
            width 90%
            p
              padding 3px 0
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .singer
              font-size 15px
              color #aaa
      .result-list
        padding-bottom 30px
        .result-item
          padding 3px 20px
          height 50px
          align-items center
          border-bottom 1px solid rgb(228, 228, 228)
          .name
            width 98%
            p
              padding 4px 0
            .song
              font-size 16px
              color #000
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .singer
              font-size 12px
              color #aaa
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
      .no-result-wrapper
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
