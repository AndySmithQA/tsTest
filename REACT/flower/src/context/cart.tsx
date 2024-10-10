import { createContext, useState } from 'react'
import sum from 'lodash.sum'
 
export const CartContext = createContext<{
  itemIds: string[],
  addItem: (itemId: string) => void,
  removeItem: (itemId: string) => void,
  isItemInCart: (itemId: string) => boolean,
  getItemById: (itemId: string) => Item | undefined,
  calculateTotal: () => number
}>({
  itemIds: [],
  addItem: () => {},
  removeItem: () => {},
  isItemInCart: () => false,
  getItemById: () => undefined,
  calculateTotal: () => 0
})

interface Item {
  id: string;
  price: number;
  imageUrl: string;
  name: string;

}

interface CartProviderProps {
  itemsData: Item[];
  children: React.ReactNode;
}

export const CartProvider = ({ itemsData, children }: CartProviderProps) => {
  const [itemIds, setItemIds] = useState<string[]>([])

  const contextValue = {
    itemIds,
    addItem(itemId: string) {
      setItemIds(oldItems => [...oldItems, itemId])
    },
    removeItem(itemId: string){
      setItemIds(oldItems => oldItems.filter((id) => id !== itemId))
    },
    isItemInCart(itemId: string){
      return !!itemIds.find((id) => id === itemId)
    },
    getItemById(itemId: string) {
      return itemsData.find((item) => item.id === itemId)
    },
    calculateTotal() {
      return sum(itemIds.map((id) => {
        const item = contextValue.getItemById(id);
        return item ? item.price : 0;
      }))
    }
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}