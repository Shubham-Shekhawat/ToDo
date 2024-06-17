import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './assets/components/Home'
import Create from './assets/components/Create'
import Update from './assets/components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
