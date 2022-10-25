<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
	members: {
		type: Array,
		required: true
	}
})
const emit = defineEmits(['activeBitMap']);

function updatePicture(index, image_src){
	const notActive = document.querySelectorAll(`.team-member:not([data-index="${index}"])`);
	notActive.forEach(el => {
		el.classList.remove("active")
	})

	document.querySelector(`.team-member[data-index="${index}"]`).classList.add('active');

	emit('activeBitMap', image_src);
} 

</script>

<template>
  <ul>
    <li
      v-for="(member, index) in members"
      :key="index"
    >
      <a
        :href="member.link.url"
        :target="member.link.target"
        :data-index="index"
        class="team-member active"
        @mouseover="updatePicture(index, member.image_bitmap)"
      > 
        {{ member.name }} 
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">

ul {
	z-index: 1;
}

a.team-member {
	display: block;
	text-align: center;
	font-size: 20px;

	width: fit-content;

	margin: 0 auto;
	padding: 0.5rem 2rem;
	opacity: 1;

	color: $secondary;

	text-decoration: underline;
	text-decoration-thickness: 1.5px;
	text-decoration-thickness: 2px;
	text-underline-offset: 3px;
}

a:not(.active) {
	text-decoration: none;
	opacity: 0.6;
}

</style>