<template>
  <div class="mv-tabs">
    <div class="tabs">
      <router-link tag="div" to="/mv/recommend-mv" class="tab-item">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" to="/mv/music-mv" class="tab-item">
        <span class="tab-link">音乐</span>
      </router-link>
      <router-link tag="div" to="/mv/show-mv" class="tab-item">
        <span class="tab-link">Show</span>
      </router-link>
      <router-link tag="div" to="/mv/acg-mv" class="tab-item">
        <span class="tab-link">二次元</span>
      </router-link>
      <router-link tag="div" to="/mv/dance-mv" class="tab-item">
        <span class="tab-link">舞蹈</span>
      </router-link>
      <router-link tag="div" to="/mv/game-mv" class="tab-item">
        <span class="tab-link">游戏</span>
      </router-link>
      <router-link tag="div" to="/mv/mvs" class="tab-item">
        <span class="tab-link">mv</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .mv-tabs
    .tabs
      margin-top 3rem
      height 2.5rem
      width 140%
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
      transition all  .3s
    .slide-right-enter
      transform translate(-100%)
    .slide-right-enter-active
      transition all .3s
    .slide-right-leave-active
      transform translate(100%)
      transition all  .3s
</style>
