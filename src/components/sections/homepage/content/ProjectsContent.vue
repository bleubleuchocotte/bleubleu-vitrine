<script setup>

import { defineProps } from 'vue';
import IconArrowRight from "@/assets/icons/icon-arrow-right.svg?inline"
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
  >
    <div class="article-top">
      <div class="article__project-title">
        <p :data-text="project.data.title[0].text">
          {{ project.data.title[0].text }}
        </p>
      </div>
      <div class="article__project-date">
        <p>{{ project.data.date.substring(0,4) }}</p>
        <a
          :href="project.data.website_link.url"
          :target="project.data.website_link.target"
        >go to website <IconArrowRight /></a>
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

	
p, a {
	font-size: 20px;
	text-transform: uppercase;
}

.article-top, .article-bottom {

	div:first-of-type {
		width: 35%;
	}

}

.container-images {
	width: 65%;
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

		.article-bottom div:first-of-type{
			height: 250px;
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

	.article__project-title{
	padding: 13px 20px;
	border-right: 1px solid $primary;
	
	p{
		position: relative;
		width: fit-content;
		padding: 10px 20px;

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

		transition: color 0.6s $ease-vnr;
	}

}

.article__project-date{
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 65%;

	padding: 13px 20px;

	a {
		width: fit-content;
		text-decoration: underline;

		svg {
			width: 15px;
			height: 15px;
			margin-left: 5px;

			stroke: $primary;
		}
	}
}
}


.article-bottom{
	position: relative;
	height: auto;

	display: flex;

	border-top: 1px solid $primary;
	
	div:first-of-type {
		height: 0;
		transition: height 0.5s $ease-vnr 0.5s;
		overflow: hidden;
		border-right: 1px solid $primary;

		p {
			padding: 40px 20px;
		}
	}
}
</style>