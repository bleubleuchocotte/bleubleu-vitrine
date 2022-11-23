<template>
  <footer
    v-if="footer"
    id="footer"
    class="footer"
  >
    <IconBleubleu
      class="footer__icon"
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
import IconBleubleu from "@/assets/icons/icon-bleubleu-animation.svg?inline";

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

.footer__icon {
  width: 120px;
  margin-bottom: 16px;
  fill: $primary;
}

.footer__copyright {
  margin-top: 16px;
}

@media #{$sm-up} {
  .footer {
    padding: 56px 22px;
    padding-bottom: 20px;
  }
}

@media #{$md-down} {
  .footer {
    font-size: 14px;
  }
}
</style>