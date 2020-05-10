import Vue from 'vue'
import VueRouter from 'vue-router'
import BikesIndex from '../views/BikesIndex.vue'
import BikesNew from '../views/BikesIndex.vue'
import BikesShow from '../views/BikesShow.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/bikes',
    name: 'bikes-index',
    component: BikesIndex
  },
  {
    path: '/bikes',
    name: 'bikes-new',
    component: BikesNew
  },
  {
    path: '/bikes/:id',
    name: 'bikes-show',
    component: BikesShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
