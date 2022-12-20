<script setup>
import { defineProps, ref, onUpdated } from "vue";
import { useScreenSize, usePointerAccuracy } from "@/composables/useMedia.js"

const props = defineProps({
	video: {
		type: Object,
		required: true
	},
	thumbnail: {
		type: Object,
		required: true
	},
	isInContainer: {
		type: Boolean,
		required: true
	}
})

onUpdated(() => {
	if (props.isInContainer) {
		clearTimeout(timeoutID);
		videoContainer.value.play();
	} else {
		timeoutID = setTimeout(() => {
			videoContainer.value.load();
		}, 1000)
	}
})

const videoContainer = ref(null);
const format = ref(useScreenSize());
const pointer = ref(usePointerAccuracy());
let timeoutID;


</script>

<template>
  <div
    v-if="format == 'desktop' && pointer == 'fine'"
    class="slider-images"
  >
    <video
      ref="videoContainer"
      :class="isInContainer ? 'videoPlaying' : ''"
      :src="video.url"
      muted
      loop
    />
    <img
      :class="isInContainer ? '' : 'thumbnailActive'"
      :src="thumbnail.src"
      alt
    >
  </div>


  <video
    v-else
    ref="videoContainer"
    :class="isInContainer ? 'videoPlaying' : ''"
    class="video mobile"
    :src="video.url"
    muted
    loop
  />
</template>

<style scoped lang="scss">

	.slider-images {
		position: absolute;
		right: 0;
		top: 0;

		width: 40%;
		height: 100%;

		@media #{$md-down}, #{$low-accuracy} {
			width: 100%;
			height: 40%;
			position: unset;
		}

		@media #{$md-up} {
			display: flex;
			align-items: center;
		}
		overflow: hidden;

		video {
			position: absolute;
			width: 100%;
			height: 500px;
			opacity: 0;

			&.videoPlaying {
				opacity: 1;
			}
		}

		video, image {
			transition: all 0.5s $ease-vnr;
		}

		img {
			opacity: 0;

			&.thumbnailActive {
				opacity: 1;
			}
		}
	}

	.video.mobile {
		flex: 1;

		height: 0;
		opacity: 0;

		border-top: $border-bottom;
		transition: opacity 0.4s $ease-vnr 0.9s;
		object-fit: cover;

		&.videoPlaying {
			opacity: 1;
		}
	}

</style>