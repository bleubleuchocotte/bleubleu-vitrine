<script setup>
import { defineProps, onMounted, ref } from 'vue';
import Link from "@/components/UI/AppLink.vue"
import ImagesScrollingEffect from '@/components/UI/ProjectImagesScrollingEffect.vue';
import ProjectVideo from '@/components/UI/ProjectVideo.vue';

const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
	activeMouseEffect: {
		type: Boolean,
		required: true,
	}
})

onMounted(() => {
	props.project.data.medias.forEach(el => {
		if (el.video.size) {
			video.value = el.video;
		} else {
			images.value.push(el.media);
		}
	});

	heightOnHover.value = `${(projectDescriptionContainer.value.clientHeight) + (window.innerHeight * 0.05) + ((window.innerWidth - 20 * 2) * 9 / 16)}px`; // Permet d'avoir toujours le même espace entre la description et la video
})

function updateCurrentImage(arg) {
	currentImage.value = arg?.value || undefined;
} 

const currentImage = ref({});

const isInContainer = ref(false);

const images = ref([]);
const video = ref({});

const projectDescriptionContainer = ref();

const heightOnHover = ref("");
</script>

<template>
  <article
    class="fs-20 article"
    tabindex="0"
    @mouseenter="isInContainer = true"
    @mouseleave="isInContainer = false"
    @focus="isInContainer = true"
    @blur="isInContainer = false"
  >
    <div class="article__top">
      <div class="article__top_left">
        <p
          class="article__top_left-title"
          :data-text="project.data.title[0].text"
        >
          {{ project.data.title[0].text }}
        </p>
      </div>
      <div class="article__top_right">
        <p id="article__top_project-date">
          {{ project.data.date.substring(0,4) }}
        </p>
        <Link
          :href="project.data.website_link.url"
          :target="project.data.website_link.target"
        >
          {{ project.data.go_to[0]?.text }}
        </Link>
      </div>
    </div>
    <div class="article__bottom">
      <div>
        <p ref="projectDescriptionContainer">
          {{ project.data.description[0].text }}
        </p>
      </div>

      <ImagesScrollingEffect
        v-if="activeMouseEffect"
        class="container-images"
        :images="images"
        @current-image="updateCurrentImage"
      />

      <ProjectVideo
        :video="video"
        :thumbnail="currentImage"
        :is-in-container="isInContainer"
      />

      <hr>
    </div>
  </article>
</template>

<style scoped lang="scss">

.article {

	text-transform: uppercase;
	width: 100%;

	border-left: $border-left;
	border-right: $border-right;

	&:hover, &:target, &:focus {
		.article__top_left-title:before {
			width: 100%;
		}

		.article__top_left-title {
			transition-duration: 0.6s;
		}

		.article__top_left-title {
			color: $secondary;
		}

		.article__bottom {
			height: 500px;

			@media #{$md-down} {
				height: v-bind(heightOnHover);
			}
		}
	}

	&__top {
		display: flex;
		height: 75px;

		@media #{$md-down} {
			height: 50px;
		}
	}

	&__top_left {
		padding: 15px 20px;
		width: 60%;

		@media #{$md-down} {
			width: 55%;
			padding: 11px 10px;
		}
		@media #{$xs-down} {
			padding: 12px 10px;
		}

		@media screen and (max-width: 350px) {
			width: 62%;
		}

		border-right: 1px solid $primary;

		&-title {
			position: relative;
			width: fit-content;
			padding: 10px 20px;

			border: 1px solid $primary;
			border-radius: 58px;

			overflow: hidden;

			transition: color 0s $ease-vnr;

			@media #{$md-down} {
				padding: 5px 10px;
			}

			&:before {
				content: "";
				position: absolute;
				width: 0;
				height: 100%;

				left: 0;
				top: 0;

				background-color: $primary;
				transition: width 0.6s $ease-vnr;
			}

			&:after{
				content: attr(data-text);

				position: absolute;
				left: 0;

				padding-left: 20px;
				@media #{$md-down} {
					padding-left: 10px;
				}
			}
		}
	}

	&__top_right {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 13px 20px;

		width: 40%;

		@media #{$md-down} {
			width: 45%;
			padding: 13px 10px;
		}
		@media screen and (max-width: 350px) {
			width: 38%;
		}
	}

	&__bottom {
		position: relative;

		display: flex;

		height: 0;
		transition: height 0.5s $ease-vnr 0.5s;

		border-top: 1px solid $primary;

		@media #{$md-down}, #{$low-accuracy} {
			flex-direction: column;
			justify-content: space-between;
			overflow: hidden;
		}

		div:first-of-type {
			overflow: hidden;

			p {
				padding: 40px 20px;
				@media #{$md-down}, #{$low-accuracy} {
					padding: 20px 10px;
				}
			}

			width: 35%;
			@media #{$md-down}, #{$low-accuracy} {
				height: fit-content;
				width: 100%;
			}
		}
	}

	&:last-of-type {
		hr {
			top: 0;
			bottom: unset;
		}

		.article__bottom {
			border-top: unset;
		}
	}
}

@media screen and (max-width: 350px) {
	#article__top_project-date{
		display: none;
	}
}

.container-images {
	width: 60%;
	height: 100%;
	border-right: $border-right;

	@media #{$md-down}, #{$low-accuracy} {
		border-right: unset;
		width: 100%;
		height: 60%;
	}
}

hr{
	position: absolute;
	margin: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	
	border-color: $primary;

	border-bottom-style: unset;
	border-top-style: solid;
}
</style>