<script setup>

import { defineProps } from 'vue';
import image from "@/assets/img/logo-bleubleu.jpg";

const props = defineProps({
fields: {
	type: Array,
	required: true,
}

})
console.log(props.fields);

</script>

<template>
  <article
    v-for="(project, index) in props.fields"
    :key="index"
  >
    <div class="article-top">
      <div class="article__project-title">
        <p>
          {{ project.data.title[0].text }}
        </p>
      </div>
      <div class="article__project-date">
        <p>{{ project.data.date }}</p>
      </div>
    </div>
    <div class="article-middle">
      <div>
        <p>{{ project.data.title[0].text }}</p>
        <a
          :href="project.data.website_link.url"
          :target="project.data.website_link.target"
        >go to website</a>
      </div>
      <div>
        <p> {{ project.data.description[0].text }}</p>
      </div>
    </div>

    <!-- <img
      :src="project.data.medias[0].media.url"
      :alt="project.data.medias[0].media.alt"
      class="article-bottom"
    > -->
  </article>
</template>

<style scoped lang="scss">

article{
	width: 100%;
	height: 75px;

	transition: height 0.5s ease-out;

	border-left: 1px solid $primary;
	border-right: 1px solid $primary;

	&:hover, &:focus{
		height: 1000px;

		.article-middle, .article-bottom{
			opacity: 1;
			pointer-events: fill;
		}
	}

	&:not(:first-of-type){
		border-top: 1px solid $primary;
	}
	
}
.article-top{
	display: grid;
	grid-template-columns: 35% 15% 1fr; 
	height: 75px;
}

.article__project-date{
		display: flex;
		align-items: center;
		padding: 13px 20px;
		border-right: 1px solid $primary;
		
}
.article__project-title{
	padding: 13px 20px;
	border-right: 1px solid $primary;
	
	p{
		width: fit-content;
		padding: 10px 20px;

		border: 1px solid $primary;
		border-radius: 58px;
	}
}


.article-middle{
	opacity: 0;
	transition: opacity 0.3s ease-out;
	
	pointer-events: none;
	grid-template-columns: 35% 15% 1fr; 
	display: grid;

	
	border-top: 1px solid $primary;
	border-bottom: 1px solid $primary;
	
	div:first-of-type {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 60px;

		border-right: 1px solid $primary;
		padding: 40px 20px;
	}

	div:first-of-type p {
		font-size: 42px;
	}

	div:first-of-type a {
		width: fit-content;
		padding: 10px 20px;

		border: 1px solid $primary;
		border-radius: 58px;
	}

	div:last-of-type{
		position: relative;
		padding: 40px 30px;
		grid-area: 1 / 3 / 2 / 4;
	}
	div:last-of-type:before {
		content: "";
		position: absolute;
		top: 0;
		height: 100%;
		width: 1px;
		background-color: $primary;
		left: -1px;
	}
}

.article-bottom{
	opacity: 0;
	pointer-events: none;
}

p {
	font-size: 20px;
	text-transform: uppercase;
}

</style>