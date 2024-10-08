import { useContext } from 'react'
import { CartContext } from '../context/cart'
import CheckoutItem from '../components/CheckoutItem'
import styles from './CheckoutPage.module.css'
import { useNavigate } from 'react-router'


const CheckoutPage = () => {
  const navigate = useNavigate(); 
  const { itemIds, getItemById, calculateTotal, removeItem } = useContext(CartContext)
  const isCartEmpty = !itemIds.length
  const handleCheckout = () => {
    alert('Thank you for shopping with us!');
    itemIds.forEach(id => removeItem(id));
    navigate('/')
}


  return (
    <div>
      <h1 className={styles.header}>Checkout</h1>
      <div className={styles['items-wrapper']}>
        {isCartEmpty ?
          <p>Your cart is empty!</p>
          :
          <>{itemIds.map((id) => {
            const item = getItemById(id);
            return item && item.id ? <CheckoutItem {...item} key={id} /> : null;
          })}</>
        }
      </div>
      <p className={styles.total}><b>Total: </b>£{calculateTotal().toFixed(2)}</p>

      {!isCartEmpty && (
        <button onClick={handleCheckout} className={styles['checkout-button']}>
          Checkout
        </button>
      )}
    </div>
  )
}

export default CheckoutPage