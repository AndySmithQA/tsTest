import styles from './CheckoutItem.module.css'

type CheckoutItemProps = {
    id: string
    name: string
    imageUrl: string
    price: number
}

const CheckoutItem = ({ id, name, imageUrl, price }: CheckoutItemProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} height={80} width={64} alt={name} title={name} />
      <div>
        <h3>{name} - {id}</h3>
        <p>£{price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CheckoutItem