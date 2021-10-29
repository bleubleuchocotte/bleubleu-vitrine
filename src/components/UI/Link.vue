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
      <IconArrowRight />
    </span>
  </component>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import IconArrowRight from '@/assets/icons/icon-arrow-right.svg?inline';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'external'
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
})

const componentType = ref(props.type === 'internal' ? 'router-link' : 'a');
</script>

<style lang="scss">
.link {
  display: inline-block;
  font-size: 24px;
  line-height: 1.2;
}

.link__text {
  position: relative;
  text-decoration: underline;
}

.link__arrow {
  display: inline-block;
  vertical-align: top;
  width: 18px;
  height: 18px;
  margin-left: 4px;
  position: relative;
  top: 2px;

  svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
}
</style>