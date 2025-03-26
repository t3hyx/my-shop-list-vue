<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useShoppingList } from '../store/useShoppingList'

// get store
const { totalShopItems, completedShopItems } = useShoppingList()

// alert state
const showAlert = ref(false)
const alertType = ref<'info' | 'success' | 'warning' | 'error'>('info')
const alertMsg = ref('')

let alertTimer: number | null = null

watch([totalShopItems, completedShopItems], ([newTotal, newCompleted], [oldTotal, oldCompleted]) => {
  // ? ShoppingItem Added
  if (newTotal > oldTotal) {
    showAlertMessage('Item added to your shopping list!', 'success')
  }
  // ? ShoppingItem completed
  if (newCompleted > oldCompleted) {
    showAlertMessage('Item marked as completed.', 'success')
  }
  // ? All ShoppingItems completed
  if (newTotal > 0 && newTotal === newCompleted && newCompleted > oldCompleted) {
    showAlertMessage('Nice! All items completed.', 'success')
  }
})

function showAlertMessage(message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', duration: number = 3000) {
  // We clearout the timer
  if (alertTimer) {
    clearTimeout(alertTimer)
  }
  alertMsg.value = message
  alertType.value = type
  showAlert.value = true

  // Auto-hide after duration
  alertTimer = setTimeout(() => {
    showAlert.value = false
  }, duration) as unknown as number
}

function closeAlertManual() {
  showAlert.value = false
  if (alertTimer) {
    clearTimeout(alertTimer)
  }
}

// State onMount
onMounted(() => {
  if (totalShopItems.value > 0) {
    showAlertMessage(`Welcome back! You have ${totalShopItems.value} items in your list.`)
  }
  else {
    showAlertMessage('Welcome! Start by adding items to your shopping list.')
  }
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="showAlert"
      class="alert alert-info fixed top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg max-w-md w-full"
      role="alert"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ alertMsg }}</span>
      <button class="btn btn-ghost btn-sm" @click="closeAlertManual">
        ×
      </button>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
