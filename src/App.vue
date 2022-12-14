<script setup>
  import { onMounted } from 'vue';
  import { getRandomInt } from '@/composables/useRandom.js';
  import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
  import { addCSSProperty } from "@/composables/useRootElement.js";
  import Colors from "./config";

  onMounted(() => {

    let randomColor = {};

    localStorage.getItem("colorful") ? localStorage.getItem("colorful") : localStorage.setItem("colorful", false);
 
    if (localStorage.getItem("colorful") === "false") {
      randomColor = Colors.DARKER;
    } else {

      const length = Object.entries(Colors).length;
      randomColor = Object.entries(Colors)[getRandomInt(0, length)][1];

      while (localStorage.getItem("color") == JSON.stringify(randomColor)) {
        // Draw colors until a new one is founded
        randomColor = Object.entries(Colors)[getRandomInt(0, length)][1];
      }

    }

    localStorage.setItem("color", JSON.stringify(randomColor));

    addCSSProperty('--primary-color', randomColor.primary);
    addCSSProperty('--secondary-color', randomColor.secondary);
    addCSSProperty('--filter-to-primary', randomColor.filter);

    if (navigator.userAgent.match(/Android/i)) {
      document.querySelector('html').classList.add('android');
    }

    document.querySelector("meta[name='theme-color']").content = randomColor.primary;

    document.getElementById('squaredFavicon').href = getDataUriFromSvg(getSvgFavicon(randomColor.primary));

    console.log(randomColor.name);
  });


</script>

<template>
  <router-view />
</template>
