<script setup>

import { defineProps } from "vue";

defineProps({
	icons: {
		type: Array,
		required: true
	}
})

</script>

<template>
  <div>
    <i
      v-for="(icon, index) in icons"
      :key="index"
    >
      {{ icon }}
    </i>
  </div>
</template>