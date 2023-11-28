import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16f3cb29 = () => interopDefault(import('../pages/Book.vue' /* webpackChunkName: "pages/Book" */))
const _4ae18417 = () => interopDefault(import('../pages/Book/StudentsBook.vue' /* webpackChunkName: "pages/Book/StudentsBook" */))
const _606a34a4 = () => interopDefault(import('../pages/Book/videos.vue' /* webpackChunkName: "pages/Book/videos" */))
const _7d701120 = () => interopDefault(import('../pages/Book/Workbook.vue' /* webpackChunkName: "pages/Book/Workbook" */))
const _9e56b748 = () => interopDefault(import('../pages/Profile/index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _5efa4a07 = () => interopDefault(import('../pages/Requests/index.vue' /* webpackChunkName: "pages/Requests/index" */))
const _ac3c653c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Book",
    component: _16f3cb29,
    name: "Book",
    children: [{
      path: "StudentsBook",
      component: _4ae18417,
      name: "Book-StudentsBook"
    }, {
      path: "videos",
      component: _606a34a4,
      name: "Book-videos"
    }, {
      path: "Workbook",
      component: _7d701120,
      name: "Book-Workbook"
    }]
  }, {
    path: "/Profile",
    component: _9e56b748,
    name: "Profile"
  }, {
    path: "/Requests",
    component: _5efa4a07,
    name: "Requests"
  }, {
    path: "/",
    component: _ac3c653c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
