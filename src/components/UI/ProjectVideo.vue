<script setup>
import {defineProps, ref, onUpdated} from "vue";

const props = defineProps({
	video: {
		type: String,
		required: true
	},
	thumbnail: {
		type: Object,
		required: true
	},
	isPlaying: {
		type: Boolean,
		required: true
	}
})

onUpdated(() => {
	if (props.isPlaying) {
		videoContainer.value.play();
	} else {
		videoContainer.value.pause();
	}
})

const videoContainer = ref(null);

</script>

<template>
  <div class="slider-images">
    <video
      ref="videoContainer"
      :class="isPlaying ? 'videoPlaying' : ''"
      :src="video"
      muted
      loop
    />
    <img
      :class="isPlaying ? '' : 'thumbnailActive'"
      :src="thumbnail.src"
      alt
    >
  </div>
</template>

<style scoped lang="scss">

	.slider-images {
		position: absolute;
		right: 0;
		top: 0;

		width: 40%;
		height: 100%;

		@media #{$md-down} {
			width: 100%;
			height: 40%;
			bottom: 0;
			top: unset;
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
			transition: all 0.4s $ease-vnr;
		}

		img {
			opacity: 0;

			&.thumbnailActive {
				opacity: 1;
			}
		}
	}

</style>