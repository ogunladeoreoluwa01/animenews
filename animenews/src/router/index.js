import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/anime/:id',
      name: 'anime',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/animeView.vue')
    },
    {
      path: '/manga/:id',
      name: 'manga',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MangaView.vue')
    },
    {
      path: '/anime/search/:search', // Define your route with parameter
      name: 'Animesearch',
      component: () => import('../views/animeSearchView.vue')
    },
    {
      path: '/manga/search/:search', // Define your route with parameter
      name: 'Mangasearch',
      component: () => import('../views/mangaSearchView.vue')
    },
    {
      path: '/anime/tagSearch/:tag', // Define your route with parameter
      name: 'Animegener',
      component: () => import('../views/animeGenerView.vue')
    },
    {
      path: '/manga/tagSearch/:tag', // Define your route with parameter
      name: 'Mangagener',
      component: () => import('../views/mangaGenerView.vue')
    }
    // { path: '*', component: () => import('../views/notfoundView.vue') }
  ]
})

export default router
