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

export default {
  components: {
    IconMalt,
    IconInstagram,
    IconLinkedin,
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
  }
}
</script>

<style lang="scss" scoped>
.social-media {
  display: inline-block;
  width: 36px;
  height: 36px;

  svg {
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