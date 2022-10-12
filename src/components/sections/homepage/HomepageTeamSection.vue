<script setup>
import TeamContent from "@/components/sections/homepage/content/TeamContent.vue";
import { defineProps } from "vue";

defineProps({
	members: {
		type: Array,
		required: true
	}
})

</script>

<template>
  <section id="team">
    <TeamContent :members="members" />
  </section>
</template>

<style scoped lang="scss">

	section {
		margin: 180px 0;
		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
	}

</style>