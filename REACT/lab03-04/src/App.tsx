import Card from './components/Card'
import './App.css'

function App() {
 

  return (
    <div className="app">
      <Card name="Dr. Jeffries" age={45} role="Pediatrician" isActive={true} />
      <Card name="Dr. Smith" age={50} role="Cardiologist" isActive={false} />
      <Card name="Dr. Johnson" age={55} role="Dermatologist" isActive={true} />
    </div>
  )
}

export default App
