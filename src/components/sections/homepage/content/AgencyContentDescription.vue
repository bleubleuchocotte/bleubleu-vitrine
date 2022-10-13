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
    <div class="left">
      <p>
        <span>BOLD &</span>
        <span id="beep-boop"><IconRobot />STRONG</span>
        <span>COLLECTIVE</span>
      </p>

      <BlurText
        :field="fields.team_description"
        class="blur-text"
      />
    </div>
    <div>
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
		gap: 388px;
		padding: 30px 0px 10px 15px;
		border-left: 1px solid $primary;

		justify-content: space-between;
	}

	.left p {
		font-size: 42px;
	}

	.left .blur-text{
		font-size: 20px;
		max-width: 450px;
	}
	
	p span{
		display: block;
	}

	#beep-boop{
		display: inline-flex;
		gap: 5px;
	}

	#beep-boop > *{
		stroke: $primary;
		margin: auto 0;
	}

</style>