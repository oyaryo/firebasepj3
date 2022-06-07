import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cc2b5cf = () => interopDefault(import('../pages/AboutPage.vue' /* webpackChunkName: "pages/AboutPage" */))
const _186e8f98 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _37a4aee1 = () => interopDefault(import('../pages/vuextest.vue' /* webpackChunkName: "pages/vuextest" */))
const _6bc8f8c2 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _75262d19 = () => interopDefault(import('../pages/auth/login_bk.vue' /* webpackChunkName: "pages/auth/login_bk" */))
const _362afcdd = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _dc5779ca = () => interopDefault(import('../pages/auth/register_bk.vue' /* webpackChunkName: "pages/auth/register_bk" */))
const _eec5c2dc = () => interopDefault(import('../pages/firebasetest/addData.vue' /* webpackChunkName: "pages/firebasetest/addData" */))
const _393aa8a0 = () => interopDefault(import('../pages/firebasetest/showData.vue' /* webpackChunkName: "pages/firebasetest/showData" */))
const _f84a64f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d0085e00 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AboutPage",
    component: _6cc2b5cf,
    name: "AboutPage"
  }, {
    path: "/mypage",
    component: _186e8f98,
    name: "mypage"
  }, {
    path: "/vuextest",
    component: _37a4aee1,
    name: "vuextest"
  }, {
    path: "/auth/login",
    component: _6bc8f8c2,
    name: "auth-login"
  }, {
    path: "/auth/login_bk",
    component: _75262d19,
    name: "auth-login_bk"
  }, {
    path: "/auth/register",
    component: _362afcdd,
    name: "auth-register"
  }, {
    path: "/auth/register_bk",
    component: _dc5779ca,
    name: "auth-register_bk"
  }, {
    path: "/firebasetest/addData",
    component: _eec5c2dc,
    name: "firebasetest-addData"
  }, {
    path: "/firebasetest/showData",
    component: _393aa8a0,
    name: "firebasetest-showData"
  }, {
    path: "/",
    component: _f84a64f6,
    name: "index"
  }, {
    path: "/:slug",
    component: _d0085e00,
    name: "slug"
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
