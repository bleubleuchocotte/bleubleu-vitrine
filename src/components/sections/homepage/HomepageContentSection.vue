<template>
  <section class="section section--content o-grid-item--full-bottom">
    <TeamContent
      class=""
      :title="fields.team_title"
      :description="fields.team_description"
      :link="fields.team_link"
      :link-name="fields.team_link_name"
    />
    <div class="image-container team-image o-grid-item--left o-grid-item--bottom">
      <prismic-image :field="fields.team_image" />
    </div>
    <div class="image-container projects-image  o-grid-item--bottom">
      <prismic-image :field="fields.projects_image" />
    </div>
    <ProjectsContent
      class="o-grid-item--bottom o-grid-item--left"
      :title="fields.projects_title"
      :description="fields.projects_description"
      :link-name="fields.projects_link_name"
    />

    <HomepageLabels
      class="center-section"
      :labels="['graphism', 'dasagn', 'dev', 'web dev', 'sound design', 'motion design', 'UX/UI', 'brand identity']"
    />
  </section>
</template>

<script setup>
import ProjectsContent from './content/ProjectsContent.vue';
import TeamContent from './content/TeamContent.vue';
import HomepageLabels from './HomepageLabels.vue';

defineProps({
  fields: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss">
.section--content {
  position: relative;
  display: flex;
  flex-direction: column;
}

.center-section {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  margin: auto;
}

.team-content {
  grid-area: top-left;
}

.projects-content {
  order: -1;
  grid-area: bottom-right;
}

.image-container img {
  display: block;
  margin: auto;
}

.projects-image {
  grid-area: bottom-left;
}

.team-image {
  grid-area: top-right;
}

@media #{$md-up} {
  .section--content {
    display: grid;
    grid-template-areas:
      "top-left top-right"
      "xxx top-right"
      "bottom-left bottom-right";
    grid-template-columns: 50% 50%;
    grid-template-rows: minmax(535px, 35vh) minmax(336px, 22vh) minmax(640px, 42vh);
  }
}
</style>