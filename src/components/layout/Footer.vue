<template>
  <footer
    v-if="footer"
    id="footer"
    class="footer"
  >
    <prismic-image
      :field="footer.data.image"
      class="footer__img"
    />
    <Socials
      :fields="footer.data.socials"
      small
    />
    <p class="footer__copyright">
      <span>©{{ year }}, </span>
      <span>{{ footer.data.copyright }}</span>
    </p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import Socials from '../socials/Socials.vue';

const { client } = usePrismic();
let footer = ref(null);

async function getFooterContent() {
  footer.value = await client.getSingle('footer', {
    fetchLinks: ['social_media.name', 'social_media.link'],
  }, null);
}

const year = ref(new Date().getFullYear());

getFooterContent()
</script>

<style lang="scss" scoped>
.footer {
  padding: 48px 16px 16px 16px;
  text-align: center;
}

.footer__img {
  width: 100px;
  margin-bottom: 32px;
  filter: $filter-to-primary;
}

.footer__copyright {
  margin-top: 16px;
  font-family: $font-primary;
  font-weight: 10;
  font-variation-settings: 'wdth' 150;
  text-transform: uppercase;
  @include fluid(font-size, 320px, 576px, 11px, 15px);
}

@media #{$sm-up} {
  .footer {
    padding: 56px 22px;
  }
}
</style>