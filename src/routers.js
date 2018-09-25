import Vue from 'vue'
import VueRouter from 'vue-router'

// all route
import Main from './components/Main.vue'
import page404 from './components/page404.vue'
import lungnodule from './components/story/lungnodule.vue'
import ubee from './components/story/ubee.vue'
import godex from './components/story/godex.vue'
import ptsplus from './components/story/ptsplus.vue'
import uknowiknow from './components/story/uknowiknow.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "root",
      component: Main
    },
    {
      path: "*",
      name: "404",
      component: page404
    },
    {
      path: "/story/medical",
      name: "story-lungnodule",
      component: lungnodule
    },
    {
      path: "/story/house",
      name: "story-ubee",
      component: ubee
    },
    {
      path: "/story/product",
      name: "story-godex",
      component: godex
    },
    {
      path: "/story/tv",
      name: "story-ptsplus",
      component: ptsplus
    },
    {
      path: "/story/school",
      name: "story-uknowiknow",
      component: uknowiknow
    }
  ],
})
 
