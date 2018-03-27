import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: () => import('src/components/home/home'),
      redirect: '/home/my-music',
      children: [
        {
          path: 'recommend',
          component: () => import('src/components/recommend/recommend'),
          meta: {
            tab: 1
          }
        },
        {
          path: 'my-music',
          component: () => import('src/components/my-music/my-music'),
          meta: {
            tab: 2
          }
        },
        {
          path: 'broadcast',
          component: () => import('src/components/broadcast/broadcast'),
          meta: {
            tab: 3
          }
        }
      ]
    }
  ]
})
