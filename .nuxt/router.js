import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f588c34 = () => interopDefault(import('..\\pages\\Book.vue' /* webpackChunkName: "pages/Book" */))
const _53a88af5 = () => interopDefault(import('..\\pages\\Book\\StudentsBook.vue' /* webpackChunkName: "pages/Book/StudentsBook" */))
const _bec029e8 = () => interopDefault(import('..\\pages\\Book\\videos.vue' /* webpackChunkName: "pages/Book/videos" */))
const _9e1dc564 = () => interopDefault(import('..\\pages\\Book\\Workbook.vue' /* webpackChunkName: "pages/Book/Workbook" */))
const _7b6dbdd8 = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _3f7088da = () => interopDefault(import('..\\pages\\Requests\\index.vue' /* webpackChunkName: "pages/Requests/index" */))
const _c3d5a492 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f588c34,
    name: "Book",
    children: [{
      path: "StudentsBook",
      component: _53a88af5,
      name: "Book-StudentsBook"
    }, {
      path: "videos",
      component: _bec029e8,
      name: "Book-videos"
    }, {
      path: "Workbook",
      component: _9e1dc564,
      name: "Book-Workbook"
    }]
  }, {
    path: "/Profile",
    component: _7b6dbdd8,
    name: "Profile"
  }, {
    path: "/Requests",
    component: _3f7088da,
    name: "Requests"
  }, {
    path: "/",
    component: _c3d5a492,
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
