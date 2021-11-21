<template>
  <section class="section section--homepage-entry o-grid-item--full-bottom">
    <aside class="aside o-grid-item--right">
      <div class="infos o-grid-item--bottom">
        <IconBleubleu />
        <p class="infos__text">
          Amour & multimedia
        </p>
      </div>
      <div class="socials o-grid-item--bottom">
        <Socials :fields="socials" />
      </div>
      <div class="links">
        <Link
          text="Our projects"
          to="/projects"
          type="internal"
        />
        <Link
          text="Our team"
          to="https://fr.malt.be/group/bleubleuchocotte/60e0bf515002f0348a13aa26"
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

<style lang="scss" scoped>
.section--homepage-entry {
  display: grid;
  grid-template-columns: minmax(272px, 22%) auto;

  .infos {
    padding: 26px;
    font-size: 24px;
  }
  .infos__text {
    margin-top: 32px;
  }

  .socials {
    text-align: center;
  }
  
  .links {
    display: flex;
    flex-direction: column;
    padding: 22px;
  }

  .link:not(:last-child) {
    margin-bottom: 16px;
  }

  .main-logo {
    height: calc(100vh - 200px);

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>