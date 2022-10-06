<script setup>

import { defineProps } from 'vue';

const props = defineProps({
fields: {
	type: Array,
	required: true,
}

})
console.log(props.fields);

</script>

<template>
  <!-- <div
    v-for="(project, index) in props.fields"
    :key="index"
  >
    <pre>{{ project.data }}</pre>
  </div> -->


  <article>
    <div class="article__top">
      <div class="article__project-title">
        <p>
          popcorn x bleubleu
        </p>
      </div>
      <div class="article__project-date">
        <p>2022</p>
      </div>
    </div>
    <div class="article__middle" />
  </article>
</template>

<style scoped lang="scss">

article{
	width: 100%;
	height: 75px;

	transition: height 0.5s ease-out;

	border-left: 1px solid $primary;
	border-right: 1px solid $primary;

	&:hover{
		height: 500px;
	}

	&:not(:first-of-type){
		border-top: 1px solid $primary;
	}
	
}
.article__top{
	display: flex;
	height: 75px;
}

.article__project-date{
		flex: 0.1;
		display: flex;
		align-items: center;
		padding: 13px 20px;
		border-right: 1px solid $primary;
		
}
.article__project-title{
	padding: 13px 20px;
	flex: 0.35;

	border-right: 1px solid $primary;
	
	p{
		width: fit-content;
		padding: 10px 20px;

		border: 1px solid $primary;
		border-radius: 58px;
	}
}

p {
	font-size: 20px;
	text-transform: uppercase;
}

</style>