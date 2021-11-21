<template>
  <section class="section section--homepage-entry o-grid-item--full-bottom">
    <aside class="aside o-grid-item--right">
      <div class="infos-container o-grid-item--bottom">
        <IconBleubleu />
        <p class="infos__text">
          Amour & multimedia
        </p>
      </div>
      <div class="socials-container o-grid-item--bottom">
        <Socials :fields="socials" />
      </div>
      <div class="links-container">
        <Link
          text="Our projects"
          to="/projects"
          type="internal"
        />
        <Link
          text="Our team"
          url="https://fr.malt.be/group/bleubleuchocotte/60e0bf515002f0348a13aa26"
        />
        <ContactUs />
      </div>
    </aside>
    <div class="main-logo">
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
  </section>
</template>

<script setup>
import Socials from '../../socials/Socials.vue';
import Link from '@/components/UI/Link.vue';
import IconBleubleu from '@/assets/icons/icon-bleubleu.svg?inline';
import ContactUs from '../../UI/ContactUs.vue';

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="scss">
.section--homepage-entry {
  display: flex;
  flex-direction: column;

  .aside {
    display: grid;
    grid-template-columns: minmax(182px, 1fr) 1fr;
    grid-template-areas:
      "links infos"
      "socials infos";
  }

  .infos-container {
    width: 100%;
    font-size: 24px;
    grid-area: infos;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;

    svg {
      max-width: 198px;
    }
  }

  .infos__text {
    margin-top: 32px;
    font-size: 14px;
  }

  .socials-container {
    text-align: center;
    grid-area: socials;
    padding: 12px;

    .socials {
      display: flex;
      justify-content: space-between;
    }

    .social-media {
      margin: 0;
    }
  }
  
  .links-container {
    display: flex;
    flex-direction: column;
    grid-area: links;
    padding: 20px 16px;

    .clipboard-copy .link {
      margin-bottom: 0;
    }
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