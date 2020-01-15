import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _237ed078 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/",
      component: _237ed078,
      name: "index___pt-br"
    }, {
      path: "/en/",
      component: _237ed078,
      name: "index___en"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
