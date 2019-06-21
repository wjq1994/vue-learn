import VueRouter from 'vue-router'
import routes from '@/router/routes.js'
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/vuex/store'
import { find, intersection, flattenDeep, map, filter } from 'lodash'
const nprogress = require('@/vendor/nprogress').NProgress
import { MessageBox } from 'element-ui'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.afterEach(to => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default {
  run() {
    new Vue({
      render(h) {
        return h(App)
      },
      store,
      router
    }).$mount('#app')
  }
}

export { router }
