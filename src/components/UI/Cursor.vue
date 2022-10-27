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
	cursor.value.style.zIndex = "100";
	if (arg.target.localName === "a"){
		cursor.value.style.filter = "none";
		cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(0.7)`;
		cursor.value.style.borderWidth = "1px";
		cursor.value.style.boxShadow = "none";
	} else {
		const lastPosition = cursor.value.getBoundingClientRect() || {x: 0, y: 0};
		cursor.value.style.filter = "blur(15px)"
		cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(1)`;
		cursor.value.style.borderWidth = "0px";
		cursor.value.style.boxShadow = `${lastPosition.x + 30 - arg.clientX}px ${lastPosition.y + 30 - arg.clientY}px 0px -5px, ${(lastPosition.x + 30 - arg.clientX)*1.5}px ${(lastPosition.y + 30 - arg.clientY)*1.5}px 0px -10px, ${(lastPosition.x + 30 - arg.clientX)*2}px ${(lastPosition.y + 30 - arg.clientY)*2}px 0px -15px, ${(lastPosition.x + 30 - arg.clientX)*2.5}px ${(lastPosition.y + 30 - arg.clientY)*2.5}px 0px -20px, ${(lastPosition.x + 30 - arg.clientX)*3}px ${(lastPosition.y + 30 - arg.clientY)*3}px 0px -25px`;
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

	pointer-events: none;


	background-color: $primary;
  border-radius: 50%;
	border: 1px solid $secondary;

  transition: filter 0.3s ease;
}

</style>