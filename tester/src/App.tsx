import itemsData from './itemsData.json'
import './App.css'
import ItemCard from './items'

function App() {
  return (
    <>
    <div className="app">
      <main>
          <h1>Unicode Characters</h1>
          <div className="items-grid">
            {itemsData.map((item) => (
              <ItemCard 
                key={item.symbol}
                symbol={item.symbol}
                name={item.name}
                UnicodeVal={item.UnicodeVal}
                />
            ))}
          </div>
      </main>
    </div>
  
   </>
  )
}

export default App
