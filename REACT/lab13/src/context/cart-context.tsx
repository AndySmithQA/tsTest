import { createContext, useState } from 'react'
import itemsData from '../itemsData.json'
import { ReactNode } from 'react';

export const CartContext = createContext({
  itemsInCart: [],
  addToCart: () => {}
} as {
  itemsInCart: any[],
  addToCart: (itemId: number) => void
})



export function CartProvider({ children }: { children: ReactNode }) {
  const [itemsInCart, setItemsInCart] = useState<{ id: number; symbol: string; name: string; price: number }[]>([])

  function addToCart(itemId: number) {
    const item = itemsData.find((item) => item.id === itemId)
    if (item) {
      setItemsInCart((prev) => [...prev, item])
    }
  }

  const contextValue = {
    itemsInCart,
    addToCart
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
