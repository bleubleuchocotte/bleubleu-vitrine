<script setup>
import { defineProps, ref, onUpdated } from "vue";
import { useScreenSize, usePointerAccuracy } from "@/composables/useMedia.js"

const props = defineProps({
	videos: {
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
	},
	isInView: {
		type: Boolean,
		required: true
	}
})

onUpdated(() => {
	if (props.isInContainer && format.value == 'desktop' && props.isInView) {
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
      muted
      loop
    >
      <source
        v-if="videos.webm"
        :src="videos.webm.url"
        type="video/webm"
      >
      <source
        v-if="videos.webm"
        :src="videos.mp4.url"
        type="video/mp4"
      >
    </video>
    <img
      :class="isInContainer ? '' : 'thumbnailActive'"
      :src="thumbnail.src"
      alt
    >
  </div>


  <video
    v-else
    ref="videoContainer"
    :poster="thumbnail.src"
    class="video mobile videoPlaying"
    muted
    loop
  >
    <source
      v-if="videos.webm"
      :src="videos.webm.url"
      type="video/webm"
    >
    <source
      v-if="videos.webm"
      :src="videos.mp4.url"
      type="video/mp4"
    >
  </video>
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

		@media #{$landscape}{
			flex: 1;
			height: 0;
			object-fit: cover;
		}

		opacity: 0;

		border-top: $border-bottom;
		transition: opacity 0.4s $ease-vnr 0.8s;
		pointer-events: none;

		&.videoPlaying {
			opacity: 1;
			pointer-events: all;
		}
	}

</style>