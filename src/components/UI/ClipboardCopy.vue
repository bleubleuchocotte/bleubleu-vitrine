<template>
  <div
    class="clipboard-copy"
    @click="copy"
  >
    <slot />
    <input
      ref="input"
      class="clipboard-copy__input"
      type="text"
      :value="value"
      aria-hidden="true"
    >
    <transition name="clipboard-copy-tooltip">
      <span
        v-if="showTooltip"
        class="clipboard-copy__tooltip"
      >Email copied</span>
    </transition>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  value: {
    type: String,
    required: true,
  },
})

const showTooltip = ref(false);
const input = ref(null);

function copy() {
  input.value.select();
  input.value.setSelectionRange(0, 99999);
  input.value.blur();
  document.execCommand('copy');
  if (showTooltip.value) {
    return;
  }
  setTimeout(() => showTooltip.value = false, 800);
  showTooltip.value = true;
}

</script>
<style lang="scss">
.clipboard-copy {
  position: relative;
  cursor: pointer;

  @include hover() {}
}

.clipboard-copy__input {
  position: absolute;
  left: -9999px;
  pointer-events: none;
}

.clipboard-copy__tooltip {
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: $gray-darkest;
  color: $white;
  padding: 16px 16px;
  font-size: 16px;
  line-height: 10px;
  border-radius: 4px;
  white-space: nowrap;
}

/**
 * Transition
 */
.clipboard-copy-tooltip-enter-active, .clipboard-copy-tooltip-leave-active {
  transition: opacity 0.15s ease-out, transform 0.1s ease-out;
}

.clipboard-copy-tooltip-enter-from, .clipboard-copy-tooltip-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}
</style>
