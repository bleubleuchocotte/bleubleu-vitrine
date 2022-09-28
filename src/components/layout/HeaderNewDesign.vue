<script setup>
import TextParallax from '../UI/TextParallax.vue';
import MorphingShape from "../UI/MorphingShape.vue";
import Socials from '../socials/Socials.vue';
import {ref,defineProps} from "vue";

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})

const texts = ref(["MULTI", "DISCIPLINARY", "DIGITAL","COLLECTIVE"])
const morphingPaths = ref([
	"M1 493.5V89.5C1 40.3467 40.8466 0.5 90 0.5H432.5C472.264 0.5 504.5 32.7355 504.5 72.5C504.5 112.265 536.735 144.5 576.5 144.5H810.5C851.093 144.5 884 177.407 884 218C884 258.593 916.907 291.5 957.5 291.5H987.75C1028.2 291.5 1061 324.295 1061 364.75C1061 405.205 1028.2 438 987.75 438H692.75C652.847 438 620.5 470.347 620.5 510.25C620.5 550.153 588.153 582.5 548.25 582.5H90C40.8467 582.5 1 542.653 1 493.5Z",
  "M62.6628 506.658L2.27103 102.658C-5.77063 48.862 35.8994 0.5 90.293 0.5H418.5C458.264 0.5 490.5 32.7355 490.5 72.5C490.5 112.265 522.736 144.5 562.5 144.5H906.5C947.093 144.5 980 177.407 980 218C980 258.593 947.093 291.5 906.5 291.5H504.75C464.295 291.5 431.5 324.295 431.5 364.75C431.5 405.205 464.295 438 504.75 438H661.25C701.153 438 733.5 470.347 733.5 510.25C733.5 550.153 701.153 582.5 661.25 582.5H150.685C106.613 582.5 69.1784 550.245 62.6628 506.658Z",
])
const morphingDuration = ref("8s");

</script>

<template>
  <header>
    <div class="morphing-container">
      <MorphingShape
        :morphing-paths="morphingPaths"
        :morphing-duration="morphingDuration"
      />
      <TextParallax :texts="texts" />
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
		background: linear-gradient(rgba(187, 255, 101, 1), rgba(150, 150, 150, 0) 20%);
    border-bottom: 1px solid $green;
	}

	.morphing-container {
		position: relative;
		clip-path: url(#clipPath);
	}

	.header-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-top: 60px;
		
		font-size: 22px;
		text-align: right;
	}
</style>