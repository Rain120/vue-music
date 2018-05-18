<template>
  <div class="player">
    <transition name="normal">
      <div class="normal-player">
        <div class="normal-header">
          <i class="icon iconfont music-arrow-left"></i>
          <div class="text">
            <p class="song-name">稻香</p>
            <p class="singer">周杰伦</p><i class="icon iconfont music-arrow-right"></i>
          </div>
          <i class="icon iconfont music-share"></i>
        </div>
        <div class="normal-middle"></div>
        <div class="normal-bottom">
          <div class="progress-wrapper">
            <span class="time time-left"></span>
            <div class="progress-bar-wrapper">
              <!-- <progress-bar></progress-bar> -->
            </div>
            <span class="time time-right"></span>
          </div>
          <div class="operators">
            <div class="icon icon-left">
              <i class="icon iconfont music-random"></i>
            </div>
            <div class="icon icon-left">
              <i class="icon iconfont music-prev"></i>
            </div>
            <div class="icon icon-center">
              <i class="icon iconfont music-paly"></i>
            </div>
            <div class="icon icon-right">
              <i class="icon iconfont music-next"></i>
            </div>
            <div class="icon icon-right">
              <i class="icon iconfont music-more-music"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-player">
        <div class="avatar">
          <img src="" alt="">
        </div>
        <div class="text">
          <p class="song-name">稻香</p>
          <p class="singer">周杰伦</p>
        </div>
      </div>
    </transition>
    <audio></audio>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  @keyframes rotat
    0%
      transform rotate(0)
    100%
      transform rotate(360deg)
  .player
    .normal-player
      &.normal-enter-active, &.normal-leave-active
        transition: all 0.4s
      &.normal-enter, &.normal-leave-to
        opacity: 0
        .left
          transform: translate3d(100px, 0, 0)
        .right
          transform: translate3d(-100px, 0, 0)
    .mini-player
      &.mini-enter-active, &.mini-leave-active
        transition: all 0.4s
      &.mini-enter, &.mini-leave-to
        opacity: 0
</style>
