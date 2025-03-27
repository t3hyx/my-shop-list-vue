<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="hero bg-base-100">
    <div class="flex flex-col">
      <div class="hero-content flex-col lg:flex-row-reverse mb-8 mt-12">
        <!-- visuel/icon -->
        <div class="lg:w-1/2 flex justify-end">
          <Icon icon="emojione:shopping-cart" class="text-9xl max-w-sm" />
        </div>
        <!-- contenu texte -->
        <div class="lg:w-1/2">
          <h1 class="text-5xl font-bold">
            Welcome back <span class="text-secondary">{user} </span>!
          </h1>
          <h2 class="font-style: italic">
            I'll remember what you forgot since... <span class="font-bold text-secondary">wait</span>, what were we talking about?
          </h2>
          <p class="py-6">
            This app remembers your shopping lists so you don't have to pretend to,
            because who <span class="text-primary font-bold underline">really</span> needs neurons, when you have notifications?
          </p>
        </div>
      </div>
      <!-- boutons en dehors du hero -->
      <div class="flex justify-center w-full">
        <RouterLink :to="{ name: 'newlist' }">
          <button class="btn btn-primary mr-2">
            Start Over
          </button>
        </RouterLink>
        <button class="btn btn-secondary">
          Resume Ongoing
        </button>
      </div>
    </div>
  </div>
</template>
