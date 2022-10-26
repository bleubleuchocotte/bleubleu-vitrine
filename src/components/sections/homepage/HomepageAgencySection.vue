<script setup>
import AgencyContentKeywords from './content/AgencyContentKeywords.vue';
import AgencyContentDescription from './content/AgencyContentDescription.vue';
import {defineProps} from "vue";

defineProps({
	fields: {
    type: Object,
    required: true,
  },
	keywordsProperties: {
		type: Object,
		required: true,
	}
})

</script>

<template>
  <section id="agency">
    <AgencyContentDescription :fields="fields" />
    <AgencyContentKeywords :properties="keywordsProperties" />
  </section>
</template>

<style scoped lang="scss">
	section {
		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
		@media #{$md-down} {
      padding-inline: 20px;
    }
		border-bottom: 1px solid $primary;
	}
</style>
