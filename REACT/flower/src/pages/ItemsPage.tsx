import styles from './ItemsPage.module.css'
import ItemCard from '../components/ItemCard'

interface ItemsPageProps {
  itemsData: Array<{ id: string; [key: string]: any }>;
}

const ItemsPage: React.FC<ItemsPageProps> = ({ itemsData }) => {
  return (
    <>
      <h1 className={styles.header}>Our plants</h1>
      <div className={styles['items-grid']}>
        {
          itemsData.map((item) => (
            <ItemCard
              key={item.id}  
              id={item.id} 
              name={item.name} 
              price={item.price} 
              imageUrl={item.imageUrl} 
            />
          ))
        }
      </div>
    </ >
  )
}

export default ItemsPage