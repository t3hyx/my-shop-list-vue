<script setup lang="ts">
import AlertBar from './components/AlertBar.vue'
import TheFooter from './components/TheFooter.vue'
import TheHero from './components/TheHero.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />
    <AlertBar />
    <TheHero class="flex-grow" />
    <TheFooter />
  </div>
</template>

<style scoped>

</style>
