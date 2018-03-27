import * as types from './mutation-types'

const mutations = {
  [types.SET_ALBUMDETAIL_SHOW] (state, show) {
    state.albumDetail.show = show
  },
  [types.SET_ALBUMDETAIL_SHOWLIST] (state, showList) {
    state.albumDetail.showList = Object.assign({}, showList)
  },
  [types.SET_MUSICLISTDETAIL_SHOW] (state, show) {
    state.albumDetail.show = show
  },
  [types.SET_MUSICLISTDETAIL_SHOWLIST] (state, showList) {
    state.albumDetail.showList = Object.assign({}, showList)
  },
  [types.SET_MUSICLISTDETAIL_COPYWRITE] (state, copywriter) {
    state.albumDetail.copywriter = copywriter
  },
  [types.SET_SEARCH_SHOW] (state, searchShow) {
    state.searchShow = searchShow
  },
  [types.SET_SINGER_ARTIST] (state, artist) {
    state.singer.artist = Object.assign({}, artist)
  },
  [types.SET_SINGER_LIST] (state, list) {
    state.singer.list = list
  },
  [types.SET_SINGER_SHOW] (state, show) {
    state.singer.show = show
  },
  [types.SET_MVDETAIL_MVID] (state, id) {
    state.MVDetail.MVId = id
  },
  [types.SET_MVDETAIL_SHOW] (state, show) {
    state.MVDetail.show = show
  }
}

export default mutations
