<template>
  <article class="content-item team-content">
    <Title class="content-item__title team-content__title">
      <prismic-text :field="title" />
    </Title>
    <div class="content-item__infos">
      <Link
        :url="link.url"
        :target="link.target"
        :text="linkName"
      />
      <div class="content-item__description">
        <!-- <prismic-text
          class="content-item__text"
          :field="description"
        />
        <div class="blur" /> -->
        <BlurText 
          :field="description"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import Link from '../../../UI/Link.vue';
import { defineProps } from 'vue';
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
  link: {
    type: Object,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss">
.content-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
}

.content-item__title {
  display: block;
}

.blur {
  @extend %absolute;
  pointer-events: none;
  left: -10px;
  top: -10px;
  backdrop-filter: blur(2px);
  transition: backdrop-filter .3s ease-in-out;
}

.content-item__description {
  position: relative;
  margin-top: 24px;
  font-size: 20px;
  line-height: 1.2;

  @include hover {
    .blur {
      backdrop-filter: blur(0);
    }
  }
}

.team-content__title {
  max-width: 400px;
}

@media #{$sm-up} {
  .content-item {
    padding: 28px 32px;
  }
}
</style>