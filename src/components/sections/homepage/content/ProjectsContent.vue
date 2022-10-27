<script setup>

import { defineProps } from 'vue';
import Link from "@/components/UI/Link.vue"
import ImagesScrollingEffect from '../../../UI/ImagesScrollingEffect.vue';

const props = defineProps({
	fields: {
		type: Array,
		required: true,
	}
})

</script>

<template>
  <article
    v-for="(project, index) in props.fields"
    :key="index"
    class="fs-20"
  >
    <div class="article-top">
      <div class="article__project-title">
        <p :data-text="project.data.title[0].text">
          {{ project.data.title[0].text }}
        </p>
      </div>
      <div class="article__project-date">
        <p class="only-desktop">
          {{ project.data.date.substring(0,4) }}
        </p>
        <Link
          :href="project.data.website_link.url"
          :target="project.data.website_link.target"
        />
      </div>
    </div>
    <div class="article-bottom">
      <div>
        <p> {{ project.data.description[0].text }}</p>
      </div>

      <ImagesScrollingEffect
        class="container-images"
        :index="index"
        :images="project.data.medias"
      />

      <hr>
    </div>
  </article>
</template>

<style scoped lang="scss">

.article-top, .article-bottom {
	text-transform: uppercase;

	div:first-of-type {
		width: 35%;
		@media #{$md-down} {
			width: 80%;
		}
	}

}

.container-images {
	width: 100%;
	height: 100%;
}

hr{
	position: absolute;
	margin: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	color: $primary;

	border-bottom-style: unset;
	border-top-style: solid;
}

article{
	width: 100%;

	border-left: 1px solid $primary;
	border-right: 1px solid $primary;
	
	&:hover {
		.article__project-title p:before {
			width: 100%;
		}

		.article__project-title p {
			color: $secondary;
		}

		.article-bottom {
			height: 500px;
		}
	}
}

article:last-of-type {
	hr {
		top: 0;
		bottom: unset;
	}

	.article-bottom {
		border-top: unset;
	}
}

.article-top{
	display: flex;
	height: 75px;

	@media #{$md-down} {
		height: 50px;
	}

	.article__project-title{
	padding: 14px 20px;

	@media #{$md-down} {
		padding: 10px;
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

.article__project-date{
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 65%;

	padding: 13px 20px;
}
}


.article-bottom{
	position: relative;

	display: flex;

	height: 0;
	transition: height 0.5s $ease-vnr 0.5s;

	border-top: 1px solid $primary;
	
	div:first-of-type {
		overflow: hidden;

		p {
			padding: 40px 20px;
		}
	}
}
</style>