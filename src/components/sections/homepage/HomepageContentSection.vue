<template>
  <section class="section section--content o-grid-item--full-bottom">
    <div class="image-container image-container--left o-grid-item--bottom o-grid-item--right">
      <PrismicImage :field="fields.projects_image" />
    </div>
    <ProjectsContent
      class="o-grid-item--bottom"
      :title="fields.projects_title"
      :description="fields.projects_description"
      :link-name="fields.projects_link_name"
    />
    <TeamContent
      class="o-grid-item--right"
      :title="fields.team_title"
      :description="fields.team_description"
      :link="fields.team_link"
      :link-name="fields.team_link_name"
    />
    <div class="image-container image-container--right">
      <PrismicImage :field="fields.team_image" />
    </div>
  </section>
</template>

<script setup>
import ProjectsContent from './content/ProjectsContent.vue';
import TeamContent from './content/TeamContent.vue';

defineProps({
  fields: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss">
.section--content {
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "top-left bottom-right"
    "bottom-left bottom-right";
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(535px, 35vh) minmax(336px, 22vh) minmax(640px, 42vh);
}

.team-content {
  grid-area: bottom-left;
}

.projects-content {
  grid-area: top-right;
}

.image-container img {
  display: block;
  margin: auto;
}

.image-container--left {
  grid-area: top-left;
}

.image-container--right {
  grid-area: bottom-right;
}
</style>