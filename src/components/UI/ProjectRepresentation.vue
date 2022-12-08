<script setup>

import { defineProps, ref } from 'vue';
import Link from "@/components/UI/Link.vue"
import ImagesScrollingEffect from '@/components/UI/ImagesScrollingEffect.vue';
import SliderImages from '@/components/UI/SliderImages.vue';

defineProps({
	project: {
		type: Object,
		required: true,
	}
})

function updateCurrentImage(arg) {
	currentImage.value = arg?.value || undefined;
} 

const currentImage = ref(null);

</script>

<template>
  <article
    class="fs-20"
    tabindex="0"
  >
    <div class="article__top">
      <div class="article__top_left">
        <p :data-text="project.data.title[0].text">
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
        <p> {{ project.data.description[0].text }}</p>
      </div>

      <ImagesScrollingEffect
        class="container-images"
        :images="project.data.medias"
        @current-image="updateCurrentImage"
      />

      <SliderImages
        v-if="currentImage"
        :image="currentImage"
      />

      <hr>
    </div>
  </article>
</template>

<style scoped lang="scss">

.article {
	&__top_left {
		width: 60%;

		@media #{$md-down} {
			width: 55%;
		}

		@media screen and (max-width: 350px) {
			width: 62%;
		}
	}

	&__top_right {
		width: 40%;

		@media #{$md-down} {
			width: 45%;
		}
		@media screen and (max-width: 350px) {
			width: 38%;
		}
	}
}

.article__bottom {
	div:first-of-type {
		width: 35%;
		@media #{$md-down} {
			width: 100%;
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
	@media #{$md-down} {
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

article{
	text-transform: uppercase;
	width: 100%;

	border-left: $border-left;
	border-right: $border-right;
	
	&:hover, &:target, &:focus {
		.article__top_left p:before {
			width: 100%;
		}

		.article__top_left p {
			color: $secondary;
		}

		.article__bottom {
			height: 500px;

			@media #{$md-down} {
				height: 60vh;
			}
		}
		@media #{$md-down} {
			.container-images {
				border-bottom: $border-bottom;
				transition: border-bottom 0s linear 0.6s;
			}
		}
	}
}

article:last-of-type {
	hr {
		top: 0;
		bottom: unset;
	}

	.article__bottom {
		border-top: unset;
	}
}

.article__top{
	display: flex;
	height: 75px;

	@media #{$md-down} {
		height: 50px;
	}

	.article__top_left {
		padding: 15px 20px;

		@media #{$md-down} {
			padding: 11px 10px;
		}
		@media #{$xs-down} {
			padding: 12px 10px;
		}
		border-right: 1px solid $primary;
		
		p{
			position: relative;
			width: fit-content;
			padding: 10px 20px;

			@media #{$md-down} {
				padding: 5px 10px;
			}

			border: 1px solid $primary;
			border-radius: 58px;

			overflow: hidden;
		}

		p:before {
			content: "";
			position: absolute;
			width: 0;
			height: 100%;

			left: 0;
			top: 0;

			background-color: $primary;
			transition: width 0.6s $ease-vnr;
		}
		p:after{
			content: attr(data-text);
			height: 100%;

			position: absolute;
			left: 0;

			padding-left: 20px;
			@media #{$md-down} {
				padding-left: 10px;
			}

			transition: color 0.6s $ease-vnr;
		}

	}

	.article__top_right{
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 13px 20px;

		@media #{$md-down} {
			width: 45%;
			padding: 13px 10px;
		}
		@media screen and (max-width: 350px) {
			width: 38%;
		}
	}
}


.article__bottom{
	position: relative;

	display: flex;

	height: 0;
	transition: height 0.5s $ease-vnr 0.5s;

	border-top: 1px solid $primary;
	
	div:first-of-type {
		overflow: hidden;

		p {
			padding: 40px 20px;
			@media #{$md-down} {
				padding: 20px 10px;
			}
		}
	}
}
</style>