/*
 * @Author: Rainy
 * @Date: 2018-03-26 16:03:05
 * @Last Modified by: Rainy
 * @Last Modified time: 2018-03-26 16:50:19
 */
// 详见 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi
import axios from 'axios'
import apiConfig from './config'

// 获取轮播图数据
export function getBanner () {
  let url = apiConfig.recommendBannerPath
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取专辑内容
export function getAlbum (id) {
  let url = apiConfig.AlbumDetailPath + '?id=' + id
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌词
export function getLyric (id) {
  let url = apiConfig.lyricPath + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

/**
 * mv 评论
 * @param {*} id 必选参数, mv id
 * @param {*} limit 可选参数,取出评论数量 , 默认为 20
 * @param {*} offset 偏移数量,用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export function getMVComment (id, limit, offset) {
  let url = apiConfig.MVComment + `?id=${id}&limit=${limit}&offset=${offset}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取 mv 数据
export function getMVDetail (id, limit, offset) {
  let url = apiConfig.MVDetail + `?mvid=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取相似歌手
export function getMVSimi (id) {
  let url = apiConfig.MVSimi + `?mvid=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌单详情
export function getMusicListDetail (id) {
  let url = apiConfig.musicListDetailPath + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 推荐 mv
export function getMv () {
  let url = apiConfig.recommendMVPath
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 推荐歌单
export function getMusic () {
  let url = apiConfig.recommendMusicListPath
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 独家放送
export function getPrivateContent () {
  let url = apiConfig.recommendPrivatePath
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

/**
 * 搜索
 * @param {*} keywords 必选参数，关键词
 * @param {*} type 搜索类型默认为 1 即单曲,
  *       取值意义: 1: 单曲 10: 专辑 100: 歌手
 *                 1000: 歌单 1002: 用户 1004: MV
 *                 1006: 歌词 1009: 电台
 * @param {*} limit 可选参数，返回数量，默认是30
 * @param {*} offset 可选参数， 用于分页，如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export function getSearch (keywords, type, limit, offset) {
  let url = apiConfig.search + `?keywords=${keywords}&type=${type}&limit=${limit}&offset=${offset}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌手专辑
export function getSingerAlbum (id) {
  let url = apiConfig.singerAlbum + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌手描述
export function getSingerDesc (id) {
  let url = apiConfig.singerDesc + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌手 mv
export function getSingerMV (id) {
  let url = apiConfig.singerMV + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// 获取歌手单曲
export function getSingerMusic (id) {
  let url = apiConfig.singerMusic + `?id=${id}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

// mv 排行
export function getTopMV (limit, offset) {
  let url = apiConfig.topMV + `?limit=${limit}&offset=${offset}`
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}