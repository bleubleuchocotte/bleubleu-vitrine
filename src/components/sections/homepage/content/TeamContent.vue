<script setup>
import { defineProps } from "vue";

defineProps({
	members: {
		type: Array,
		required: true
	}
})
</script>

<template>
  <a
    v-for="(member, index) in members"
    :key="index"
    :href="member.link.url"
    :target="member.link.target"
  > 
    {{ member.name }} 
  </a>
</template>

<style scoped lang="scss">

a {
	display: block;
	text-align: center;
	font-size: 42px;

	width: fit-content;

	margin: 0 auto;
	padding: 0.5rem 2rem;

	border: 0.5px solid $primary;
	outline: 0.5px solid $primary;
}

</style>