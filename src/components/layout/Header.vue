<script setup>
import {defineProps} from "vue";

import Socials from '../socials/Socials.vue';
import NavComponent from './NavComponent.vue';

import video from '@/assets/video/Header_anim.json'
import LottieAnimation from "../UI/LottieAnimation.vue";

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})

const filter = document.querySelector(':root').style.getPropertyValue('--filter-to-primary');
// const name = document.querySelector(':root').style.getPropertyValue('--filter-to-primary');

</script>

<template>
  <header id="agency">
    <NavComponent />
    <div class="morphing-container">
      <LottieAnimation :video="video" />
    </div>

    <pre>{{ filter }}</pre>

    <div class="header-bottom fs-20">
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
    -webkit-filter: $filter-to-primary;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;

    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0,0,0);
    -moz-transform: translate3d(0, 0, 0);
	}

	.header-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		text-align: right;
	}
</style>