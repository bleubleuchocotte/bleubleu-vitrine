<script setup>
import {defineProps} from "vue";
import IconArrowRight from "@/assets/icons/icon-arrow-right.svg?inline"


defineProps({
	href: {
		type: String,
		required: true
	},
	target: {
		type: String,
		required: true
	}
})

</script>

<template>
  <a
    :href="href"
    :target="target"
    class="only-desktop"
  >
    go to website<IconArrowRight />
  </a>
</template>


<style scoped lang="scss">
a {
	width: fit-content;
	text-decoration: underline;

	svg {
		width: 15px;
		height: 15px;
		margin-left: 10px;

		stroke: $primary;
		text-decoration: none;
	}
}
</style>