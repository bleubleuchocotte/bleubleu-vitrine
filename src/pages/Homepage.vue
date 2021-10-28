<template>
  <Header />
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
console.log(instance);
</script>
