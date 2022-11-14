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

/**
 * 
 * @param {Array} arr 
 * @param {*} value 
 */
function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

onMounted(() => {
	const notFindString = "null"
	const indexMemberAvailable = removeItemAll(props.members.map((member,index) => member.display ? index : notFindString), notFindString);
	
	if (window.matchMedia('(max-width: 767px)').matches) {
		
		let index = 0;
		const size = indexMemberAvailable.length;


	
		setInterval(() => {
			if (index > size - 1) {
				index = 0;
			}
	
			updatePicture(indexMemberAvailable[index], props.members[indexMemberAvailable[index]].image_bitmap)
	
			index += 1;
	
		}, 2000)
	}
})

const hasHovered = ref(false);

</script>

<template>
  <ul :class="[hasHovered ? '' : 'no-picture']">
    <template
      v-for="(member, index) in members"
      :key="index"
    >
      <li
        v-if="member.display"
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
    </template>
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

	@media #{$md-down} {
		font-size: 22px;
		line-height: 22px;
	}

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