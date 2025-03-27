export enum EShopItemCategory {
  FRUITS = 'fruits',
  VEGETABLES = 'vegetables',
  DAIRY = 'dairy',
  MEAT = 'meat',
  CHEESE = 'cheese',
  BAKERY = 'bakery',
  BEVERAGES = 'beverages',
  BEAUTY = 'beauty',
  CLEANING = 'cleaning',
  PHARMACY = 'pharmacy',
  SWEETS = 'sweets',
  ELECTRONICS = 'electronics',
  OTHER = 'other',
}

export interface IShopItem {
  id: string
  name: string
  category: EShopItemCategory
  quantity: number
  unit: string
  isCompleted: boolean
}

export interface IShopItemList {
  id: string
  name: string
  createdAt: Date
  items: IShopItem[]
}

export type TFilterOption = 'all' | 'completed' | 'pending'

export interface IShopItemCategoryProps {
  id: EShopItemCategory
  label: string
  icon: string
  color: string
}

export const RShopItemCategoryProps: Record<EShopItemCategory, IShopItemCategoryProps> = {
  [EShopItemCategory.FRUITS]: {
    id: EShopItemCategory.FRUITS,
    label: 'Fruits',
    icon: 'healthicons:fruits',
    color: '#ff6b6b',
  },
  [EShopItemCategory.VEGETABLES]: {
    id: EShopItemCategory.VEGETABLES,
    label: 'Vegetables',
    icon: 'healthicons:vegetables',
    color: '#fb9804',
  },
  [EShopItemCategory.DAIRY]: {
    id: EShopItemCategory.DAIRY,
    label: 'Dairy',
    icon: 'healthicons:dairy',
    color: '#ffffff',
  },
  [EShopItemCategory.MEAT]: {
    id: EShopItemCategory.MEAT,
    label: 'Meat',
    icon: 'fluent-emoji-high-contrast:cut-of-meat',
    color: '#f81616',
  },
  [EShopItemCategory.CHEESE]: {
    id: EShopItemCategory.CHEESE,
    label: 'Cheese',
    icon: 'bxs:cheese',
    color: '#f6c204',
  },
  [EShopItemCategory.BAKERY]: {
    id: EShopItemCategory.BAKERY,
    label: 'Bakery',
    icon: 'healthicons:carbohydrates',
    color: '#be4d25',
  },
  [EShopItemCategory.BEVERAGES]: {
    id: EShopItemCategory.BEVERAGES,
    label: 'Beverages',
    icon: 'solar:bottle-bold',
    color: '#4dabf7',
  },
  [EShopItemCategory.SWEETS]: {
    id: EShopItemCategory.SWEETS,
    label: 'Sweets',
    icon: 'ep:sugar',
    color: '#ed2cb0',
  },
  [EShopItemCategory.BEAUTY]: {
    id: EShopItemCategory.BEAUTY,
    label: 'Beauty',
    icon: 'healthicons:artificial-intelligence',
    color: '#fdf917',
  },
  [EShopItemCategory.CLEANING]: {
    id: EShopItemCategory.CLEANING,
    label: 'Cleaning',
    icon: 'healthicons:cleaning',
    color: '#05f5f5',
  },
  [EShopItemCategory.PHARMACY]: {
    id: EShopItemCategory.PHARMACY,
    label: 'Pharmacy',
    icon: 'healthicons:pharmacy-alt',
    color: '#06db5b',
  },
  [EShopItemCategory.ELECTRONICS]: {
    id: EShopItemCategory.ELECTRONICS,
    label: 'Electronics',
    icon: 'mynaui:chip-solid',
    color: '#8f3bfc',
  },
  [EShopItemCategory.OTHER]: {
    id: EShopItemCategory.OTHER,
    label: 'Other',
    icon: 'solar:bag-2-bold',
    color: '#9da3aa',
  },
}
