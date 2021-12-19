<template>
  <header class="header header--home o-grid-item--full-bottom">
    <h1 class="header__title">
      <span class="block">Multi-</span>
      <span class="block">Disciplinary collec-</span>
      <span class="block">tive with a bold</span>
      <span class="block text-right">personality</span>
    </h1>

    <div class="links-container">
      <Link
        text="Our projects"
        icon="smile"
        url="https://fr.malt.be/group/bleubleuchocotte/60e0bf515002f0348a13aa26"
      />
      <Link
        text="Our team"
        icon="love"
        url="https://fr.malt.be/group/bleubleuchocotte/60e0bf515002f0348a13aa26"
      />
      <ContactUs />
    </div>

    <div class="socials-container">
      <Socials :fields="socials" />
    </div>

    <div class="infos-container">
      <p class="infos-container__top">
        Amour &
      </p>
      <p class="infos-container__bottom">
        multimedia
      </p>
    </div>

    <div class="header__video">
      <video
        autoplay
        loop
      >
        <!--        <source
          src="@/assets/video/entry-video.webm"
          type="video/webm"
        >-->
        <source
          src="@/assets/video/entry-video.mp4"
          type="video/mp4"
        >
      </video>
    </div>
  </header>
</template>

<script setup>
import Socials from '../../socials/Socials.vue';
import Link from '@/components/UI/Link.vue';
import ContactUs from '../../UI/ContactUs.vue';

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="scss">
.block {
  display: block;
}

.text-right {
  text-align: right;
}

.header--home {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 36px 14px;

  .header__title {
    position: relative;
    z-index: 1;
    font-size: 98px;

    span {
      white-space: nowrap;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }

  .header__video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .socials-container {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    text-align: center;
    grid-area: socials;
    padding: 16px;

    .socials {
      display: flex;
      justify-content: space-between;
    }

    .social-media {
      margin-right: 32px;
    }
  }

  .links-container {
    position: absolute;
    top: 26px;
    right: 26px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: links;
    padding: 20px 16px;

    .link:not(:last-child) {
      margin-bottom: 16px;
    }

    .clipboard-copy .link {
      margin-bottom: 0;
    }
  }

  .infos-container {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 26px;
    font-family: $font-secondary;
    font-size: 22px;
    font-variation-settings: 'wdth' 300, 'wght' 20;
    text-transform: uppercase;
  }
  .infos-container__top {
    margin-right: 130px;
  }
  .infos-container__bottom {
    text-align: right;
  }
}



.section--homepage-entry {

  .infos__text {
    margin-top: 32px;
    font-size: 14px;
  }


  .link:not(:last-child) {
    margin-bottom: 16px;
  }

  .main-logo {
    order: -1;
    width: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media #{$lg-up} {
  .section--homepage-entry {
    display: grid;
    grid-template-columns: minmax(272px, 22%) auto;

    .aside {
      display: block;
    }

    .infos-container {
      display: block;
      padding: 26px;
    }

    .links-container {
      padding: 22px;
    }

    .main-logo {
      order: 1;
      height: calc(100vh - 200px);
    }

    .socials-container {
      padding: 0;

      .socials {
        display: block;
      }

      .social-media {
        margin: 20px;
      }
    }
  }
}
</style>