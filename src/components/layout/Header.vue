<script setup>
import {defineProps} from "vue";

import Socials from '../socials/Socials.vue';
import NavComponent from './NavComponent.vue';

import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import video from '@/assets/video/Header_anim.json'

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})

</script>

<template>
  <header id="agency">
    <NavComponent />
    <div class="morphing-container">
      <Vue3Lottie
        :animation-data="video"
        :speed="1"
      />
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

		padding: 110px $global-horizontal-padding 18.5px $global-horizontal-padding;
    
    @media #{$md-down} {
      padding-inline: 20px;
    }

    border-bottom: 1px solid $primary;

    min-height: calc(100vh - 1px);
	}

	.morphing-container {
    height: 75vh;
    @media #{$md-down} {
      height: 50vh;
    }
    filter: $filter-to-primary;
	}

	.header-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		font-size: 22px;
    @media #{$md-down} {
      font-size: 20px;
    }
		text-align: right;
	}
</style>