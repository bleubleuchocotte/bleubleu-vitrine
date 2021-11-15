<template>
  <section class="section section--team o-grid-item--full-bottom">
    <div
      v-for="(member, i) in members"
      :key="i"
      class="member"
    >
      <a
        :href="member.link.url"
        :target="member.link.target"
      >{{ member.name }}</a>
    </div>
    <ContactUs class="section__contact" />
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import ContactUs from '../../UI/ContactUs.vue';

defineProps({
  members: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss">
.section--team {
  padding: 152px 0;
  text-align: center;
}

.member {
  @include fluid(font-size, 576px, 1440px, 12px, 36px);
  font-family: $font-secondary;
  font-weight: 10;
  font-variation-settings: 'wdth' 200;
  line-height: 1.66;
  text-transform: uppercase;
}

.section__contact {
  position: absolute;
  bottom: 64px;
  left: 0;
  right: 0;
  margin: auto;
}

</style>
