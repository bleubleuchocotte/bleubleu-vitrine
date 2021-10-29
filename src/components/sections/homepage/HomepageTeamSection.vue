<template>
  <section class="section section--team">
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
.member {
  font-family: $font-secondary;
  font-weight: 100;
}
</style>
