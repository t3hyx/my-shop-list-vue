<script setup lang="ts">
import type { IShopItem } from '../types/types'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  item: IShopItem
}>()

const emit = defineEmits<{
  (e: 'remove', id: string): void
  (e: 'complete', id: string): void
  // TODO you may want to add some kind of 'edit' event here
}>()

function handleRemove() {
  emit('remove', props.item.id)
}

function handleComplete() {
  emit('complete', props.item.id)
}

// TODO here also, you may want to define an handler for the 'edit' event
</script>

<template>
  <li class="list-row bg-base-200">
    <div>
      <img
        class="size-10"
        :src="item.imageUrl || '../../assets/png/Goods Filled Icon.png'"
        alt="Item Icon"
        style="color: white"
      >
    </div>
    <div>
      <div :class="{ 'line-through': item.isCompleted }">
        {{ item.name }}
      </div>
      <div class="text-xs uppercase font-semibold opacity-60">
        {{ item.category }}
      </div>
    </div>
    <!-- <button class="btn btn-square btn-ghost">
      <Icon icon="mdi:file-edit" />
    </button> --> <!-- TODO: Think on how you can display edit on ShopItem -->
    <button class="btn btn-square btn-ghost" @click="handleRemove()">
      <Icon class="size-10 fill-error" icon="gridicons:cross-circle" style="color:red" />
    </button>
    <button class="btn btn-square btn-ghost" @click="handleComplete()">
      <Icon
        class="size-10"
        icon="gridicons:checkmark-circle"
        :style="{ color: item.isCompleted ? 'green' : 'gray' }"
      />
    </button>
  </li>
</template>
