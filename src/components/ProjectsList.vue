<template>
  <section class="section section--projects-list">
    <div
        v-for="(project, i) in projects"
        class="project"
        :key="i">
      <prismic-rich-text :field="project.data.title" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: Array,
})
</script>
