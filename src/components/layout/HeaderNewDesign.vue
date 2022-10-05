<script setup>
import {defineProps} from "vue";

import Socials from '../socials/Socials.vue';
import NavComponent from './NavComponent.vue';

import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import video from '@/assets/video/path.json'

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})

</script>

<template>
  <header>
    <NavComponent />
    <div class="morphing-container">
      <Vue3Lottie :animation-data="video" />
    </div>

    <div class="header-bottom">
      <Socials :fields="socials" />
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
		padding: 110px $global-horizontal-padding 18.5px $global-horizontal-padding;
		background: $gradient;
    border-bottom: 1px solid $primary;
	}

	.morphing-container {
    height: 75vh;
    filter: var(--filter-to-primary);
	}

	.header-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		font-size: 22px;
		text-align: right;
	}
</style>