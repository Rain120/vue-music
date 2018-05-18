<template>
  <div class="search-box">
    <i class="icon iconfont music-arrow-left" @click="back"></i>
    <input class="box" v-model="query" ref="query" :placeholder="placeholder" />
    <i class="icon iconfont music-close" @click="clear" v-show="query"></i>
  </div>
</template>

<script>
import * as util from 'common/js/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入歌曲或歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
      this.query = ''
    },
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    },
    blur () {
      this.$refs.query.blur()
    }
  },
  created () {
    this.$watch('query', util.debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 200))
  }
}
</script>

<style lang="stylus" scoped>
  .search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 0 6px
    border-radius 6px
    height 40px
    .music-arrow-left
      font-size: 34px
      color #d33a31
    .box
      height 100%
      width 83%
      float right
      margin-right 5px
      font-size 20px
      border none
      outline none
      border-bottom 1px solid #d33a31
    .music-close
      border-radius 50%
      font-size 28px
      color #d33a31
</style>
