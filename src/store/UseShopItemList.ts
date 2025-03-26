import type { IShopItem, IShopItemList, TFilterOption } from '../types/types'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref } from 'vue'

export function useShoppingList() {
  // ? State
  const currentShopItemList = ref<IShopItemList>({
    id: uuidv4(),
    name: 'Shopping List',
    createdAt: new Date(),
    items: [],
  })

  const savedShopItemLists = ref<IShopItemList[]>([])
  const filterOption = ref<TFilterOption>('all')

  // ? Computed props
  const filteredShopItems = computed(() => {
    switch (filterOption.value) {
      case 'completed':
        return currentShopItemList.value.items.filter(item => item.isCompleted)
      case 'pending':
        return currentShopItemList.value.items.filter(item => !item.isCompleted)
      default:
        return currentShopItemList.value.items
    }
  })
  const totalShopItems = computed(() => currentShopItemList.value.items.length)
  const completedShopItems = computed(() => currentShopItemList.value.items.filter(item => item.isCompleted).length)

  // ? Methods
  function addShopItem(name: string, category: string, quantity: number, imageUrl?: string): void {
    const newShopItem: IShopItem = {
      id: uuidv4(),
      name,
      category,
      quantity,
      imageUrl,
      isCompleted: false,
    }

    currentShopItemList.value.items.push(newShopItem)
    saveToLocalStorage()
  }

  function removeShopItem(id: string): void {
    currentShopItemList.value.items = currentShopItemList.value.items.filter(item => item.id !== id)
    saveToLocalStorage()
  }

  function toggleShopItemCompleted(id: string): void {
    const item = currentShopItemList.value.items.find(item => item.id === id)
    if (item) {
      item.isCompleted = !item.isCompleted
      saveToLocalStorage()
    }
  }

  function saveCurrentShopItemList(): void {
    const ShopItemListToSave = JSON.parse(JSON.stringify(currentShopItemList.value))
    const existingIndex = savedShopItemLists.value.findIndex(list => list.id === ShopItemListToSave.id)

    if (existingIndex >= 0) {
      // Update
      savedShopItemLists.value[existingIndex] = ShopItemListToSave
    }
    else {
      // Add new
      savedShopItemLists.value.push(ShopItemListToSave)
    }

    saveToLocalStorage()
  }

  function createNewShopItemList(name?: string): void {
    currentShopItemList.value = {
      id: uuidv4(),
      name: name || 'Shopping List',
      createdAt: new Date(),
      items: [],
    }
    saveToLocalStorage()
  }

  function loadShopItemList(id: string): void {
    const shopItemList = savedShopItemLists.value.find(list => list.id === id)
    if (shopItemList) {
      currentShopItemList.value = JSON.parse(JSON.stringify(shopItemList))
    }
  }

  function setFilter(filter: TFilterOption): void {
    filterOption.value = filter
  }

  // ? Local Storage
  function saveToLocalStorage(): void {
    localStorage.setItem('currentShopItemList', JSON.stringify(currentShopItemList.value))
    localStorage.setItem('savedShopItemLists', JSON.stringify(savedShopItemLists.value))
  }

  function loadFromLocalStorage(): void {
    const storedCurrentShopItemList = localStorage.getItem('currentShopItemList')
    const storedSavedShopItemLists = localStorage.getItem('savedShopItemLists')

    if (storedCurrentShopItemList) {
      currentShopItemList.value = JSON.parse(storedCurrentShopItemList)
    }

    if (storedSavedShopItemLists) {
      savedShopItemLists.value = JSON.parse(storedSavedShopItemLists)
    }
  }

  // ? Init
  loadFromLocalStorage()

  return {
    currentShopItemList,
    savedShopItemLists,
    filterOption,
    filteredShopItems,
    totalShopItems,
    completedShopItems,
    addShopItem,
    removeShopItem,
    toggleShopItemCompleted,
    saveCurrentShopItemList,
    createNewShopItemList,
    loadShopItemList,
    setFilter,
  }
}
