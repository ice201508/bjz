import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound/index.vue'
import Signup from '../views/Signup/index.vue'
import layout from '../views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },{
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },{
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
