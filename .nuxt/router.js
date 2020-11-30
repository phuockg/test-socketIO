import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e5208fac = () => interopDefault(import('..\\pages\\chat\\index.vue' /* webpackChunkName: "pages/chat/index" */))
const _c84b9402 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _69290002 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chat",
    component: _e5208fac,
    name: "chat"
  }, {
    path: "/user/:id?",
    component: _c84b9402,
    name: "user-id"
  }, {
    path: "/",
    component: _69290002,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
