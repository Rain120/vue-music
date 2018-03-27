import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: () => import('components/home/home'),
      redirect: '/home/my-music',
      children: [
        {
          path: 'recommend',
          component: () => import('components/recommend/recommend'),
          meta: {
            tab: 1
          }
        },
        {
          path: 'my-music',
          component: () => import('components/my-music/my-music'),
          meta: {
            tab: 2
          }
        },
        {
          path: 'broadcast',
          component: () => import('components/broadcast/broadcast'),
          meta: {
            tab: 3
          }
        }
      ]
    },
    {
      path: '/mv',
      component: () => import('components/mv/mv'),
      redirect: '/mv/recommend-mv',
      children: [
        {
          path: 'recommend-mv',
          component: () => import('components/recommend-mv/recommend-mv'),
          meta: {
            tab: 1
          }
        },
        {
          path: 'music-mv',
          component: () => import('components/music-mv/music-mv'),
          meta: {
            tab: 2
          }
        },
        {
          path: 'show-mv',
          component: () => import('components/show-mv/show-mv'),
          meta: {
            tab: 3
          }
        },
        {
          path: 'acg-mv',
          component: () => import('components/acg-mv/acg-mv'),
          meta: {
            tab: 4
          }
        },
        {
          path: 'dance-mv',
          component: () => import('components/dance-mv/dance-mv'),
          meta: {
            tab: 5
          }
        },
        {
          path: 'game-mv',
          component: () => import('components/game-mv/game-mv'),
          meta: {
            tab: 6
          }
        },
        {
          path: 'mvs',
          component: () => import('components/mvs/mvs'),
          meta: {
            tab: 7
          }
        }
      ]
    },
    {
      path: '/friends',
      component: () => import('components/friends/friends')
    },
    {
      path: '*',
      redirect: '/home/my-music'
    }
  ]
})
