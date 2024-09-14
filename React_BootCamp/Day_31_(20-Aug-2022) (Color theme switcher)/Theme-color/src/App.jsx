import './App.css'
import { ColorProvider } from './context/Color.context'
import Home from './pages/Home'

function App() {

  return (
    <ColorProvider >
        <Home id='dark'/>
      </ColorProvider>
  )
}

export default App
