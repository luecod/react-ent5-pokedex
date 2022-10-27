import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import PotectedRoutes from './pages/PotectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PotectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          {/* los dos puntos son solo para nombrar el parametro */}
          <Route path='/pokedex/:id' element={<PokedexById />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>

  )
}

export default App
