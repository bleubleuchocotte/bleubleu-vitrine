<script setup>
import IconRobot from "@/assets/icons/icon-robot-bleubleu.svg?inline"
import BlurText from "@/components/UI/BlurText.vue";
import GridChelou from "../../../UI/GridChelou.vue";

import Icon1 from "@/assets/icons/icon-bleubleu-electric.svg"
import Icon4 from "@/assets/icons/icon-bleubleu-gameboy.svg"
import Icon7 from "@/assets/icons/icon-bleubleu-horror.svg"
import Icon5 from "@/assets/icons/icon-bleubleu-orbital.svg"
import Icon6 from "@/assets/icons/icon-bleubleu-heart.svg"
import Icon9 from "@/assets/icons/icon-bleubleu-pixel.svg"
import Icon3 from "@/assets/icons/icon-bleubleu-print.svg"
import Icon8 from "@/assets/icons/icon-bleubleu-QR.svg"
import Icon2 from "@/assets/icons/icon-bleubleu-star.svg"

import {defineProps} from "vue";
import LineIcons from "../../../UI/LineIcons.vue";

const arr = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9];


defineProps({
	fields: {
		type: Object,
		required: true,
	},
})
</script>

<template>
  <div class="container">
    <div class="left fs-42__big">
      <div class="upper-part">
        <p>
          <span>BOLD &</span>
          <span id="beep-boop"><IconRobot />STRONG</span>
          <span>COLLECTIVE</span>
        </p>

        <BlurText
          :field="fields.team_description"
          class="blur-text fs-20"
        />
      </div>

      <div class="lower-part">
        <LineIcons :icons="arr" />
      </div>
    </div>
    <div class="only-desktop">
      <GridChelou />
    </div>
  </div>
</template>

<style scoped lang="scss">
	.container{
		display: flex;
		border-bottom: 1px solid $primary;

		& > div {
			flex: 1;
		}
	}
	.left{


		border-left: 1px solid $primary;

		@media #{$md-down}{
			border-right: 1px solid $primary;
		}



		.upper-part {
			display: flex;
			flex-direction: column;
			gap: 25vh;

			padding: 30px;

			@media #{$md-down} {
				padding: 30px 10px 15px 15px;
			}
		}

		.lower-part {
			@media #{$md-up}{
				border-top: 1px solid $primary;
			}
		}
	}


	.left .blur-text{
		max-width: 450px;
	}
	
	p span{
		display: block;
	}

	#beep-boop{
		display: inline-flex;
		gap: 5px;
		align-items: center;
	}

	#beep-boop > *{
		fill: $primary;
		width: 42px;
		height: 42px;

		@media #{$md-down}{
			width: 28px;
			height: 28px;
		}
	}
</style>