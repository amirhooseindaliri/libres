import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f588c34 = () => interopDefault(import('..\\pages\\Book.vue' /* webpackChunkName: "pages/Book" */))
const _add5bdda = () => interopDefault(import('..\\pages\\Book\\Practice\\index.vue' /* webpackChunkName: "pages/Book/Practice/index" */))
const _747782d8 = () => interopDefault(import('..\\pages\\Book\\practices.vue' /* webpackChunkName: "pages/Book/practices" */))
const _6579c7a1 = () => interopDefault(import('..\\pages\\Book\\resources.vue' /* webpackChunkName: "pages/Book/resources" */))
const _7b6dbdd8 = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _3f7088da = () => interopDefault(import('..\\pages\\Requests\\index.vue' /* webpackChunkName: "pages/Requests/index" */))
const _2abc0c40 = () => interopDefault(import('..\\pages\\StartPractice\\index.vue' /* webpackChunkName: "pages/StartPractice/index" */))
const _57bd30a5 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _acd18e9e = () => interopDefault(import('..\\pages\\auth\\forgotPassword.vue' /* webpackChunkName: "pages/auth/forgotPassword" */))
const _52d43b16 = () => interopDefault(import('..\\pages\\auth\\signin.vue' /* webpackChunkName: "pages/auth/signin" */))
const _29a78e2a = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages/auth/signup" */))
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
      path: "Practice",
      component: _add5bdda,
      name: "Book-Practice"
    }, {
      path: "practices",
      component: _747782d8,
      name: "Book-practices"
    }, {
      path: "resources",
      component: _6579c7a1,
      name: "Book-resources"
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
    path: "/StartPractice",
    component: _2abc0c40,
    name: "StartPractice"
  }, {
    path: "/test",
    component: _57bd30a5,
    name: "test"
  }, {
    path: "/auth/forgotPassword",
    component: _acd18e9e,
    name: "auth-forgotPassword"
  }, {
    path: "/auth/signin",
    component: _52d43b16,
    name: "auth-signin"
  }, {
    path: "/auth/signup",
    component: _29a78e2a,
    name: "auth-signup"
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
