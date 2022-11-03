import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/:pathMatch(.*)*', redirect: "/"}, // 404
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    switch (to.hash) {
      case "":
        return {top: 0}
            
      default:
        return { 
          el: to.hash,
          top: 125,
        }
    }
  }
})
