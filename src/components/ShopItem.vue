<script setup lang="ts">
import type { IShopItem } from '../types/types'
import { Icon } from '@iconify/vue'
import { computed, defineEmits, defineProps } from 'vue'
import { EShopItemCategory, RShopItemCategoryProps } from '../types/types'

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

const shopItemCategoryData = computed(() => {
  return RShopItemCategoryProps[props.item.category] || RShopItemCategoryProps[EShopItemCategory.OTHER]
})
</script>

<template>
  <li class="list-row bg-base-200">
    <div class="flex items-center justify-center size-10 rounded-full bg-base-300">
      <Icon
        :icon="shopItemCategoryData.icon"
        class="size-10"
        :style="{ color: item.isCompleted ? 'gray' : shopItemCategoryData.color }"
      />
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
        style="color: green"
      />
    </button>
  </li>
</template>
