<template>
  <div class="socials">
    <a
      v-for="({ media }, i) in fields"
      :key="i"
      :href="media.data.link.url"
      :target="media.data.link.target"
      :title="`Link to our ${media.data.name}`"
      :class="{small}"
      class="social-media"
    >
      <component :is="`icon-${media.slug}`" />
    </a>
  </div>
</template>

<script>
import IconMalt from '@/assets/icons/icon-malt.svg?inline';
import IconInstagram from '@/assets/icons/icon-instagram.svg?inline';
import IconLinkedin from '@/assets/icons/icon-linkedin.svg?inline';
import IconBehance from '@/assets/icons/icon-behance.svg?inline';

export default {
  components: {
    IconMalt,
    IconInstagram,
    IconLinkedin,
    IconBehance,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  created(){
    console.log("Ceci est un test");
    console.log(IconBehance, IconMalt);
  }
}


</script>

<style lang="scss" scoped>
.social-media {
  display: inline-block;
  margin: 20px;

  height: 36px;
  width: 36px;
  
  &[href*='behance']{
    width: 45px;
    height: 32px;
    scale: 1.1;
    transform-origin: 0 100%;

    &.small {
      height: 17px;
      scale: 1.3;
    }
  }

  svg {
    stroke: $primary;
    fill: $primary;
    width: 100%;
    height: 100%;
  }

  &.small {
    width: 24px;
    height: 24px;
    margin: 16px 8px;
  }
}
</style>