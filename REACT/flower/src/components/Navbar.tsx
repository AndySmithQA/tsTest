import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

const Navbar = () => {
  const  {itemIds} = useContext(CartContext)
  const cartCount: number = itemIds.length

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.header}>
        seed theory
      </h2>
      <div className={styles['nav-link-wrapper']}>
        <Link to="/">Home</Link>
        <Link to="/items">Shop</Link>
        <Link to="/checkout">Checkout {cartCount}</Link> 
      </div>
    </nav>
  )
}

export default Navbar