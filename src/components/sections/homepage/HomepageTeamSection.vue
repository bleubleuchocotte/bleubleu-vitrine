<script setup>
import TeamContent from "@/components/sections/homepage/content/TeamContent.vue";
import { defineProps, ref } from "vue";
import MorphingShape from "../../UI/MorphingShape.vue";
import ImageParallax from "../../UI/ImageParallax.vue";

defineProps({
	members: {
		type: Array,
		required: true
	}
})

const paths = [
	"M1.34 1.34 339.91 1.34 339.91 201.34 601.34 201.34 601.34 401.34 405.21 401.34 405.21 601.34 150.18 601.34 150.18 401.18 72.21 401.18 72.21 201.7 1.34 201.7 1.34 1.34z",
	"M179.3 1.21 365.49 1.21 365.49 201.1 487.58 201.1 487.58 401.21 601.21 401.21 601.21 601.21 208.02 601.21 208.02 401.53 1.21 401.53 1.21 201.21 179.49 201.21 179.3 1.21z",
	"M101.25 1.25 499.48 1.25 499.48 203.04 601.25 203.04 601.25 401.25 321.73 401.25 321.73 601.25 1.25 601.25 1.25 401.25 201.14 401.25 201.25 201.25 101.25 201.25 101.25 1.25z",
	"M201.25 1.25 447.2 1.25 447.2 201.25 339.2 201.25 339.2 401.22 601.25 401.22 601.25 601.25 101.25 601.25 101.25 400.51 1.25 400.69 1.25 201.44 200.19 201.25 201.25 1.25z"
]

function updateSrc(arg){
	imageBitmapSrc.value = arg.url;
}

const imageBitmapSrc = ref("");

</script>

<template>
  <section id="team">
    <TeamContent
      :members="members"
      @activeBitMap="updateSrc"
    />
    <MorphingShape
      :morphing-duration="'10s'"
      :morphing-paths="paths"
    >
      <ImageParallax :path="imageBitmapSrc" />
    </morphingshape>
  </section>
</template>

<style scoped lang="scss">

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		min-height: 80vh;

		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;

		@media #{$md-down} {
      padding-inline: 20px;
    }
	}

</style>