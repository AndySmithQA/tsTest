import { useContext } from 'react'
import { CartContext } from '../context/cart-context'

interface ItemCardProps {
  id: number;
  symbol: string;
  name: string;
  price: number;
}

export default function ItemCard({ id, symbol, name, price }: ItemCardProps) {
  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    addToCart(Number(id))
  }

  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}
