// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Tus componentes

import Home from '../pages/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
