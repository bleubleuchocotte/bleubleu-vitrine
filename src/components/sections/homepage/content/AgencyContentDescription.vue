<script setup>
import {defineProps} from "vue";

import AppTextBlurEffect from "@/components/UI/AppTextBlurEffect.vue";
import AgencyGridDesign from "../../../UI/AgencyGridDesign.vue";
import AgencyLineIcons from "../../../UI/AgencyLineIcons.vue";

import IconRobot from "@/assets/icons/icon-robot-bleubleu.svg?inline"
import Icon1 from "@/assets/icons/icon-bleubleu-electric.svg?inline"
import Icon4 from "@/assets/icons/icon-bleubleu-gameboy.svg?inline"
import Icon7 from "@/assets/icons/icon-bleubleu-horror.svg?inline"
import Icon5 from "@/assets/icons/icon-bleubleu-orbital.svg?inline"
import Icon6 from "@/assets/icons/icon-bleubleu-heart.svg?inline"
import Icon9 from "@/assets/icons/icon-bleubleu-pixel.svg?inline"
import Icon3 from "@/assets/icons/icon-bleubleu-print.svg?inline"
import Icon8 from "@/assets/icons/icon-bleubleu-QR.svg?inline"
import Icon2 from "@/assets/icons/icon-bleubleu-star.svg?inline"

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

        <AppTextBlurEffect
          :field="fields.team_description"
          class="blur-text fs-20"
        />
      </div>

      <div class="lower-part">
        <AgencyLineIcons :icons="arr" />
      </div>
    </div>
    <div class="only-desktop">
      <AgencyGridDesign />
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

			@media #{$sm-down} {
				padding: 30px 10px 15px 15px;
			}
		}

		.lower-part {
			border-top: 1px solid $primary;
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