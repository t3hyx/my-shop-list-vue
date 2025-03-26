<script setup lang="ts">
import type { TFilterOption } from '../types/types'
import InputShopItem from '../components/Input/InputShopItem.vue'
import ShopItemList from '../components/ShopList/ShopItemList.vue'
import { useShoppingList } from '../store/UseShopItemList'

// get store
const { setFilter, filterOption, totalShopItems } = useShoppingList()

const filterOptions: { value: TFilterOption, label: string }[] = [
  { value: 'all', label: 'All Items' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
]

function changeFilter(filter: TFilterOption) {
  setFilter(filter)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">
        What would you like to buy?
      </h1>
      <div class="badge badge-accent">
        {{ totalShopItems }} items
      </div>
    </div>

    <!-- ? Input form for new items -->
    <InputShopItem />

    <!-- ? Filter buttons -->
    <div class="flex gap-2 mb-4">
      <button
        v-for="option in filterOptions"
        :key="option.value"
        class="btn btn-sm"
        :class="{ 'btn-primary': filterOption === option.value }"
        @click="changeFilter(option.value)"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- ? Shopping list items -->
    <ShopItemList />
  </div>
</template>
