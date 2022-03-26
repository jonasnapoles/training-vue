import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // Home page
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "homeView" */ '../views/HomeView.vue')
  },
     // About page
  { 
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
//Service page
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
