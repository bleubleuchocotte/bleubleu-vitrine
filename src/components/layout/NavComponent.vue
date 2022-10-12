<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <ul>
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
        <RouterLink to="#footer">
          Contact us
        </RouterLink>
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
		font-size: 42px;
		letter-spacing: 1px;
		font-weight: 400;
	}
	ul{
		display: flex;
	}
	li{
		border: 1px solid $secondary;
		border-radius: 50px;

		transition: all 0.5s ease-out;
		white-space: nowrap;
		*{
			display: inline-flex;
			height: 100%;
			width: 100%;
			padding: 0.2rem 1rem;
			align-items: center;
			justify-content: center;
		}

	}

	.nav__big-link{
		flex: 0.3;
	}
	.nav__little-link{
		flex: 0.2;
	}

	ul:hover {
		li:hover{
			flex: 0.4;
			letter-spacing: 4px;
		}
		li:not(:hover){
			letter-spacing: -2px;
		}
	}



	
</style>