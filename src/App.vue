<script setup lang="ts">
import AlertBar from './components/AlertBar.vue'
import TheFooter from './components/TheFooter.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />
    <AlertBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>
