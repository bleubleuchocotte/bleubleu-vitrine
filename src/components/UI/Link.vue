<template>
  <component
    :is="componentType"
    :to="to"
    :href="url"
    :target="target"
    class="link"
  >
    <span class="link__text">{{ text }}</span>
    <span class="link__arrow">
      <component :is="iconComponent" />
    </span>
  </component>
</template>

<script>
import { ref } from 'vue';
import IconArrowRight from '@/assets/icons/icon-arrow-right.svg?inline';
import IconLove from '@/assets/icons/icon-love.svg?inline';
import IconSmile from '@/assets/icons/icon-smile.svg?inline';

export default {
  components: {
    IconArrowRight,
    IconLove,
    IconSmile,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'external'
    },
    icon: {
      type: String,
      default: 'arrow-right',
    },
    to: {
      type: String,
      default: () => null,
    },
    url: {
      type: String,
      default: () => null,
    },
    target: {
      type: String,
      default: () => null,
    },
  },
  setup(props) {
    const componentType = ref(props.type === 'internal' ? 'router-link' : 'a');
    const iconComponent = ref(`icon-${props.icon}`);

    return {
      componentType,
      iconComponent,
    }
  }
}
</script>

<style lang="scss">
.link {
  display: inline-block;
  line-height: 1.2;
  cursor: pointer;
  @include fluid(font-size, 576px, 1440px, 16px, 24px);
}

.link__text {
  position: relative;
  text-decoration: underline;
}

.link__arrow {
  display: inline-block;
  vertical-align: top;
  margin-left: 8px;
  position: relative;
  top: 2px;
  @include fluid(margin-left, 576px, 1440px, 4px, 8px);
  @include fluid(width, 576px, 1440px, 14px, 18px);
  @include fluid(height, 576px, 1440px, 14px, 18px);

  svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
}
</style>