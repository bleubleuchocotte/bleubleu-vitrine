<template>
  <h1>Project page</h1>
  <router-link to="/">Home</router-link>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
console.log('Project page');
</script>
