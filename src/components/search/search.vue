<template>
  <div class="search">
    <search-box ref="searchbox" @query="queryChange"></search-box>
    <div class="search-wrapper" ref="searchwrapper">
      <scroll class="search-scroll" ref="scroll">
        <div>
          <div class="singer-categories" v-show="!query"><i class="icon iconfont music-categories"></i>歌手分类</div>
          <div class="hot-search" v-show="!query">
            <h1 class="title">热门搜索</h1>
              <ul>
                <li class="item" v-for="(item, index) in hotSearchQuery"  @click="addQuery(item.first)" :key="index">
                  <span>{{item.first}}</span>
                </li>
              </ul>
          </div>
          <loading v-if="hotSearchQuery.length === 0"></loading>
          <div class="search-history" v-show="!query">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear">
                <i class="icon iconfont music-clear"></i>
              </span>
            </h1>
          </div>
          <div class="search-suggest" v-show="query">
            <search-result ref="searchresult" :query="query"></search-result>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import SearchBox from 'base/search-box/search-box'
import SearchResult from 'components/search-result/search-result'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import * as apiData from 'api/data'
import { CODE_OK } from 'common/js/config'

export default {
  data () {
    return {
      hotSearchQuery: [],
      query: ''
    }
  },
  created () {
    this._getHotSearch()
  },
  methods: {
    queryChange (query) {
      this.query = query
    },
    addQuery (query) {
      this.$refs.searchbox.setQuery(query)
    },
    _getHotSearch () {
      apiData.getHotSearch().then(res => {
        if (res.data.code === CODE_OK) {
          this.hotSearchQuery = res.data.result.hots
        }
      })
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
    Scroll,
    SearchBox,
    SearchResult
  }
}
</script>

<style lang="stylus" scoped>
  .search
    position fixed
    z-index 10
    left 0
    top 0
    width 100%
    height 100%
    background #fff
    .search-wrapper
      position fixed
      top 43px
      bottom 0
      width 100%
      .search-scroll
        height 100%
        overflow hidden
        .singer-categories
          line-height 40px
          font-size 17px
          width 30%
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
              span
                font-size 13px
        // .loading-container
        //   position absolute
        //   width 100%
        //   top 50%
        //   transform translateY(-50%)
        .search-history
          position relative
          margin 0 20px
          .title
            display flex
            align-items center
            height 40px
            font-size 16px
            .text
              flex 1
            .clear
              i
                font-size 18px
                color #000
        .search-suggest
          position relative
          height 100%
</style>
