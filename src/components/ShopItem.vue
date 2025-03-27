<script setup lang="ts">
import type { IShopItem } from '../types/types'
import { Icon } from '@iconify/vue'
import { computed, defineEmits, defineProps, ref } from 'vue'
import { EShopItemCategory, RShopItemCategoryProps } from '../types/types'

const props = defineProps<{
  item: IShopItem
}>()

const emit = defineEmits<{
  (e: 'remove', id: string): void
  (e: 'complete', id: string): void
  // TODO you may want to add some kind of 'edit' event here
}>()

const isAnimating = ref(false)

function handleRemove() {
  emit('remove', props.item.id)
}

function handleComplete() {
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 100)

  emit('complete', props.item.id)
}

// TODO here also, you may want to define an handler for the 'edit' event

const shopItemCategoryData = computed(() => {
  return RShopItemCategoryProps[props.item.category] || RShopItemCategoryProps[EShopItemCategory.OTHER]
})
</script>

<template>
  <li
    class="transition-all duration-300 list-row"
    :class="{
      'bg-base-200': !item.isCompleted,
      'bg-accent/20': item.isCompleted,
      'flash-animation': isAnimating,
    }"
  >
    <div class="flex items-center justify-center size-10 rounded-full bg-base-300">
      <Icon
        class="size-10 transition-all duration-300"
        :icon="shopItemCategoryData.icon"
        :class="{ 'opacity-60': item.isCompleted }"
        :style="{ color: item.isCompleted ? 'gray' : shopItemCategoryData.color }"
      />
    </div>
    <div>
      <div
        class="transition-all duration-300"
        :class="{ 'line-through text-accent font-medium': item.isCompleted }"
      >
        {{ item.name }}
      </div>
      <div
        class="text-xs uppercase font-semibold transition-all duration-300"
        :class="{ 'opacity-60': !item.isCompleted, 'opacity-40': item.isCompleted }"
      >
        {{ item.category }}
        <span class="ml-2">({{ item.quantity }} {{ item.unit || 'units' }})</span>
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
        class="size-10 transition-transform duration-300"
        icon="gridicons:checkmark-circle"
        :class="{ 'scale-120': item.isCompleted }"
        :style="{ color: !item.isCompleted ? 'green' : 'white' }"
      />
    </button>
  </li>
</template>

<style scoped>
.flash-animation {
  animation: flash 0.1s ease-out;
}

@keyframes flash {
  0% {
    background-color: rgb(var(--p) / 0.5);
  }
  100% {
    background-color: rgb(var(--a) / 0.2);
  }
}
</style>
