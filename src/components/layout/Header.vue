<script setup>
import {defineProps, onMounted, ref} from "vue";

import Socials from '../socials/Socials.vue';
import NavComponent from './NavComponent.vue';

import videoDesktop from '@/assets/video/Header_anim.json'
import videoMobile from '@/assets/video/header_anim_mobile.json'
import LottieAnimation from "../UI/LottieAnimation.vue";

import { addCSSProperty } from "@/composables/useRootElement.js";
import { getRandomInt } from '@/composables/useRandom.js';
import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
import Colors from "@/config";

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})

onMounted(() => {
  localStorageBuffer.value = localStorage.getItem('colorful');
})

function activeColor() {
  localStorage.setItem('colorful', true);
  localStorageBuffer.value = localStorage.getItem('colorful');

  const length = Object.entries(Colors).length;
  const newColor = Object.entries(Colors)[getRandomInt(0, length)][1];

  addCSSProperty('--primary-color', newColor.primary);
  addCSSProperty('--secondary-color', newColor.secondary);
  addCSSProperty('--filter-to-primary', newColor.filter);

  document.getElementById('squaredFavicon').href = getDataUriFromSvg(getSvgFavicon(newColor.primary)); // Update favicon
  console.log(newColor.name);
}

const localStorageBuffer = ref("");
</script>

<template>
  <header id="agency">
    <NavComponent />
    <div class="morphing-container">
      <LottieAnimation
        :video-desktop="videoDesktop"
        :video-mobile="videoMobile"
      />
    </div>

    <div class="header-bottom fs-20">
      <Socials :fields="socials" />
      <button
        v-if="localStorageBuffer === 'false'"
        @click="activeColor"
      >
        Want to add color ? Click me :)
      </button>
      <p class="infos__text">
        <span>Amour &</span>  
        <br>
        <span>multimedia</span>
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
	header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

		padding: 110px $global-horizontal-padding 18.5px $global-horizontal-padding;
    
    @media #{$md-down} {
      padding-inline: 20px;
      padding-top: 100px;
    }

    border-bottom: 1px solid $primary;

    min-height: calc(100vh - 1px);
	}

	.morphing-container {
    height: 75vh;
    @media #{$md-down} {
      height: 50vh;
      margin: auto 0;
    }
	}

	.header-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		text-align: right;
	}
</style>