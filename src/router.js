import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TestPage from '@/pages/TestPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
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
