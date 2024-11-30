import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import Invite from '@/views/Invite.vue'
import LogIn from '@/views/LogIn.vue'
import MyAccount from '@/views/dashboard/MyAccount.vue'
import ImageUpload from '@/views/ImageUpload.vue'
import FrameUpload from '@/views/FrameUpload.vue'
import Invitation from '@/views/Invitation.vue'
import TimeIn from '@/views/dashboard/TimeIn.vue'
import TimeOut from '@/views/dashboard/TimeOut.vue'
import RestaurantList from "@/views/RestaurantList.vue";
import RestaurantCreate from "@/views/RestaurantCreate.vue";
import Statistics from "@/views/Statistics.vue";
import Reports from "@/views/Reports.vue";
import ListImages from "@/views/ListImages.vue"
import ImageDownload from '@/views/ImageDownload.vue'
import RestaurantDetails from '@/views/RestaurantDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/invite',
    name: 'Invite',
    component: Invite,
    meta: {
      requireLogin: true
    }
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
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/image-upload',
    name: 'ImageUpload',
    component: ImageUpload,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/frame-upload',
    name: 'FrameUpload',
    component: FrameUpload,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/invitation',
    name: 'Invitation',
    component: Invitation,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/time-in',
    name: 'TimeIn',
    component: TimeIn,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/time-out',
    name: 'TimeOut',
    component: TimeOut,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/restaurants-list",
    name: "RestaurantList",
    component: RestaurantList,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/restaurant-register",
    name: "RestaurantCreate",
    component: RestaurantCreate,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/list-images",
    name: "ListImages",
    component: ListImages,
    meta: {
      requireLogin: true
    }
  },
  {
    path: "/image-download/:id",
    name: "ImageDownload",
    component: ImageDownload,
  },
  {
    path: "/restaurant/:id",
    name: "RestaurantDetails",
    component: RestaurantDetails,
    meta: {
      requireLogin: true
    }
  },
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
