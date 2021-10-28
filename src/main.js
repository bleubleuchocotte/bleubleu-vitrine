import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import PrismicVue from '@prismicio/vue';
import linkResolver from './link-resolver';

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://bleubleu-vitrine.prismic.io/api/v2';

createApp(App)
  .use(PrismicVue, {
    endpoint,
    apiOptions: { accessToken },
    linkResolver
  })
  .mount('#app')
