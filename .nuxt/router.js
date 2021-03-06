import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17ceb95e = () => interopDefault(import('../pages/addData.vue' /* webpackChunkName: "pages/addData" */))
const _459101d4 = () => interopDefault(import('../pages/GalleryPage.vue' /* webpackChunkName: "pages/GalleryPage" */))
const _d9ca6050 = () => interopDefault(import('../pages/MyPage.vue' /* webpackChunkName: "pages/MyPage" */))
const _78dab0bf = () => interopDefault(import('../pages/NewsPage.vue' /* webpackChunkName: "pages/NewsPage" */))
const _022fa43c = () => interopDefault(import('../pages/ShopPage.vue' /* webpackChunkName: "pages/ShopPage" */))
const _3a646a64 = () => interopDefault(import('../pages/showData.vue' /* webpackChunkName: "pages/showData" */))
const _5c3138a2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _37a4aee1 = () => interopDefault(import('../pages/vuextest.vue' /* webpackChunkName: "pages/vuextest" */))
const _6bc8f8c2 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _05e5a592 = () => interopDefault(import('../pages/auth/SignUp.vue' /* webpackChunkName: "pages/auth/SignUp" */))
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
    path: "/addData",
    component: _17ceb95e,
    name: "addData"
  }, {
    path: "/GalleryPage",
    component: _459101d4,
    name: "GalleryPage"
  }, {
    path: "/MyPage",
    component: _d9ca6050,
    name: "MyPage"
  }, {
    path: "/NewsPage",
    component: _78dab0bf,
    name: "NewsPage"
  }, {
    path: "/ShopPage",
    component: _022fa43c,
    name: "ShopPage"
  }, {
    path: "/showData",
    component: _3a646a64,
    name: "showData"
  }, {
    path: "/test",
    component: _5c3138a2,
    name: "test"
  }, {
    path: "/vuextest",
    component: _37a4aee1,
    name: "vuextest"
  }, {
    path: "/auth/login",
    component: _6bc8f8c2,
    name: "auth-login"
  }, {
    path: "/auth/SignUp",
    component: _05e5a592,
    name: "auth-SignUp"
  }, {
    path: "/",
    component: _f84a64f6,
    name: "index"
  }, {
    path: "/:slug",
    component: _d0085e00,
    name: "slug"
  }, {
    path: "/NewsPage/:p",
    component: _78dab0bf,
    name: "newspage"
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
