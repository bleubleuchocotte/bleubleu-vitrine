<template>
  <section class="section section--team">
    <div
        v-for="(member, i) in members"
        class="member"
        :key="i">
      <a :href="member.link.url" :target="member.link.target">{{ member.name }}</a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  members: Array,
})
</script>
