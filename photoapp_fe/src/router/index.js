import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'


import HomeView from '../views/HomeView.vue'

import Invite from '@/views/Invite.vue'
import LogIn from '@/views/LogIn.vue'
import MyAccount from '@/views/dashboard/MyAccount.vue'
import ImageUpload from '@/views/ImageUpload.vue'
import FrameUpload from '@/views/FrameUpload.vue'
import Invitation from '@/views/Invitation.vue'
import TimeIn from '../views/dashboard/TimeIn.vue'
import TimeOut from '@/views/dashboard/TimeOut.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/invite',
    name: 'Invite',
    component: Invite
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/image-upload',
    name: 'ImageUpload',
    component: ImageUpload,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/frame-upload',
    name: 'FrameUpload',
    component: FrameUpload,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/invitation',
    name: 'Invitation',
    component: Invitation,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/time-in',
    name: 'TimeIn',
    component: TimeIn,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/time-out',
    name: 'TimeOut',
    component: TimeOut,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
