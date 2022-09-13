<template>
  <article class="content-item projects-content">
    <Title class="content-item__title projects-content__title">
      <PrismicRichText :field="title" />
    </Title>
    <div class="content-item__infos projects_content__infos">
      <Link
        to="/projects"
        text="Our projects"
        type="internal"
      />
      <div class="content-item__description">
        <!-- <PrismicRichText
          :field="description"
        /> -->

        <BlurText 
          :field="description"
        />


        <!-- <div id="circle" /> -->
        <!-- <div class="blur" /> -->
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue';
import Link from '../../../UI/Link.vue';
import Title from '../../../UI/Title.vue';
import BlurText from '../../../UI/BlurText.vue';

defineProps({
  title: {
    type: Array,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  }
})

</script>

<style scoped>
.projects-content__title {
  max-width: 200px;
}
</style>