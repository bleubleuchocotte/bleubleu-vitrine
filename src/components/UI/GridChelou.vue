<script setup>
import IconBleubleu from "@/assets/icons/test.svg?inline";


</script>


<template>
  <div class="dynamic-grid">
    <div class="left">
      <div>
        <IconBleubleu class="svg" />
      </div>
      <div>
        <IconBleubleu class="svg" />
      </div>
    </div>

    <div class="right">
      <div>
        <IconBleubleu class="svg" />
      </div>
      <div>
        <IconBleubleu class="svg" />
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

		transition: flex 0.5s $ease-vnr;
		
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;

			transition: flex 0.5s $ease-vnr;
		}
	}

	.left {
		border-right: 1px solid $primary;
		flex: 0.4;

		div:first-of-type {
			border-bottom: 1px solid $primary;
			flex: 0.4;	

			svg {
				animation: rotate3D 5s $ease-vnr infinite alternate;
			}
			
			&:hover{
				flex: 0.5;
			}
		}
		div:last-of-type {
			flex: 0.6;

			&:hover{
				flex: 0.8;
			}
			
			svg {
				transform: rotate(-4deg) scale(4.4) skew(27deg, -74deg);
				animation: skeew 9s $ease-vnr infinite alternate;
			}

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
				animation: skeew2 8s $ease-vnr infinite alternate;
			}
		}
		div:last-of-type {
			flex: 0.3;
			&:hover{
				flex: 0.5;
			}
			svg {
				transform: rotate(78.9deg) scale(4.0) skew(40deg, 10deg) translate(-20px,-20px);
				animation: skeew3 6s $ease-vnr infinite alternate;
			}
		}
	}

	svg {
		fill: $primary;
	}

	@keyframes rotate3D {
		from {
			transform: scale(1.0) rotate3d(0.5,0.8,0,0deg);
		}
		to {
			transform: scale(1.2) rotate3d(0.5,0.8,0,360deg);
		}
	}

	@keyframes skeew {
		from {
			transform: rotate(-4deg) scale(4.4) skew(27deg, -74deg);
		}

		to {
			transform: rotate(-18deg) scale(2.4) skew(29deg, -4deg);
		}
	}


	@keyframes skeew2 {
		from {
			transform: rotate(90deg) scale(3.3) skew(45deg, -75deg);
		}

		to {
			transform: rotate(110deg) scale(5) skew(20deg, 50deg);
		}
	}

	@keyframes skeew3 {
		from {
			transform: rotate(78.9deg) scale(4.0) skew(40deg, 10deg) translate(-20px,-20px);
		}

		to {
			transform: rotate(90.9deg) scale(3.0) skew(10deg, 100deg) translate(-0px,-20px);
		}
	}

	@keyframes wawing {
		from {
			flex: 0.4;
		}

		to {
			flex: 0.6;
		}
	}

</style>