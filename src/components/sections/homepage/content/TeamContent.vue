<script setup>
import { defineProps, defineEmits, ref, onMounted } from "vue";

const props = defineProps({
	members: {
		type: Array,
		required: true
	}
})
const emit = defineEmits(['activeBitMap']);

function updatePicture(index, image_src){
	hasHovered.value = true;
	const notActive = document.querySelectorAll(`.team-member:not([data-index="${index}"])`);
	notActive.forEach(el => {
		el.classList.remove("active")
	})

	document.querySelector(`.team-member[data-index="${index}"]`).classList.add('active');

	emit('activeBitMap', image_src);
} 

onMounted(() => {
	if (window.matchMedia('(max-width: 767px)').matches) {
		
		let index = 0;
		const size = props.members.length;
	
		setInterval(() => {
			if (index > size - 1) {
				index = 0;
			}
	
			updatePicture(index, props.members[index].image_bitmap)
	
			index += 1;
	
		}, 2000)
	}
})

const hasHovered = ref(false);

</script>

<template>
  <ul :class="[hasHovered ? '' : 'no-picture']">
    <li
      v-for="(member, index) in members"
      :key="index"
    >
      <a
        :href="member.link.url"
        :target="member.link.target"
        :data-index="index"
        class="team-member active fs-20"
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

	width: fit-content;

	margin: 0 auto;
	padding: 0.5rem 2rem;
	opacity: 1;

	color: $secondary;

	position: relative;

	.no-picture &{
		color: $primary
	}
	.no-picture &:after {
		background-color: $primary;
	}

	&:after {
		content: "";
		position: absolute;
		bottom: 3px;
		left: 2rem;

		height: 2px;
		width:0;
		background-color: $secondary;

		transition: width 0.4s $ease-vnr;
	}

	&:hover:after {
		width: calc(100% - 4rem)
	}

	&.active:after {
		width: calc(100% - 4rem)
	}
}

a:not(.active) {
	opacity: 0.6;

	&:after {
		width: 0;
	}
}

</style>