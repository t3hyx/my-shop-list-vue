<script setup lang="ts">
import { useShoppingList } from '../store/useShoppingList'
import ShopItem from './ShopItem.vue'

const {
  filteredShopItems,
  totalShopItems,
  completedShopItems,
  removeShopItem,
  toggleShopItemCompleted,
} = useShoppingList()

// TODO : const editingShopItem = ref<IShopItem | null>(null)

function handleRemoveShopItem(id: string) {
  removeShopItem(id)
}

function handleCompleteShopItem(id: string) {
  toggleShopItemCompleted(id)
}

// TODO here you may want to add an handler like 'handleEditShopItem', in which you could handle navigation as well..
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide font-style: italic">
      Your actual shopping list : {{ completedShopItems }} / {{ totalShopItems }} items completed
    </li>
    <div v-if="filteredShopItems.length === 0" class="p-4 text-center">
      No items in your list yet... Add some items to get started!
    </div>
    <ShopItem
      v-for="item in filteredShopItems"
      :key="item.id"
      :item="item"
      @remove="handleRemoveShopItem"
      @complete="handleCompleteShopItem"
    />
  </ul>
</template>
