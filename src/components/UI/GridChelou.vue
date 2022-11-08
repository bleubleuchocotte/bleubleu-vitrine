<script setup>
import IconBleubleu from "@/assets/icons/icon-bleubleu-animation.svg?inline";
</script>

<template>
  <div class="dynamic-grid">
    <div class="left">
      <div>
        <IconBleubleu />
      </div>
      <div>
        <IconBleubleu />
      </div>
    </div>

    <div class="right">
      <div>
        <IconBleubleu />
      </div>
      <div>
        <IconBleubleu />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
	.dynamic-grid {
		display: flex;
		height: 100%;

		border-left: 1px solid $primary;
		border-right: 1px solid $primary;

	}

	.left:hover:has( > div:first-of-type:hover){
		flex: 0.5;
	}
	.left:hover:has( > div:last-of-type:hover){
		flex: 0.7;
	}
	.right:hover:has( > div:first-of-type:hover){
		flex: 0.6;
	}
	.right:hover:has( > div:last-of-type:hover){
		flex: 0.9;
	}

	.right, .left {
		display: flex;
		flex-direction: column;

		transition: flex 0.6s $ease-vnr;
		
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;

			transition: flex 0.6s $ease-vnr;
		}
	}

	.left {
		border-right: 1px solid $primary;
		flex: 0.4;

		div:first-of-type {
			border-bottom: 1px solid $primary;
			flex: 0.4;	
			
			&:hover{
				flex: 0.5;
			}
		}
		div:last-of-type {
			flex: 0.6;

			svg {
				transform: rotate(-4deg) scale(4.4) skew(27deg, -74deg);
			}

			&:hover{
				flex: 0.8;
			}
		}

		&:hover {
			flex: 0.6;
		}
	}
	.right {
		flex: 0.6;

		&:hover{
				flex: 0.7;
				
		}
		div:first-of-type {
			border-bottom: 1px solid $primary;
			flex: 0.7;

			&:hover{
				flex: 1.2;
			}

			svg {
				transform: rotate(90deg) scale(3.3) skew(45deg, -75deg);
			}
		}
		div:last-of-type {
			flex: 0.3;
			&:hover{
				flex: 0.5;
			}
			svg {
				transform: rotate(78.9deg) scale(4.0) skew(40deg, 10deg) translate(-20px,-20px);
			}
		}
	}

	svg {
		fill: $primary;
	}
</style>