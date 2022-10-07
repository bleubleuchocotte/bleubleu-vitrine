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

      <hr>
    </div>
  </article>
</template>

<style scoped lang="scss">

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

article:last-of-type {
	hr {
	top: 0;
	bottom: unset;
	}

	.article-middle {
		border-top: unset;
	}
}



article{
	width: 100%;

	border-left: 1px solid $primary;
	border-right: 1px solid $primary;
	
	&:hover {
		.article__project-title p:before {
			width: 100%;
		}

		.article-middle{
			height: 250px;
		}
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
		position: relative;
		width: fit-content;
		padding: 10px 20px;

		border: 1px solid $primary;
		border-radius: 58px;
	}

	p:before {
		content: "";
		position: absolute;
		width: 0;
		height: 100%;

		left: 0;
		top: 0;

		border-radius: 30px;
		background-color: rgba(0,0,255,0.5);
		transition: width 1s linear;
	}

}


.article-middle{
	position: relative;
	height: 0;
	transition: height 0.5s ease-out 1s;

	overflow: hidden;

	grid-template-columns: 35% 15% 1fr; 
	display: grid;

	border-top: 1px solid $primary;
	
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

p {
	font-size: 20px;
	text-transform: uppercase;
}

@keyframes loader {
	from {
		width: 0%;
	}
	
	to {
		width: 100%;

	}

}

@keyframes expand {
	from {
		height: 0;
	}

	to {
		height: 250px;
	}
}

</style>