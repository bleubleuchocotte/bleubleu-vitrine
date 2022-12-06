<script setup>
  import { onMounted } from 'vue';
  import { getRandomInt } from '@/composables/useRandom.js';
  import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
  import Colors from "./config";

  onMounted(() => {

    const length = Object.entries(Colors).length;
    const randomColor = Object.entries(Colors)[getRandomInt(0, length)][1];

    useCSSProperty('--primary-color', randomColor.primary);
    useCSSProperty('--secondary-color', randomColor.secondary);
    useCSSProperty('--filter-to-primary', randomColor.filter);

    if (navigator.userAgent.match(/Android/i)) {
      document.querySelector('html').classList.add('android');
    }

    document.querySelector("meta[name='theme-color']").content = randomColor.primary;

    document.getElementById('squaredFavicon').href = getDataUriFromSvg(getSvgFavicon(randomColor.primary));

    console.log(randomColor.name);
  });

  function useCSSProperty(name, value) {
    document.querySelector(':root').style.setProperty(name, value);
  }
</script>

<template>
  <router-view />
</template>
