<script setup lang="ts">
import { ref } from 'vue'
import { useShoppingList } from '../store/useShoppingList'
import { EShopItemCategory } from '../types/types'

// get store
const { addShopItem } = useShoppingList()

// form data
const shopItemName = ref('')
const shopItemCategory = ref<EShopItemCategory>(EShopItemCategory.OTHER)
const shopItemQuantity = ref<number>(1)
const shopItemUnit = ref<string>('')

const categories = Object.values(EShopItemCategory)
const unitOptions = [
  { value: '', label: 'unit' },
  { value: 'g', label: 'grams' },
  { value: 'kg', label: 'kilograms' },
  { value: 'ml', label: 'milliliters' },
  { value: 'cl', label: 'centiliters' },
  { value: 'l', label: 'liters' },
  { value: 'pcs', label: 'pieces' },
  { value: 'pck', label: 'pack' },
]

function handleSubmit() {
  if (shopItemName.value.trim()) {
    addShopItem(
      shopItemName.value,
      shopItemCategory.value,
      shopItemQuantity.value,
      shopItemUnit.value,
    )
    // and we reset form data
    shopItemName.value = ''
    shopItemCategory.value = EShopItemCategory.OTHER
    shopItemQuantity.value = 1
    shopItemUnit.value = ''
  }
}
</script>

<template>
  <div class="bg-base-200 p-4 rounded-lg mb-4">
    <h2 class="text-xl font-bold mb-4">
      Add New Item
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- * Item Name -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Item Name
        </legend>
        <input
          v-model="shopItemName"
          type="text"
          class="input input-primary w-full"
          placeholder="What do you need to buy?"
        >
      </fieldset>

      <!-- * Category -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Category
        </legend>
        <select v-model="shopItemCategory" class="select select-primary w-full">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </fieldset>

      <!-- * Quantity -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Quantity
        </legend>
        <input
          v-model.number="shopItemQuantity"
          type="number"
          min="1"
          class="input input-primary w-full"
          placeholder="How many?"
        >
      </fieldset>

      <!-- * Unit -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Unit
        </legend>
        <select v-model="shopItemUnit" class="select select-primary w-full">
          <option v-for="option in unitOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <span class="fieldset-label">Optional</span>
      </fieldset>
    </div>

    <!-- * Submit Button -->
    <div class="mt-4 flex justify-end">
      <button
        class="btn btn-secondary"
        :disabled="!shopItemName.trim()"
        @click="handleSubmit"
      >
        Add to Shopping List
      </button>
    </div>
  </div>
</template>
