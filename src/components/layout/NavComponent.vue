<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import AddColor from '../UI/HeaderTextColorIndication.vue';

onMounted(() => {
	colorful.value = (localStorage.getItem("colorful") == "true");
})

const colorful = ref(false);
const getEmit = ref(false)
</script>

<template>
  <nav
    class="fs-42"
    :class="{animate: getEmit, dynamicHeight: colorful}"
  >
    <AddColor
      v-if="(!colorful)"
      :class="{animate: getEmit}"
      @colorful="(bool) => getEmit = bool"
    />
    <ul :class="{animate: getEmit}">
      <li class="nav__little-link">
        <RouterLink to="#agency">
          BleuBleu?
        </RouterLink>
      </li>
      <li class="nav__big-link">
        <RouterLink to="#project">
          Our projects
        </RouterLink>
      </li>
      <li class="nav__little-link">
        <RouterLink to="#team">
          Our team
        </RouterLink>
      </li>
      <li class="nav__big-link">
        <a
          href="https://3fh7gbh186a.typeform.com/to/ENGwpoSa"
          target="_blank"
        >Contact us</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
	nav{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;

		height: 125px;
		background: $gradient;

		color: $secondary;
		letter-spacing: 1px;
		font-weight: 400;

		@media #{$md-down}{
			height: 120px;
			background: $gradient-mobile;

			&.animate{
				height: 100px;
				transition: height 0.4s $ease-vnr 0.2s;
			}

			&.dynamicHeight{
				height: 100px;
			}
		}
	}
	ul{
		display: flex;
		@media #{$md-down}{
			flex-wrap: wrap;
		}

		&.animate{
			transform: translateY(-24px);
			transition: transform 0.4s $ease-vnr 0.2s;
		}
	}


	li{
		border: 1px solid $secondary;
		border-radius: 50px;

		transition: all 0.5s ease-out;
		@media #{$md-down}{
			transition: none;
			width: 50%;
		}
		white-space: nowrap;
		*{
			display: inline-flex;
			height: 100%;
			width: 100%;
			padding: 0.2rem 1rem;
			align-items: center;
			justify-content: center;
		}

		.android & *{
			padding: 0.3rem 1rem;
		}

	}

	.nav__big-link{
		@media #{$md-up}{
			flex: 0.3;
		}
	}
	.nav__little-link{
		@media #{$md-up}{
			flex: 0.2;
		}
	}

	@media #{$md-up} {
		ul:hover {
			li:hover{
				flex: 0.4;
				letter-spacing: 4px;
			}
			li:not(:hover){
				letter-spacing: -2px;
			}
		}
	}	
</style>