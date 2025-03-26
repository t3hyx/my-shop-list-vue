<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<template>
  <li class="list-row bg-base-200">
    <div><img class="size-10" src="../../assets/png/Fruits Icon.png" style="color: white"></div>
    <div>
      <div>Citrus</div>
      <div class="text-xs uppercase font-semibold opacity-60">
        fruits
      </div>
    </div>
    <!-- <button class="btn btn-square btn-ghost">
      <Icon icon="mdi:file-edit" />
    </button> --> <!-- TODO: Think on how you can display edit on ListItem -->
    <button class="btn btn-square btn-ghost">
      <Icon class="size-10 fill-error" icon="gridicons:cross-circle" style="color:red" />
    </button>
    <button class="btn btn-square btn-ghost">
      <Icon class="size-10" icon="gridicons:checkmark-circle" style="color: green" />
    </button>
  </li>
</template>
