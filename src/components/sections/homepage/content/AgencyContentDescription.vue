<script setup>
	import IconRobot from "@/assets/icons/icon-robot-bleubleu.svg?inline"
	import BlurText from "@/components/UI/BlurText.vue";
	import {defineProps} from "vue";
import GridChelou from "../../../UI/GridChelou.vue";

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
		display: flex;
		flex-direction: column;
		gap: 25vh;

		padding: 30px 15px 10px 15px;
		border-left: 1px solid $primary;

		@media #{$md-down}{
			border-right: 1px solid $primary;
		}

		justify-content: space-between;
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