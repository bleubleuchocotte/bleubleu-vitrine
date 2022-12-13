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
	isInContainer: {
		type: Boolean,
		required: true
	}
})

onUpdated(() => {
	if (props.isInContainer) {
		setTimeout(() => {
			videoContainer.value.play();
		}, 500)
	} else {
		setTimeout(() => {
			videoContainer.value.load();
		}, 1000)
	}
})

const videoContainer = ref(null);

</script>

<template>
  <div class="slider-images">
    <video
      ref="videoContainer"
      :class="isInContainer ? 'videoPlaying' : ''"
      :src="video"
      muted
      loop
    />
    <img
      :class="isInContainer ? '' : 'thumbnailActive'"
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
			transition: all 0.5s $ease-vnr;
		}

		img {
			opacity: 0;

			&.thumbnailActive {
				opacity: 1;
			}
		}
	}

</style>