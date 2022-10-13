<script setup>
import IconBleubleu from "@/assets/icons/test.svg?inline";


</script>


<template>
  <div class="flex">
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



	.flex {
		display: flex;
		height: 100%;
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

			border: 1px solid $primary;
			outline: 1px solid $primary;

			transition: flex 0.5s $ease-vnr;
		}
	}

	.left {
		flex: 0.4;
		div:first-of-type {
			flex: 0.4;

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