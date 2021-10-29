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
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

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
  font-family: $font-secondary;
  font-size: 36px;
  font-weight: 10;
  font-variation-settings: 'wdth' 200;
  line-height: 1.66;
  text-transform: uppercase;
}
</style>
