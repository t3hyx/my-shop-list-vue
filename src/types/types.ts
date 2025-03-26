export interface IShopItem {
  id: string
  name: string
  category: string
  quantity: number
  unit?: string
  isCompleted: boolean
  imageUrl?: string
}

export interface IShopItemList {
  id: string
  name: string
  createdAt: Date
  items: IShopItem[]
}

export type TFilterOption = 'all' | 'completed' | 'pending'

export enum EShopItemCategory {
  FRUITS = 'fruits',
  VEGETABLES = 'vegetables',
  DAIRY = 'dairy',
  MEAT = 'meat',
  BAKERY = 'bakery',
  BEVERAGES = 'beverages',
  OTHER = 'other',
}
