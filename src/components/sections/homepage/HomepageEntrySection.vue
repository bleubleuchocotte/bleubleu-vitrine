<template>
  <section class="section section--homepage-entry o-grid-item--full">
    <aside>
      <div class="infos">
        <p>Bleubleu</p>
        <p>Amour et multimedia</p>
      </div>
      <div class="socials o-grid-item">
        <Socials :fields="socials" />
      </div>
      <div class="links">
        <Link
          text="Our projects"
          to="/projects"
        />
        <Link
          text="Our team"
          to="https://fr.malt.be/group/bleubleuchocotte/60e0bf515002f0348a13aa26"
        />
        <Link
          text="Contact us"
          to="null"
        />
      </div>
    </aside>
    <div class="main-logo" />
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import Socials from '../../socials/Socials.vue';
import Link from '@/components/UI/Link.vue';

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.section--homepage-entry {
  .links {
    display: flex;
    flex-direction: column;
  }
  .link:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>