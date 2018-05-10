<template>
  <div class="search">
    <div class="search-box">
      <span class="back" @click="back"><i class="icon iconfont music-arrow-left"></i></span>
      <input type="text" placeholder="请输入歌曲或歌手" v-model="query" />
    </div>
    <div class="search-wrapper">
      <scroll class="search-scroll" ref="scroll" :data="hotSearchQuery">
        <div class="singer-categories"><i class="icon iconfont music-categories"></i>歌手分类</div>
        <div class="hot-search">
          <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotSearchQuery"  @click="addQuery(item.first)" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
        </div>
        <loading v-if="hotSearchQuery.length === 0"></loading>
        <div class="search-history">
          <h1 class="title">搜索历史</h1>
        </div>
        <div class="search-result">
          <scroll :data="result">
            <ul v-for="(item, index) in result" :key="index">
              <li>
                <span>{{item.name}} - {{item.artists[0].name}}</span>
              </li>
            </ul>
          </scroll>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import * as apiData from 'api/data'
import * as util from 'common/js/util'
import { CODE_OK } from 'common/js/config'

export default {
  data () {
    return {
      hotSearchQuery: [],
      result: [],
      resultTotal: 0,
      hasMore: true,
      query: ''
    }
  },
  created () {
    this._getHotSearch()
    this.$watch('query', util.debounce((newQuery) => {
      this._getSearch()
    }, 200))
  },
  methods: {
    back () {
      this.$router.push('/mine')
    },
    addQuery (query) {
      this.query = query
    },
    _getSearch () {
      console.log(this.query)
      apiData.getSearch(this.query).then(res => {
        if (res.data.code === CODE_OK) {
          let ret = res.data.result
          console.log(ret)
          this.result = this._normalizeSongs(ret.songs)
          this.resultTotal = ret.songCount
        }
      })
    },
    _getHotSearch () {
      apiData.getHotSearch().then(res => {
        if (res.data.code === CODE_OK) {
          this.hotSearchQuery = res.data.result.hots
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach(element => {
        ret.push(element)
      })
      return ret
    }
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    }
  },
  components: {
    Loading,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  .search
    position: fixed
    z-index: 10
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: #fff
    .search-box
      width 100%
      height 40px
      .back
        width 13%
        float left
        i
          display block
          margin 5px 23%
          font-size 34px
          color #d33a31
      input
        height 100%
        width 85%
        float right
        margin-right 5px
        font-size 20px
        border none
        outline none
        border-bottom 1px solid #d33a31
    .singer-categories
      line-height 40px
      font-size 17px
      width 22%
      margin 15px auto
    .hot-search
      .title
        margin-bottom 10px
      ul
        margin 5px 20px
        .item
          display inline-block
          padding 5px 10px
          margin 0 20px 10px 0
          border-radius 6px
          border 1px solid #ccc
          background-color #d33a31
          color #fff
    .loading-container
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
</style>
