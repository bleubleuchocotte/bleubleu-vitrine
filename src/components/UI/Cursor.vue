<script setup>
import { onMounted, onUnmounted, ref } from "vue";

onMounted(() => {
  window.addEventListener('mousemove', updateCursor);
})
onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor);
})

const cursor = ref();

function updateCursor(arg){
	cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px)`;

	if (arg.target.localName === "a"){
		cursor.value.style.filter = "none";
		cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(0.7)`;
		cursor.value.style.borderWidth = "1px";
	} else {
		cursor.value.style.filter = "blur(15px)"
		cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(1)`;
		cursor.value.style.borderWidth = "0px";
	}
}
</script>

<template>
  <div
    ref="cursor"
    class="cursor"
  />
</template>


<style scoped lang="scss">
.cursor{
	width: 60px;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;
	z-index: 1000;

	pointer-events: none;


	background-color: $primary;
  border-radius: 50%;
	border: 1px solid $secondary;

  transition: filter 0.3s ease;
}

</style>