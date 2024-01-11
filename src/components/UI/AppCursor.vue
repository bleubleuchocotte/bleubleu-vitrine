<script setup>
import { ref } from "vue";
import { getValueWithBoundaries } from "@/composables/useMath.js"
import { useEventListener } from "@/composables/useEventListener.js"


const cursor = ref();

useEventListener(window, 'mousemove', updateCursor);

function updateCursor(arg){
	cursor.value.style.zIndex = "100";
	if (arg.target.localName === "a" || arg.target.localName === "button"){
		cursor.value.style.filter = "none";
		cursor.value.style.scale = "0.5";
		cursor.value.style.translate = `${arg.clientX - 30}px ${arg.clientY-30}px`;
		cursor.value.style.borderWidth = "1px";
		cursor.value.style.boxShadow = "none";
		
	} else {
		const lastPosition = cursor.value.getBoundingClientRect() || {x: 0, y: 0};
		
		const posX = getValueWithBoundaries(lastPosition.x + (lastPosition.height / 2) - arg.clientX, -35, 35)
		const posY = getValueWithBoundaries(lastPosition.y + (lastPosition.width / 2) - arg.clientY, -35, 35)

		cursor.value.style.filter = "blur(15px)"
		cursor.value.style.scale = "1";
		cursor.value.style.borderWidth = "0px";
		cursor.value.style.translate = `${arg.clientX - 30}px ${arg.clientY - 30}px`;
		cursor.value.style.boxShadow = `
			${posX}px ${posY}px 0px -5px, 
			${(posX)*1.5}px ${(posY)*1.5}px 0px -10px, 
			${(posX)*2}px ${(posY)*2}px 0px -15px, 
			${(posX)*2.5}px ${(posY)*2.5}px 0px -20px, 
			${(posX)*3}px ${(posY)*3}px 0px -25px
		`;
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

  transition: filter 0.3s ease, scale 0.3s ease;
}

</style>