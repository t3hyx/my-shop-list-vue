<script setup lang="ts">
// import type { IShopItem } from '../../types/types'
// import { ref } from 'vue'
import { useShoppingList } from '../../store/UseShopItemList'
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
    <li class="list-row bg-base-200">
      <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"></div>
      <div>
        <div>Ellie Beilish</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          Bears of a fever
        </div>
      </div>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z" /></g></svg>
      </button>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></g></svg>
      </button>
    </li>

    <li class="list-row bg-base-200">
      <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"></div>
      <div>
        <div>Sabrino Gardener</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          Cappuccino
        </div>
      </div>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z" /></g></svg>
      </button>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></g></svg>
      </button>
    </li>
  </ul>
</template>
