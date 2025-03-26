export interface ShopItem {
  id: string
  name: string
  category: string
  quantity: number
  // unit?: string; //TODO : find a way to implement units
  isCompleted: boolean
  imageUrl?: string
}

export interface ShopItemList {
  id: string
  name: string
  createdAt: Date
  items: ShopItem[]
}

export type FilterOption = 'all' | 'completed' | 'pending'

export enum ShopItemCategory {
  FRUITS = 'fruits',
  VEGETABLES = 'vegetables',
  DAIRY = 'dairy',
  MEAT = 'meat',
  BAKERY = 'bakery',
  BEVERAGES = 'beverages',
  OTHER = 'other',
}
