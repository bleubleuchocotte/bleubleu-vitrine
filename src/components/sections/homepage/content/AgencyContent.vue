<script setup>
import IconRobot from "@/assets/icons/icon-robot-bleubleu.svg?inline"
import BlurText from "@/components/UI/BlurText.vue";
import {defineProps} from "vue";

defineProps({
	fields: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="section">
    <div class="flex left">
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
    <div class="flex right" />
  </section>
</template>

<style scoped lang="scss">
	.section{
		display: flex;

		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
		border-bottom: 1px solid $primary;
	}
	
	.left{
		display: flex;
		flex-direction: column;
		gap: 388px;

		justify-content: space-between;
	}

	.left p {
		font-size: 42px;
	}

	.left .blur-text{
		font-size: 20px;
		max-width: 450px;
	}
	
	.flex{
		padding: 30px 0px 10px 15px;
		flex: 1;

		border-left: 1px solid $primary;
	}

	.right{
		border-right: 1px solid $primary;
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