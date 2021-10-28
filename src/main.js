import { createApp } from 'vue'
import { createPrismic } from '@prismicio/vue';
import { router } from './router.js';
import App from './App.vue';
import './styles/main.scss'

const prismic = createPrismic({ endpoint: 'https://bleubleu-vitrine.prismic.io/api/v2' });

createApp(App)
  .use(router)
  .use(prismic)
  .mount('#app')
