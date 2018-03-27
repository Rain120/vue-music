<template>
  <div class="recommend-mv">
    Recommend mv
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import * as apiData from 'api/data'
import { CODE_OK } from 'common/js/config'
export default {
  data () {
    return {
      recommendMV: []
    }
  },
  created () {
    this._getMV()
  },
  methods: {
    _getMV () {
      apiData.getMV().then(res => {
        if (res.data.code === CODE_OK) {
          console.log(res.data.result)
          this.recommendMV = res.data.result
        }
      })
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>

</style>
