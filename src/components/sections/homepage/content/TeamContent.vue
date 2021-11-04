<template>
  <article class="content-item team-content">
    <Title class="content-item__title team-content__title">
      <prismic-text :field="title" />
    </Title>
    <div class="content-item__infos">
      <Link
        :url="link.url"
        :target="link.target"
        :text="linkName"
      />
      <div class="content-item__description">
        <prismic-text
          has_blur 
          class="content-item__text"
          :field="description"
          :style="{}"
        />
        <!-- <div class="blur" /> -->
      </div>
    </div>
  </article>
</template>

<script setup>
import Link from '../../../UI/Link.vue';
import { defineProps } from 'vue';
import Title from '../../../UI/Title.vue';

defineProps({
  title: {
    type: Array,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  },
  has_blur: {
    type: Boolean,
    required: false
  }
})
</script>


<script>
window.addEventListener('mousemove', arg => {
    let blur_elements = document.querySelectorAll('[has_blur]');

    blur_elements.forEach(el => {
        let para = el.getBoundingClientRect();
        let distance = computeDistanceFromCenter(para, arg);
        let blur_value = distance*0.1;
        if (blur_value > 1){
          blur_value = 1;
        } else if (blur_value < 0.10){
          blur_value = 0;
        } 

        el.style = `filter: blur(${4*blur_value}px)`

    })

})

function computeDistanceFromCenter(el_A,el_B){
    // el_A doit être un élément getBoundingClientRec()
    // el_B doit être l'argument d'un event mousemove
    let dist = Math.sqrt(Math.pow((el_A.x+el_A.width/2) - el_B.clientX,2)/el_A.width/2 + Math.pow((el_A.y+el_A.height/2) - el_B.clientY,2)/el_A.height/2)
    return dist;
}
</script>

<style lang="scss">
.content-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 32px;
}

.content-item__title {
  display: block;
}

.blur {
  @extend %absolute;
  pointer-events: none;
  left: -10px;
  top: -10px;
  backdrop-filter: blur(2px);
  transition: backdrop-filter .3s ease-in-out;
}

.content-item__description {
  position: relative;
  margin-top: 24px;
  font-size: 20px;
  line-height: 1.2;

  @include hover {
    .blur {
      backdrop-filter: blur(0);
    }
  }
}

.team-content__title {
  max-width: 400px;
}
</style>